/**
 * Shaders del planeta. Todo es procedural (ruido 3D sobre la esfera), así que no
 * hay texturas que descargar ni costuras en los polos.
 *
 * La "máscara de daño" divide el planeta en dos hemisferios con una frontera
 * irregular: el lado x < 0 está sano y el lado x > 0 está dañado.
 */

// Ruido simplex 3D de Ashima Arts / Stefan Gustavson (licencia MIT).
const noise = /* glsl */ `
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+10.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0);
  const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy));
  vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);
  vec3 l=1.0-g;
  vec3 i1=min(g.xyz,l.zxy);
  vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;
  vec3 x2=x0-i2+C.yyy;
  vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857;
  vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z);
  vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy;
  vec4 y=y_*ns.x+ns.yyyy;
  vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);
  vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0;
  vec4 s1=floor(b1)*2.0+1.0;
  vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
  vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);
  vec3 p1=vec3(a0.zw,h.y);
  vec3 p2=vec3(a1.xy,h.z);
  vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(0.5-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
  m=m*m;
  return 105.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}
float fbm(vec3 p){
  float v=0.0;float a=0.5;
  for(int i=0;i<5;i++){v+=a*snoise(p);p*=2.03;a*=0.5;}
  return v;
}
float damageMask(vec3 p){
  return smoothstep(-0.10,0.10,p.x+0.28*fbm(p*2.2+vec3(7.1,1.3,4.2)));
}
`;

export const planetVertex = /* glsl */ `
varying vec3 vPos;
varying vec3 vNormalW;
varying vec3 vWorldPos;
void main(){
  vPos=normalize(position);
  vNormalW=normalize(mat3(modelMatrix)*normal);
  vec4 wp=modelMatrix*vec4(position,1.0);
  vWorldPos=wp.xyz;
  gl_Position=projectionMatrix*viewMatrix*wp;
}
`;

export const planetFragment = /* glsl */ `
uniform float uTime;
uniform vec3 uLightDir;
varying vec3 vPos;
varying vec3 vNormalW;
varying vec3 vWorldPos;
${noise}
void main(){
  vec3 p=normalize(vPos);
  vec3 n=normalize(vNormalW);
  vec3 V=normalize(cameraPosition-vWorldPos);
  vec3 L=normalize(uLightDir);

  float cont=fbm(p*1.7);
  float detail=fbm(p*6.5+3.0);
  float land=smoothstep(0.03,0.07,cont);
  float dmg=damageMask(p);

  // ---------- Lado sano ----------
  vec3 oceanDeep=vec3(0.02,0.10,0.30);
  vec3 oceanShallow=vec3(0.04,0.42,0.58);
  vec3 ocean=mix(oceanDeep,oceanShallow,smoothstep(-0.22,0.05,cont));
  vec3 forest=vec3(0.07,0.36,0.14);
  vec3 grass=vec3(0.30,0.52,0.20);
  vec3 rock=vec3(0.45,0.40,0.32);
  vec3 landCol=mix(forest,grass,smoothstep(-0.2,0.35,detail));
  landCol=mix(landCol,rock,smoothstep(0.30,0.50,cont+0.12*detail));
  float ice=smoothstep(0.80,0.86,abs(p.y)+0.06*detail);
  vec3 healthy=mix(mix(ocean,landCol,land),vec3(0.93,0.96,1.0),ice);

  // ---------- Lado dañado ----------
  vec3 murkyDeep=vec3(0.10,0.11,0.09);
  vec3 murkyShallow=vec3(0.28,0.24,0.13);
  vec3 dOcean=mix(murkyDeep,murkyShallow,smoothstep(-0.25,0.05,cont));
  float oil=smoothstep(0.30,0.48,fbm(p*4.2+11.0))*(1.0-land);
  vec3 oilCol=vec3(0.02,0.02,0.03)+0.08*vec3(sin(detail*20.0),sin(detail*20.0+2.0),sin(detail*20.0+4.0));
  dOcean=mix(dOcean,oilCol,oil*0.85);
  vec3 desert=vec3(0.46,0.29,0.14);
  vec3 burnt=vec3(0.06,0.045,0.04);
  vec3 dLand=mix(desert,burnt,smoothstep(-0.15,0.30,detail));
  float dIce=smoothstep(0.93,0.97,abs(p.y)+0.04*detail);
  vec3 damaged=mix(mix(dOcean,dLand,land),vec3(0.55,0.55,0.52),dIce);

  // Grietas incandescentes y focos de incendio (emisivos)
  float ridge=1.0-abs(snoise(p*7.0+2.0));
  float ridge2=1.0-abs(snoise(p*15.0-5.0));
  float crack=(smoothstep(0.93,0.99,ridge)+0.6*smoothstep(0.95,0.995,ridge2))*land;
  float flick=0.65+0.35*sin(uTime*6.0+detail*40.0)*sin(uTime*3.7+cont*25.0);
  float fireN=snoise(p*13.0+vec3(0.0,uTime*0.15,0.0));
  float fire=smoothstep(0.55,0.85,fireN)*land*flick;

  vec3 base=mix(healthy,damaged,dmg);

  // ---------- Iluminación ----------
  float diff=max(dot(n,L),0.0);
  float light=0.10+1.05*diff;
  vec3 R=reflect(-L,n);
  float spec=pow(max(dot(R,V),0.0),28.0)*(1.0-land)*(1.0-ice)*(1.0-dmg*0.75)*0.55;
  vec3 color=base*light+spec*vec3(1.0,0.97,0.9);

  // Luces de ciudades suaves en el lado nocturno sano
  float night=smoothstep(0.15,-0.25,dot(n,L));
  float cities=smoothstep(0.62,0.8,snoise(p*28.0))*land*(1.0-ice)*(1.0-dmg)*night;
  color+=cities*vec3(1.0,0.82,0.45)*0.6;

  vec3 glow=(crack*vec3(1.0,0.33,0.05)*1.3+fire*vec3(1.0,0.55,0.12)*1.8)*dmg;
  color+=glow*(0.55+0.9*night);

  // Borde atmosférico
  float fres=pow(1.0-max(dot(n,V),0.0),3.0);
  vec3 atm=mix(vec3(0.35,0.65,1.0),vec3(1.0,0.45,0.15),dmg);
  color+=atm*fres*(0.25+0.6*diff);

  gl_FragColor=vec4(color,1.0);
}
`;

export const cloudVertex = planetVertex;

export const cloudFragment = /* glsl */ `
uniform float uTime;
uniform float uOffset;
uniform vec3 uLightDir;
varying vec3 vPos;
varying vec3 vNormalW;
varying vec3 vWorldPos;
${noise}
void main(){
  vec3 p=normalize(vPos);
  // Posición en el marco del planeta (las nubes giran un poco más rápido)
  float c=cos(uOffset);float s=sin(uOffset);
  vec3 pp=vec3(c*p.x+s*p.z,p.y,-s*p.x+c*p.z);
  float dmg=damageMask(pp);

  float cl=fbm(p*2.6+vec3(0.0,uTime*0.01,0.0));
  float cover=smoothstep(0.08,0.45,cl);
  // Humo denso: columnas extra sobre el lado dañado
  float smoke=smoothstep(0.0,0.5,fbm(p*3.4+vec3(uTime*0.03,0.0,0.0)+5.0));

  vec3 n=normalize(vNormalW);
  float diff=max(dot(n,normalize(uLightDir)),0.0);
  vec3 white=vec3(1.0)*(0.18+0.95*diff);
  vec3 smokeCol=mix(vec3(0.16,0.13,0.11),vec3(0.38,0.30,0.24),diff)*(0.4+0.7*diff);

  vec3 col=mix(white,smokeCol,dmg);
  float alpha=mix(cover*0.75,max(cover,smoke*0.85)*0.88,dmg);
  gl_FragColor=vec4(col,alpha);
}
`;

export const atmosphereVertex = /* glsl */ `
varying vec3 vNormalV;
varying vec3 vPos;
void main(){
  vPos=normalize(position);
  vNormalV=normalize(normalMatrix*normal);
  gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);
}
`;

export const atmosphereFragment = /* glsl */ `
varying vec3 vNormalV;
varying vec3 vPos;
${noise}
void main(){
  float dmg=damageMask(vPos);
  // d = 0 en el borde exterior del halo y ~0,5 en el borde del planeta: degradado suave hacia fuera
  float d=max(-vNormalV.z,0.0);
  float intensity=pow(smoothstep(0.0,0.42,d),1.4);
  vec3 col=mix(vec3(0.30,0.62,1.0),vec3(1.0,0.42,0.12),dmg);
  gl_FragColor=vec4(col,intensity*0.9);
}
`;

# Imágenes de los informes

Cada informe muestra automáticamente una imagen de portada (en la cabecera y en su tarjeta) en cuanto existe un archivo
con su nombre en `public/images/informes/`. Si no hay imagen, se usa la franja de color de la sección.

## Cómo añadir una imagen

1. Busca una foto libre de derechos en [Unsplash](https://unsplash.com) o [Pexels](https://www.pexels.com) con la búsqueda sugerida.
2. Descárgala en horizontal (proporción 16:9, unos 1600 px de ancho) y guárdala con el nombre indicado. Valen `.webp`, `.avif`, `.jpg` o `.png`; Next.js la optimiza al servirla.
3. En el `.mdx` del informe, quita el `#` de `imageCredit` e `imageCreditUrl` y pon el nombre del fotógrafo y el enlace a la foto.
4. Revisa que el texto alternativo (`imageAlt`) describa lo que se ve en *tu* foto; ajústalo si eliges otra.

Evita fotos con marcas de agua, logotipos o personas reconocibles sin permiso. Las fotos propias son todavía mejor: aportan experiencia directa.

## Lista de imágenes

| Informe | Archivo | Búsqueda sugerida | Texto alternativo actual |
| --- | --- | --- | --- |
| Cómo funcionan los bosques tropicales | `public/images/informes/bosques-tropicales-como-funcionan.webp` | rainforest canopy aerial | Dosel de un bosque tropical húmedo visto desde arriba, con niebla entre las copas de los árboles |
| Arrecifes de coral: por qué son tan importantes y qué los amenaza | `public/images/informes/arrecifes-de-coral-importancia.webp` | coral reef fish | Arrecife de coral con corales de colores y peces tropicales en aguas claras |
| Humedales: los riñones del planeta y su papel en el ciclo del agua | `public/images/informes/humedales-ciclo-del-agua.webp` | wetland marsh birds | Humedal con aguas tranquilas, juncos y aves acuáticas al amanecer |
| Ecosistemas marinos profundos: la vida en la oscuridad | `public/images/informes/ecosistemas-marinos-profundos.webp` | deep sea jellyfish | Medusa bioluminiscente brillando en la oscuridad del océano profundo |
| Qué son los biomas y cómo se conectan entre sí | `public/images/informes/biomas-como-se-conectan.webp` | mountain vegetation zones landscape | Paisaje de montaña donde se ven distintos tipos de vegetación según la altitud |
| Qué es el efecto invernadero, explicado paso a paso | `public/images/informes/efecto-invernadero-explicado.webp` | smokestack emissions sunset | Chimeneas industriales emitiendo humo contra un cielo anaranjado al atardecer |
| El impacto de los microplásticos en los océanos | `public/images/informes/microplasticos-en-los-oceanos.webp` | microplastics hand beach | Fragmentos diminutos de plástico de colores mezclados con arena en la palma de una mano |
| Causas y consecuencias de la deforestación | `public/images/informes/deforestacion-causas-consecuencias.webp` | deforestation aerial | Vista aérea de un límite entre selva intacta y terreno talado para pastos |
| Acidificación oceánica: el otro problema del CO₂ | `public/images/informes/acidificacion-oceanica.webp` | oysters shells tide | Ostras y conchas marinas sobre rocas en la línea de marea |
| La pérdida de polinizadores y la seguridad alimentaria | `public/images/informes/polinizadores-seguridad-alimentaria.webp` | bee pollinating flower | Abeja cubierta de polen posada sobre una flor de manzano |
| Guía práctica de reciclaje correcto en casa | `public/images/informes/guia-reciclaje-correcto-casa.webp` | recycling bins colors | Contenedores de reciclaje de distintos colores para envases, papel y vidrio |
| Cómo reducir tu huella de carbono diaria | `public/images/informes/reducir-huella-de-carbono.webp` | cycling city bike lane | Persona en bicicleta por un carril bici urbano arbolado |
| Guía práctica para reducir el plástico en casa | `public/images/informes/guia-reducir-plastico-hogar.webp` | zero waste kitchen jars | Bolsas de tela, frascos de vidrio y productos a granel en una cocina |
| Ahorro de agua y energía en el hogar | `public/images/informes/ahorro-agua-energia-hogar.webp` | water tap drop | Grifo de cocina cerrado con una gota de agua a punto de caer |
| Consumo responsable y moda sostenible | `public/images/informes/consumo-responsable-moda-sostenible.webp` | thrift store clothes rack | Perchero con ropa de segunda mano en una tienda de ropa usada |
| Dossier: conservación de los ecosistemas costeros del Caribe | `public/images/informes/ecosistemas-costeros-caribe.webp` | caribbean mangroves aerial | Costa caribeña con manglares y aguas turquesas vistas desde el aire |
| Dossier: energías renovables, solar frente a eólica | `public/images/informes/energias-renovables-solar-vs-eolica.webp` | solar panels wind turbines | Paneles solares en primer plano y aerogeneradores en el horizonte |
| Dossier: proyectos de reforestación urbana | `public/images/informes/reforestacion-urbana.webp` | tree lined street city | Calle de una ciudad con árboles grandes que dan sombra a la acera |
| Dossier: la economía circular explicada con ejemplos | `public/images/informes/economia-circular-ejemplos.webp` | repair electronics workshop | Técnico reparando un aparato electrónico en un taller |
| Dossier: tecnología aplicada a la conservación ambiental | `public/images/informes/tecnologia-conservacion-ambiental.webp` | camera trap forest | Cámara trampa sujeta al tronco de un árbol en un bosque |

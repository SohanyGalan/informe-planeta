import type { CSSProperties, ReactNode } from "react";
import { illustrations } from "./illustrations";

type Props = { tipo: string; children: ReactNode };

/**
 * Párrafo destacado con una ilustración temática al lado.
 * Uso en MDX (deja líneas en blanco alrededor del texto):
 *
 *   <Escena tipo="sequia">
 *
 *   Texto del párrafo…
 *
 *   </Escena>
 *
 * Tipos: sequia, plantas, oceano, coral, bosque, abejas, contaminacion, reciclaje,
 * energia, ciudad, hielo, agua, deforestacion.
 */
export default function Escena({ tipo, children }: Props) {
  const ilu = illustrations[tipo] ?? illustrations.plantas;
  const { Art } = ilu;
  const style = { "--escena-tint": ilu.tint, "--escena-border": ilu.border } as CSSProperties;
  return (
    <div className={`escena escena-${tipo}`} style={style}>
      <div className="escena-art" aria-hidden="true">
        <svg viewBox="0 0 160 120" role="presentation" focusable="false">
          <Art />
        </svg>
      </div>
      <div className="escena-text">{children}</div>
    </div>
  );
}

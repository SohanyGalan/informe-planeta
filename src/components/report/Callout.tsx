type Props = {
  type?: "dato" | "accion" | "alerta";
  title?: string;
  children: React.ReactNode;
};

const defaults = { dato: "Dato clave", accion: "Acción inmediata", alerta: "Atención" };

/** Recuadro destacado para cifras, consejos de acción o advertencias. Uso en MDX: <Callout type="accion">…</Callout> */
export default function Callout({ type = "dato", title, children }: Props) {
  return (
    <div className={`callout callout-${type}`}>
      <div className="callout-title">{title ?? defaults[type]}</div>
      {children}
    </div>
  );
}

type Props = { points: string[] };

/** Caja de "Puntos clave" al inicio de cada informe. */
export default function KeyTakeaways({ points }: Props) {
  if (!points.length) return null;
  return (
    <section className="takeaways" aria-labelledby="puntos-clave">
      <h2 id="puntos-clave">Puntos clave de este informe</h2>
      <ul>
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </section>
  );
}

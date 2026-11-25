import PlanetScene from "./PlanetScene";

/** Panel espacial del hero con el planeta 3D y su leyenda. */
export default function PlanetPanel() {
  return (
    <figure
      className="planet-panel"
      aria-label="Planeta en 3D que rota: un hemisferio sano y otro dañado por la crisis ambiental"
    >
      <PlanetScene />
      <figcaption className="planet-legend">
        <span>
          <i className="dot dot-ok" /> Ecosistemas sanos
        </span>
        <span>
          <i className="dot dot-bad" /> Ecosistemas dañados
        </span>
      </figcaption>
    </figure>
  );
}

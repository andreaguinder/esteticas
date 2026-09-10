
import "@/styles/inicio.css"

export default function Home() {
  return (
    <>
      <h1 className="titulo">El arte del autocuidado y la estética</h1>

      <div className="container-inicio">

        <div className="container-left">
          <div className="texto">
<h2>Bienestar integral y la importancia de regalarte un momento de pausa</h2>
            <p>
              En un mundo que avanza a un ritmo acelerado, cuidar de uno mismo se ha transformado en una necesidad fundamental. La estética moderna va mucho más allá de lo superficial: es un espacio de reconexión corporal y mental donde la salud, el descanso y la renovación personal se encuentran para devolverte el equilibrio cotidiano.
            </p>
            <p>
              Los tratamientos estéticos profesionales permiten estimular la regeneración natural de la piel, mejorar la circulación, aliviar tensiones y prevenir los signos del estrés. Integrar la estética a tu rutina no es solo verse bien, sino regalarte un momento de pausa consciente donde el cuerpo y la mente se recuperan en armonía.
            </p>
          </div>
          <div className="image">
            <picture>
              {/* Si la pantalla es de 768px o más, usa la horizontal */}
              <source media="(min-width: 768px)" srcSet="/assets/estetica-inicio-desktop.jpg" />

              {/* Por defecto (menos de 768px), carga la vertical */}
              <img src="/assets/estetica-inicio-mobile.jpg" alt="Tratamiento de estética" />
            </picture>
          </div>
        </div>

        <div className="container-right">
          <div className="image">
            <picture>
              {/* Si la pantalla es de 768px o más, usa la horizontal */}
              <source media="(min-width: 768px)" srcSet="/assets/estetica-inicio2-desktop.jpg" />

              {/* Por defecto (menos de 768px), carga la vertical */}
              <img src="/assets/estetica-inicio2-mobile.jpg" alt="Tratamiento de estética" />
            </picture>
          </div>
          <div className="texto">
<h2>Ciencia, innovación y resultados visibles para tu piel</h2>
            <p>
              Los avances en dermocosmética y tecnología estética han revolucionado la manera en que cuidamos nuestro cuerpo. A través de procedimientos no invasivos y altamente precisos, es posible potenciar la producción de colágeno, devolver la luminosidad perdida y mantener la firmeza de la piel sin alterar tus expresiones naturales.
            </p>
            <p>
              Combinar el conocimiento dermatológico con protocolos a medida garantiza resultados duraderos y seguros. Apoyarse en la ciencia estética inteligente permite tratar las necesidades reales de cada etapa de la vida, promoviendo una belleza saludable, fresca y en total sintonía con tu vitalidad.
            </p>
          </div>
        </div>

      </div>

    </>
  );
}

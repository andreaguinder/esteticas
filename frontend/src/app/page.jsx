
import "@/styles/inicio.css"

export default function Home() {
  return (
    <>
      <h1 className="titulo">Conocé nuestro espacio</h1>

      <div className="container-inicio">

        <div className="container-left">
          <div className="texto">
            <h2>Tu espacio de calma, cuidado y transformación personal</h2>
            <p>
              En un mundo que avanza a un ritmo acelerado, regalarte un momento de pausa es una necesidad fundamental. Nuestro centro nace con la convicción de que la verdadera belleza florece cuando alineamos el cuidado de tu cuerpo con tu bienestar interior, mediante diagnósticos a medida y una atención profundamente personalizada.
            </p>
            <p>
              Combinamos aparatología de vanguardia y cosmética avanzada para brindarte una experiencia revitalizante. Te invitamos a conectar con una rutina de autocuidado donde vos sos la prioridad y descubrir el equilibrio perfecto entre ciencia, salud y estética.
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
            <h2>Ciencia, precisión y vanguardia al servicio de tu piel</h2>
            <p>
              Nos dedicamos a redefinir el cuidado personal combinando la ciencia dermatológica con tecnología estética de máxima efectividad. Nuestra filosofía se basa en potenciar la salud y la firmeza de tu piel mediante tratamientos no invasivos, seguros y con resultados visibles desde las primeras sesiones.
            </p>
            <p>
              Estudiamos las necesidades reales de tu rostro y cuerpo para seleccionar la aparatología y los protocolos idóneos para vos. Descubrí el impacto de una estética inteligente, pensada para elevar tu rutina diaria en un entorno de máxima elegancia y confort.
            </p>
          </div>
        </div>

      </div>

    </>
  );
}

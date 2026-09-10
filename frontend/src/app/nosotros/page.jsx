import "@/styles/nosotros.css"

export default function Nosotros() {
  return (
    <>
      <h1 className="titulo">Sobre Artemisa</h1>

      <div className="container-inicio">
        <div className="container-info">
          <div className="texto">
            <h2>Nuestra historia, filosofía y compromiso con tu bienestar</h2>
            <p>
              Estética Artemisa nace del deseo de crear un refugio exclusivo donde el cuidado de la piel y el bienestar personal se abordan con la máxima rigurosidad, calidez y profesionalismo. Inspirados en la búsqueda de la armonía natural, concebimos nuestro centro no solo como un espacio de belleza, sino como un santuario diseñado para desconectar del ritmo diario y reconectar con vos misma. Nos define una filosofía clara: potenciar tu versión más radiante a través de un diagnóstico minucioso y una atención enfocada en los detalles.
            </p>
            <p>
              En Artemisa entendemos que cada persona es única y que cada piel tiene una historia distinta que contar. Por eso, nos alejamos de las recetas estandarizadas para diseñar experiencias completamente personalizadas. Fusionamos aparatología de última generación con formulaciones cosméticas avanzadas de alta pureza, garantizando protocolos seguros, no invasivos y con resultados progresivos que destacan tu belleza auténtica. Nuestro equipo se capacita de manera continua para traer lo último en vanguardia estética, brindándote un acompañamiento integral en un entorno de confort, seguridad y elegancia.
            </p>

            <picture>
              {/* Si la pantalla es de 768px o más, usa la horizontal */}
              <source media="(min-width: 768px)" srcSet="/assets/estetica-nosotros-desktop.jpg" />

              {/* Por defecto (menos de 768px), carga la vertical */}
              <img src="/assets/estetica-nosotros-mobile.jpg" alt="Imagen del Local Artemisa" />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
}
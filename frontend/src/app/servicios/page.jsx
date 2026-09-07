import "@/styles/servicios.css";
import CardServicio from "@/components/CardServicio";

export const metadata = {
    title: "Estética Artemisa | Servicios",
    description: "Encontrá el servicio que buscás",
};

const servicios = [
  {
    id: 1,
    nombre: "Crioterapia Facial CryoMed",
    descripcion: "Tratamiento rejuvenecedor con frío para estimular el colágeno, reducir inflamación y dar luminosidad instantánea.",
    duracion: "45 min",
    imagen: "/assets/servicios/crioterapia-facial.png",
  },
  {
    id: 2,
    nombre: "Depilación Láser Definitiva",
    descripcion: "Eliminación de vello de forma segura y eficaz con tecnología láser de última generación en axilas y cuerpo.",
    duracion: "30 min",
    imagen: "/assets/servicios/depilacion.jpg",
  },
  {
    id: 3,
    nombre: "Extensiones de Pestañas",
    descripcion: "Aplicación técnica pelo a pelo para una mirada más profunda, voluminosa y natural.",
    duracion: "90 min",
    imagen: "/assets/servicios/lashes.jpg",
  },
  {
    id: 4,
    nombre: "Esculpidas en Tono White",
    descripcion: "Cuidado y esculpido completo de uñas con acabado elegante, ideal para destacar la delicadeza de las manos.",
    duracion: "60 min",
    imagen: "/assets/servicios/unias-esculpidas.jpg",
  },
  {
    id: 5,
    nombre: "Nail Art Semipermanente",
    descripcion: "Diseño de uñas personalizado con técnica francesa y delicados detalles florales en tonos celestes y pasteles.",
    duracion: "75 min",
    imagen: "/assets/servicios/unias-semipermanente.jpg",
  },
  {
    id: 6,
    nombre: "Remodelación Corporal Vacuum",
    descripcion: "Reducción de grasa localizada y contorneo corporal mediante aparatología de vacío no invasiva.",
    duracion: "60 min",
    imagen: "/assets/servicios/vaccum-adelgazar.jpg",
  },
  {
    id: 7,
    nombre: "Tratamiento Facial Antiage LPG",
    descripcion: "Estimulación celular mecánica con aparatología avanzada para rellenar arrugas y reafirmar la piel.",
    duracion: "40 min",
    imagen: "/assets/servicios/antiage-aparato.jpg",
  },
  {
    id: 8,
    nombre: "Programa Rejuvenecimiento Antiage",
    descripcion: "Tratamiento integral pensado para restaurar la firmeza, suavizar líneas de expresión y unificar el tono.",
    duracion: "90 min",
    imagen: "/assets/servicios/antiage-crio.jpg",
  },
  {
    id: 9,
    nombre: "Masajes Descontracturantes",
    descripcion: "Terapia corporal profunda focalizada en liberar tensiones musculares, aliviar el estrés y devolver la movilidad y bienestar a la espalda.",
    duracion: "50 min",
    imagen: "/assets/servicios/masajes-descontracturantes.jpg",
  }
];

export default function Servicios() {
    return (
        <>
                <h1 className="titulo">Conocé nuestros servicios</h1>
                <div className="container-servicios">
                    {servicios.map((servicio) => (
                        <CardServicio key={servicio.id} servicio={servicio} />
                    ))}
                </div>
</>
    );
}
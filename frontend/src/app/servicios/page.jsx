import "@/styles/servicios.css";
import CardServicio from "@/components/CardServicio";

export const metadata = {
    title: "Estética Artemisa | Servicios",
    description: "Encontrá el servicio que buscás",
};

export default async function  Servicios() {

    const data = await fetch(`${process.env.API_BASE_URL}/api/servicios`, { cache: 'no-store' });
    const servicios = await data.json();
    return (
        <>
                <h1 className="titulo">Conocé nuestros servicios</h1>
                <div className="container-servicios">
                    {servicios.map((servicio) => (
                        <CardServicio key={servicio.id} nombre={servicio.nombre} descripcion={servicio.descripcion} duracion={servicio.duracion} imagen={servicio.imagen} />
                    ))}
                </div>
</>
    );
}
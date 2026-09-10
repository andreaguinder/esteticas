import "@/styles/servicios.css";
import CardServicio from "@/components/CardServicio";
import Search from "@/components/Search";

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

<Search servicios={servicios} />

</>
    );
}
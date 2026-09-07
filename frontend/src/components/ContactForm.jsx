"use client";

export default function ContactForm() {

    const handleEnviarForm = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const nombre = formData.get("nombre");
        const email = formData.get("email");
        const telefono = formData.get("telefono");
        const comentario = formData.get("comentario");
        const numeroWhatsApp = "5492284228173"; 


        const mensaje = `Hola! Quiero pedir un turno.%0A%0A*Nombre:* ${nombre}%0A*Email:* ${email}%0A*Teléfono:* ${telefono}%0A*Comentario:* ${comentario}`;


        window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`, "_blank");

        e.target.reset();
    };

    return (

        <>

            <form action="/contacto" method="post" className="formulario" onSubmit={handleEnviarForm}>

                <p>
                    <label>Nombre</label>
                    <input type="text" name="nombre" />
                </p>

                <p>
                    <label>Email</label>
                    <input type="text" name="email" />
                </p>

                <p>
                    <label>Teléfono</label>
                    <input type="text" name="telefono" />
                </p>

                <p>
                    <label>Comentario</label>
                    <textarea name="comentario" placeholder="Contanos que servicio te interesa..."></textarea>
                </p>

                <p className="centrar">
                    <button type="submit" className="btn-whatsapp">
                    Pedir turno por WhatsApp
                </button>
                </p>

            </form>

        </>

    )


}
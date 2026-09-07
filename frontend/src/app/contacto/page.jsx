import "@/styles/contacto.css";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Estética Artemisa | Contacto",
  description: "Contactate con nosotros para consultas o para reservar tu turno.",
};

export default function Contacto() {
  return (
    <main className="contacto-container">
      <div className="contacto-grid">
        

        <section className="contacto-section contacto-form-section">
          <h2 className="contacto-title">Envianos tu consulta</h2>
          <ContactForm />
        </section>

        <section className="contacto-section contacto-info-section">
          <h2 className="contacto-title">Otras vías de contacto</h2>
          
          <div className="contacto-info-card">
            <p className="contacto-info-text">
              Podés comunicarte directamente con nosotros por WhatsApp para coordinar tu atención:
            </p>
            
            <a 
              href="https://wa.me/5492284228173" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contacto-whatsapp-link"
            >
              <i className="fab fa-whatsapp"></i> +54 9 2284 228173
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Estética Artemisa. Todos los derechos reservados.</p>
        <p>Dirección: Calle Falsa 123, Ciudad, País</p>
        <p>Teléfono: +54 9 11 1234-5678 | Email: info@artemisa.com</p>
      </div>

      <div className="footer-design">
        <p>Diseño y desarrollo por <a href="https://andreaguinder.com/" target="_blank" rel="noopener noreferrer" className="footer-link">Andrea Guinder</a>.</p>
        <p><b>Aviso legal:</b> Este sitio web es un proyecto académico / demostrativo. Toda la información, servicios y marcas presentadas son ficticias y no corresponden a un establecimiento real.</p>
      </div>
    </footer>
  );
}
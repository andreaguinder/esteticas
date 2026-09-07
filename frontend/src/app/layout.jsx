import "@/styles/globals.css"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Estética Artemisa",
  description: "Encontrá tus servicios de estética favoritos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>

        <Navbar/>

        <main className="main-container">
          {children}
        </main>



      </body>
    </html>
  );
}
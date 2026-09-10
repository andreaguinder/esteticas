import "@/styles/globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

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



        <Footer/>
      </body>
    </html>
  );
}
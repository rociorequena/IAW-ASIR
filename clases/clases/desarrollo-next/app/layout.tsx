import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";

export const metadata = {
  title: "PokéNext Clase",
  description: "Proyecto Escolar con Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <LanguageProvider>
          
          <Header />  
          <main className="container">
            {children}
          </main>
          <Footer />

        </LanguageProvider>
      </body>
    </html>
  );
}
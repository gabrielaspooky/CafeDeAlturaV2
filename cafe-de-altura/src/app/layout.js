import { Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '../../components/ui/Navbar';
import { CartProvider } from '@/context/CartContext'; 
import CopyrightFooter from '../../components/ui/CopyrightFooter'; 
const outfit = Outfit({ subsets: ['latin'] }); 
export const metadata = {
  title: 'Café de altura',
  description: 'Todos los derechos reservados - Café de Altura SL - 2024',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={outfit.className}>
        <CartProvider>
          <Navbar />
          <main>{children}</main> {/* Asegúrate de que el contenido principal esté envuelto en un <main> */}
          <CopyrightFooter /> 
        </CartProvider>
      </body>
    </html>
  );
}


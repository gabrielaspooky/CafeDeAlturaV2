import { Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '../../components/ui/Navbar';
import { CartProvider } from '@/context/CartContext'; 
import CopyrightFooter from '../../components/ui/CopyrightFooter'; 
const outfit = Outfit({ subsets: ['latin'] }); 
export const metadata = {
  title: 'Café de altura',
  description: 'Todos los derechos reservados - Café de Altura SL - 2024',
  openGraph: {
  images: [
    {
      url: 'https://cafe-de-altura-alpha.vercel.app/_next/image?url=%2FHeroimage.png&w=640&q=75',
      width: 1200,
      height: 630,
      alt: 'Café de Altura',
    },
  ],
}
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={outfit.className}>
        <CartProvider>
          <Navbar />
          <main>{children}</main> 
          <CopyrightFooter /> 
        </CartProvider>
      </body>
    </html>
  );
}


import { Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '../../components/ui/Navbar';
import { CartProvider } from '@/context/CartContext'; // Ajusta la ruta según sea necesario
import ShoppingBagDrawer from '../../components/ui/BagDrawer';

const inter = Outfit({ subsets: ['latin'] });

export const metadata = {
  title: 'Café de altura',
  description: 'Todos los derechos reservados - Café de Altura SL - 2024',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          {children}
          <ShoppingBagDrawer />
        </CartProvider>
      </body>
    </html>
  );
}



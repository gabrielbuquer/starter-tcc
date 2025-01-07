import { Montserrat } from 'next/font/google';

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-montserrat', // Defina a variável CSS
});

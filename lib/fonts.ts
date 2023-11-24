import { Libre_Caslon_Text, Kanit } from 'next/font/google'

export const libre = Libre_Caslon_Text({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif'
});

export const kanit = Kanit({
  weight: ['400', '700', '200', '300'],
  subsets: ['latin'],
  variable: '--font-sans'
});
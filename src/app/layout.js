import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // choose the weights you need
  display: 'swap',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Olympus Painters',
  description: 'Professional painting services for homes and businesses',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        

        <Navbar></Navbar>
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono, Aleo, Archivo } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/ui/components/Navbar/Nabvar";
import Footer from "@/ui/components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import AuthProvider from "@/context/AuthContext";
import CartProvider from "@/context/CartContext";

const primaryFont = Archivo({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const secundaryFont = Aleo({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Phone Commerce",
  description: "GPhone Commerce es una plataforma para comercializar y vender",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${primaryFont.variable} ${secundaryFont.variable} antialiased`}
      >
        <AuthProvider>
          <CartProvider>
          <Navbar />
          <main className="container">{children}</main>
          <Footer /> <ToastContainer/>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

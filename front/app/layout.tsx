import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/ui/components/Navbar/Nabvar";
import Footer from "@/ui/components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import AuthProvider from "@/context/AuthContext";
import CartProvider from "@/context/CartContext";

const primaryFont = Geist({
  variable: "--font-primary",
  subsets: ["latin"],
});

const secundaryFont = Geist_Mono({
  variable: "--font-secondary",
  subsets: ["latin"],
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
    <html lang="es">
      <body
        className={`${primaryFont.variable} ${secundaryFont.variable} antialiased`}
      >
        <AuthProvider>
          <CartProvider>
            <Navbar />
            <main className="container py-8">{children}</main>
            <Footer />
            <ToastContainer theme="dark" />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

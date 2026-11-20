
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sofía Gutiérrez Bohórquez | Portafolio",
    template: "%s | Sofía Gutiérrez Bohórquez",
  },
  description:
    "Portafolio de diseño industrial y diseño de productos de Sofía Gutiérrez Bohórquez.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${urbanist.variable} min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

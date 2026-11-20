
import type { Metadata } from "next";
import "./globals.css";

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
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}

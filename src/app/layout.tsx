import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wallapaper JB",
  description: "Galeria de imagens",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="bg-black">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

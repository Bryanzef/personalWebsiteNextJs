import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import Header from "./components/header";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${poppins.variable}  `}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

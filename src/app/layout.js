import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cassino ZETA",
  description: `🎰 Venha jogar na Cassino Zeta! 🎲
Sinta a emoção das apostas, divirta-se com nossos jogos exclusivos e tenha a chance de ganhar prêmios incríveis! Não perca essa experiência única.

💎 Cassino Zeta – Onde a sorte encontra a diversão!`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

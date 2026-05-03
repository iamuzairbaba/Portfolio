import { Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

export const metadata = {
  title: "Uzair Bashir | Full Stack Developer",
  description:
    "Animated full stack developer portfolio for Uzair Bashir featuring experience, ERP work, and direct contact.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${syne.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}

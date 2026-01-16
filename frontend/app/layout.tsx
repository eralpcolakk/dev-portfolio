import "./globals.css";
import Navbar from "../components/Navbar";
import { Inter } from "next/font/google";


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});



export const metadata = {
  title: "Developer Portfolio",
  description: "Personal portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className={`${inter.className} bg-[var(--bg)] text-[var(--text)] antialiased`} suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

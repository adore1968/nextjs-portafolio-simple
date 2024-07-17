import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import "bootswatch/dist/cosmo/bootstrap.min.css";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio",
  description: "Ryan Ray Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="container py-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

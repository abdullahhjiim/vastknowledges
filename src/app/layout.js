import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Discover Vast Knowledge: Your Ultimate Hub for Insightful Articles and Expert Reviews.",
  description: "Experience the richness of Vast Knowledge! Explore revolutionary technology, delicious food preparations, elegant fashion secrets, and dynamic fitness strategies. Let our blog inspire and enlighten you every day.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

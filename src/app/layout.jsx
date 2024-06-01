import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Inter({ subsets: ["latin"], variable: "--font-poppins" });

export const metadata = {
  title: "Discover Vast Knowledge: Your Ultimate Hub for Insightful Articles and Expert Reviews.",
  description: "Experience the richness of Vast Knowledge! Explore revolutionary technology, delicious food preparations, elegant fashion secrets, and dynamic fitness strategies. Let our blog inspire and enlighten you every day.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, poppins.variable)}>
        {children}

        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}

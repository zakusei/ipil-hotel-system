import "@/styles/globals.css";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Ipil Hotel System",
  description: "Centralized Hotel Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader color="#09090b" />
        {children}
        <Toaster />
      </body>
    </html>
  );
}

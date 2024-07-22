import { Inter } from "next/font/google";
import "./globals.css";
 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LOSPAY - Payment",
  description: "Online payment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-quicksand">{children}</body>
    </html>
  );
}

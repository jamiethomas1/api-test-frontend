import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "API Test Frontend",
  description: "For testing backend stuff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <h1 className="text-4xl my-4 text-center">Reading List</h1>
        {children}
      </body>
    </html>
  );
}

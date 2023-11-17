import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

export const metadata: Metadata = {
  title: "Pool IT Solutions",
  description: "Get a car what you want",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className="">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

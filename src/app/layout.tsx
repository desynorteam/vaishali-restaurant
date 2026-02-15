import type { Metadata } from "next";
import { Inter, Playfair_Display, Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vaishali | Pune's Iconic South Indian Restaurant",
  description: "A legacy woven through generations, serving the authentic soul of South India in the heart of Pune's greenery since 1954.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${fraunces.variable} ${workSans.variable} antialiased botanical-watermark`}
      >
        {children}
      </body>
    </html>
  );
}

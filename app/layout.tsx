import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import ReactLenis from "lenis/react";
// import ReactLenis from "@studio-freight/react-lenis/types";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kairos Webhub",
  description: "A web design agency that focuses on offering the best web solutions to clients based in Nigeria",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const lenisOptions = {
    lerp: 0.1,
    duration: 1.5,
    smoothTouch: false, //smooth scroll for touch devices
    smooth: true,
  };
  return (
    <html lang="en" className='dark text-white' >
      <body className={inter.className}>
        <Providers>
        <ReactLenis root options={lenisOptions}>

          {children}
        </ReactLenis>
        </Providers>
      </body>
    </html>
  );
}

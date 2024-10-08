import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"



export const metadata: Metadata = {
  title: "Wilzio Center",
  description: "Integrated App",
};


 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        {children}
      </body>
    </html>
  );
}

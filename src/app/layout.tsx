import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/Header";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ryan Tsang Website",
  description: "Welcome to my site!",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />      {/* Global header */}
        {/* Page Content */}
        <main className="site-main">
          {children}
        </main>

        {/* Global Footer */}
        <footer className="site-footer">
          <p>Ryan Tsang {new Date().getFullYear()}</p>
        </footer>

      </body>
    </html>
  );
}

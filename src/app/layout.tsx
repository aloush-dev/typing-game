import type { Metadata } from "next";
import { Inter, Noto_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Noto_Sans({ subsets: ["latin"], weight: ["800"] });

export const metadata: Metadata = {
  title: "Typing Game",
  description: "Typing game by Aloush",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-[#41393E] min-h-screen">
          {children}
          <div className="text-white text-center p-6">
            <Link href="https://aloush.dev" target="_blank">
              aloush.dev
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}

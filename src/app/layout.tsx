import type { Metadata } from "next";
import { Poppins, Questrial } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const questrial = Questrial({
  variable: "--font-questrial",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Éternité | For My Favorite Person",
  description: "Ours.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${questrial.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-cream text-charcoal">{children}</body>
    </html>
  );
}

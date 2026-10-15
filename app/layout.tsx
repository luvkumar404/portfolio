import type { Metadata } from "next";
import {
  Fira_Code,
  Fraunces,
  Funnel_Display,
  Open_Sans,
  Saira,
} from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-fraunces",
});

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-display",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-sans",
});

const saira = Saira({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-saira",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Minimal & Clean Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${firaCode.variable} ${fraunces.variable} ${funnelDisplay.variable} ${openSans.variable} ${saira.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="font-body antialiased min-h-screen bg-background text-foreground">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

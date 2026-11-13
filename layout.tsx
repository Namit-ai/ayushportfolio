import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Ayush Bhandula | Technical Recruiter",
  description:
    "Technical Recruiter specializing in US IT staffing, global talent sourcing, and recruitment operations with Fortune 500 clients.",
  keywords: [
    "Technical Recruiter",
    "Staffing",
    "Talent Sourcing",
    "Recruitment Operations",
    "US Staffing",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${plusJakarta.variable} font-inter bg-slate-950 text-slate-100`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GoogleAnalytics from "../components/GoogleAnalytics";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Navya Nanduri - Business Analytics Professional | Data Science Portfolio",
  description: "Business Analytics Professional specializing in predictive modeling, machine learning, and data-driven solutions. Experienced in Python, SQL, Tableau, and advanced analytics with proven results in railway maintenance, market analysis, and business optimization.",
  keywords: [
    "Business Analytics",
    "Data Science", 
    "Machine Learning",
    "Python",
    "SQL", 
    "Tableau",
    "Predictive Analytics",
    "Data Visualization",
    "Business Intelligence",
    "Statistical Modeling",
    "Navya Nanduri"
  ],
  authors: [{ name: "Navya Nanduri" }],
  creator: "Navya Nanduri",
  openGraph: {
    title: "Navya Nanduri - Business Analytics Professional",
    description: "Transforming data into strategic business solutions with cutting-edge analytics and machine learning expertise.",
    url: "https://navyananduri.com",
    siteName: "Navya Nanduri Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Navya Nanduri - Business Analytics Professional",
    description: "Business Analytics Professional specializing in data-driven solutions and predictive modeling.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#2563eb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <GoogleAnalytics />
      </head>
      <body className="font-sans antialiased bg-slate-900 text-white">
        {children}
      </body>
    </html>
  );
}
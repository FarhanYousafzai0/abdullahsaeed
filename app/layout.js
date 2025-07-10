// app/layout.js or app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Nav";
import Footer from "./Components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Abdullah LinkedInWala",
  description: "Optimize your LinkedIn profile and grow your career!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}

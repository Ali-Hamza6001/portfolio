import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ali Hamza | Frontend Engineer",
  description: "Frontend Engineer with ~1 year of experience specializing in React.js, Next.js, and modern web technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-background text-foreground transition-colors duration-300 selection:bg-primary/30`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Looking from "@/components/Looking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Ali Hamza - Frontend Engineer | React & Next.js Developer",
  description: "Frontend Engineer with ~1 year of experience building scalable web and mobile applications using React.js, Next.js, and modern UI frameworks.",
  keywords: "Ali Hamza, Frontend Developer, Frontend Engineer, React Developer, Next.js Developer, JavaScript, Web Development, Techsolio",
  authors: [{ name: "Ali Hamza" }],
  openGraph: {
    title: "Ali Hamza - Frontend Engineer",
    description: "Frontend Engineer specializing in React.js, Next.js, and modern web development.",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Looking />
      <Contact />
      <Footer />
    </main>
  );
}

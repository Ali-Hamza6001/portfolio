"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background border-b-2 border-foreground py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter uppercase"
        >
          Ali <span className="bg-foreground text-background px-1">Hamza</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-1 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 transition-all ${
                activeSection === link.href.substring(1) 
                  ? "bg-foreground text-background" 
                  : "text-foreground hover:bg-foreground/5"
              }`}
            >
              {link.name}
            </a>
          ))}
          
          <button
            onClick={toggleTheme}
            className="ml-4 w-10 h-10 border-2 border-foreground flex items-center justify-center bg-background hover:bg-foreground hover:text-background transition-all"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex gap-4">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 border-2 border-foreground flex items-center justify-center bg-background active:bg-foreground active:text-background transition-colors"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="w-10 h-10 border-2 border-foreground flex items-center justify-center bg-background active:bg-foreground active:text-background transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            style={{ originY: 0 }}
            className="absolute top-full left-0 right-0 bg-background border-b-4 border-foreground md:hidden flex flex-col overflow-hidden"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-black uppercase tracking-tighter p-6 border-b border-foreground/5 last:border-none ${
                  activeSection === link.href.substring(1) ? "bg-foreground text-background" : "text-foreground"
                }`}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

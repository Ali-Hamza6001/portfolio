"use client";

import { Github, Linkedin } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/Ali-Hamza6001",
    label: "GitHub Profile"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ali-hamza001/",
    label: "LinkedIn Profile"
  }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-foreground bg-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Branding */}
          <div className="text-center md:text-left">
            <p className="text-3xl font-black tracking-tighter mb-2 uppercase text-foreground">
              Ali <span className="bg-foreground text-background px-1">Hamza</span>
            </p>
            <p className="text-sm font-black uppercase tracking-widest text-foreground/40">
              Creative Frontend Engineer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-14 h-14 border-2 border-foreground bg-background hover:bg-foreground hover:text-background flex items-center justify-center transition-all hard-shadow-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none group text-foreground"
              >
                <social.icon className="w-6 h-6 transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t-2 border-foreground/10 text-center">
          <p className="text-xs font-black uppercase tracking-widest text-foreground/30 flex items-center justify-center gap-3">
            © {currentYear} Ali Hamza
          </p>
        </div>
      </div>
    </footer>
  );
}

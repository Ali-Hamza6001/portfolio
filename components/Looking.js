"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, Zap } from "lucide-react";

const opportunities = [
  {
    icon: Briefcase,
    title: "Frontend & React Roles",
    description: "Looking for Frontend, React, and Next.js roles where I can build scalable applications (preferred)"
  },
  {
    icon: Users,
    title: "Freelance & Collaboration",
    description: "Open to freelance projects and collaborative opportunities with development teams"
  },
  {
    icon: Zap,
    title: "Startup Environment",
    description: "Interested in fast-paced startup environments where I can make a significant impact"
  }
];

export default function Looking() {
  return (
    <section id="looking" className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 text-center uppercase tracking-tighter">
            Next <span className="bg-foreground text-background px-2">Ventures</span>
          </h2>
          <p className="text-center text-foreground font-medium max-w-2xl mx-auto mb-16 md:mb-20 uppercase tracking-tight text-sm sm:text-base">
            Open for high-impact collaborations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {opportunities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-2 border-foreground p-8 sm:p-10 hover:hard-shadow transition-all text-center group bg-background"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-foreground flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:bg-foreground group-hover:text-background transition-colors text-foreground">
                <item.icon className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black mb-4 uppercase tracking-tighter text-foreground">{item.title}</h3>
              <p className="text-foreground font-bold text-[10px] sm:text-xs uppercase leading-tight">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-4 border-foreground p-8 sm:p-12 text-center max-w-4xl mx-auto bg-background hard-shadow-large"
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter text-foreground">
            LET&apos;S CO-CREATE THE <span className="bg-foreground text-background px-2">FUTURE</span>
          </h3>
          <p className="text-foreground font-bold mb-10 leading-tight uppercase max-w-xl mx-auto text-xs sm:text-sm md:text-base">
            I build things that work. I build things that scale. I build things that matter. 
            If you have a challenge, I have the stack.
          </p>
          <a
            href="#contact"
            className="inline-block bg-foreground text-background px-8 sm:px-12 py-4 sm:py-6 font-black uppercase tracking-tighter hover:bg-background hover:text-foreground border-2 border-foreground transition-all hard-shadow active:translate-x-1 active:translate-y-1 active:shadow-none text-sm sm:text-base"
          >
            Initiate Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}

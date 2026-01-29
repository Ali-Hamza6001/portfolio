"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Users, Globe } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Expert",
    description: "Deep expertise in React, Next.js, and modern JavaScript ecosystem"
  },
  {
    icon: Rocket,
    title: "Startup Experience",
    description: "Built and shipped features used by thousands of users at TechSolio"
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborative approach with designers, backend devs, and stakeholders"
  },
  {
    icon: Globe,
    title: "Remote Ready",
    description: "Self-driven and experienced in remote-first workflows"
  }
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 text-center uppercase tracking-tighter">
            About <span className="bg-foreground text-background px-2">Me</span>
          </h2>
          <p className="text-center text-foreground font-medium max-w-2xl mx-auto mb-16 md:mb-20 uppercase tracking-tight text-sm sm:text-base">
            Engineering digital experiences with clinical precision
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-black bg-foreground text-background inline-block px-4 py-2 uppercase tracking-tighter">Who I Am</h3>
              <p className="text-foreground font-medium leading-relaxed uppercase">
                I'm a Frontend Engineer with ~1 year of hands-on experience building scalable web 
                and mobile applications. My expertise is in React.js, Next.js, and modern UI frameworks.
              </p>
              <p className="text-foreground font-medium leading-relaxed uppercase border-l-4 border-foreground pl-4">
                Currently working at Techsolio, I've been building and maintaining production-ready 
                web applications, integrating frontend interfaces with REST APIs.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t-4 border-foreground border-dashed">
              <h3 className="text-3xl font-black uppercase tracking-tighter flex items-center gap-3">
                <span className="w-8 h-8 bg-foreground text-background flex items-center justify-center text-sm font-black">E</span>
                Academic Blueprint
              </h3>
              <div className="bg-secondary border-2 border-foreground p-6 sm:p-8 hover:hard-shadow transition-all">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                  <div>
                    <h4 className="text-xl font-black uppercase tracking-tight">BS Information Technology</h4>
                    <p className="text-foreground font-black uppercase tracking-widest text-xs opacity-60">University of Education Lahore</p>
                  </div>
                  <span className="bg-foreground text-background px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em]">2022 — 2026</span>
                </div>
                <p className="text-[10px] font-black uppercase leading-tight text-foreground/40">
                  Focusing on Advanced Web Technologies, Data Structures, and Scalable Software Architecture
                </p>
              </div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-background border-2 border-foreground p-6 hover:hard-shadow transition-all group"
              >
                <div className="w-14 h-14 bg-background border-2 border-foreground flex items-center justify-center mb-6 group-hover:bg-foreground group-hover:text-background transition-colors">
                  <item.icon className="w-7 h-7" />
                </div>
                <h4 className="font-black uppercase tracking-tighter mb-2 text-foreground">{item.title}</h4>
                <p className="text-xs text-foreground/60 font-bold leading-tight uppercase">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

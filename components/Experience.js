"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code, ArrowLeft } from "lucide-react";

const experiences = [
  {
    company: "Techsolio",
    role: "Frontend Engineer",
    period: "2025 - Present",
    type: "Full-time",
    responsibilities: [
      "Built and maintained responsive web applications using React.js and Next.js for production use",
      "Integrated frontend interfaces with REST APIs, ensuring smooth data flow and performance",
      "Worked with designers and product teams to convert UI/UX designs into functional features",
      "Wrote clean, scalable, and reusable code following best practices and modern development standards",
      "Collaborated with cross-functional teams to deliver production-ready solutions",
      "Implemented responsive and modern UI designs with focus on performance optimization"
    ],
    tech: ["React.js", "Next.js", "Tailwind CSS", "REST APIs", "Git"]
  }
];

const projects = [
  {
    id: "prospera",
    category: "web",
    title: "Prospera",
    description: "Business & tax consulting web platform with comprehensive admin panel for managing clients, services, and business operations",
    tech: ["React.js", "Next.js", "Node.js"],
    link: "/projects/prospera"
  },
  {
    id: "techsolio-website",
    category: "web",
    title: "Techsolio Website",
    description: "Company website to showcase services and digital solutions with modern design and responsive interface",
    tech: ["Next.js", "Tailwind CSS"],
    link: "/projects/techsolio-website"
  },
  {
    id: "pulsvine-web",
    category: "web",
    title: "Pulsvine Web",
    description: "Real-time blood donation management portal for hospitals featuring request tracking and donor database management",
    tech: ["React.js", "Node.js", "MongoDB"],
    link: "/projects/pulsvine-web"
  },
  {
    id: "chatrout-web",
    category: "web",
    title: "Chatrout Web",
    description: "Encrypted desktop-class messaging client built with Web Crypto API for secure real-time communication in-browser",
    tech: ["React.js", "Socket.io", "Encryption"],
    link: "/projects/chatrout-web"
  },
  {
    id: "pulsvine-app",
    category: "app",
    title: "Pulsvine App",
    description: "High-performance blood donation mobile application connecting donors and recipients via real-time geolocation matching",
    tech: ["React Native", "Firebase", "Node.js"],
    link: "/projects/pulsvine-app"
  },
  {
    id: "chatrout-app",
    category: "app",
    title: "Chatrout Mobile",
    description: "Privacy-focused messenger app with end-to-end encryption and real-time Socket.io communication protocol",
    tech: ["React Native", "Socket.io", "Encryption"],
    link: "/projects/chatrout-app"
  }
];

export default function Experience() {
  const [activeCategory, setActiveCategory] = useState("web");

  const filteredProjects = projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 text-center uppercase tracking-tighter">
            Work & <span className="bg-foreground text-background px-2">Impact</span>
          </h2>
          <p className="text-center text-foreground font-medium max-w-2xl mx-auto mb-16 md:mb-20 uppercase tracking-tight text-sm sm:text-base">
            Proof of technical excellence
          </p>
        </motion.div>

        {/* Experience Section */}
        <div className="mb-24">
          <h3 className="text-2xl sm:text-3xl font-black mb-10 md:mb-12 border-b-4 border-foreground inline-block uppercase tracking-tighter text-foreground">Experience</h3>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-2 border-foreground p-6 sm:p-10 mb-8 bg-background group hover:hard-shadow transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 border-b-2 border-foreground pb-6 transition-colors group-hover:border-foreground/20">
                <div className="mb-4 md:mb-0">
                  <h4 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-2 text-foreground">{exp.role}</h4>
                  <p className="text-lg sm:text-xl font-black uppercase tracking-tight text-background bg-foreground inline-block px-2">{exp.company}</p>
                </div>
                <div className="text-foreground font-black uppercase text-xs sm:text-sm md:text-right tracking-widest">
                  <p>{exp.period}</p>
                  <p className="opacity-50">{exp.type}</p>
                </div>
              </div>
              
              <ul className="space-y-4 mb-10">
                {exp.responsibilities.map((item, i) => (
                  <li key={i} className="text-foreground font-bold uppercase text-[10px] sm:text-xs md:text-sm flex items-start gap-4">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-foreground mt-1 flex-shrink-0" />
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-[10px] font-black bg-foreground text-background uppercase tracking-tighter"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Projects Section */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 border-b-4 border-foreground pb-8">
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-foreground">Selected Works</h3>
            
            <div className="flex w-full md:w-auto gap-2 sm:gap-4">
              <button
                onClick={() => setActiveCategory("web")}
                className={`flex-1 md:flex-none px-4 sm:px-8 py-3 text-xs sm:text-sm font-black uppercase tracking-tighter border-2 border-foreground transition-all ${
                  activeCategory === "web" 
                    ? "bg-foreground text-background shadow-none translate-x-1 translate-y-1" 
                    : "bg-background text-foreground hard-shadow-sm hover:-translate-y-0.5 hover:shadow-foreground"
                }`}
              >
                Web Projects
              </button>
              <button
                onClick={() => setActiveCategory("app")}
                className={`flex-1 md:flex-none px-4 sm:px-8 py-3 text-xs sm:text-sm font-black uppercase tracking-tighter border-2 border-foreground transition-all ${
                  activeCategory === "app" 
                    ? "bg-foreground text-background shadow-none translate-x-1 translate-y-1" 
                    : "bg-background text-foreground hard-shadow-sm hover:-translate-y-0.5 hover:shadow-foreground"
                }`}
              >
                App Projects
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative border-2 border-foreground bg-background hover:hard-shadow transition-all"
                >
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-16 h-16 border-2 border-foreground flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                        <Code className="w-8 h-8" />
                      </div>
                      <Link
                        href={project.link}
                        className="w-12 h-12 border-2 border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-all hard-shadow-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none bg-background text-foreground"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </Link>
                    </div>

                    <Link href={project.link} className="block group/title mb-4">
                      <h4 className="text-2xl font-black uppercase tracking-tighter group-hover/title:bg-foreground group-hover/title:text-background inline-block px-1 transition-all text-foreground">
                        {project.title}
                      </h4>
                    </Link>
                    <p className="text-foreground font-bold uppercase text-xs mb-8 leading-tight tracking-tight h-10 line-clamp-2">
                       {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-[10px] font-black uppercase border border-foreground text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link 
                      href={project.link}
                      className="inline-flex items-center gap-2 font-black uppercase text-sm tracking-tighter border-b-2 border-foreground hover:bg-foreground hover:text-background transition-all px-1 text-foreground"
                    >
                      Examine Case <ArrowLeft className="rotate-180" size={14} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}



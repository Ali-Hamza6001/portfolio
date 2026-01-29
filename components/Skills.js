"use client";

import { motion } from "framer-motion";

const skills = {
  "Frontend Development": [
    "React.js",
    "Next.js",
    "JavaScript (ES6+)",
    "HTML5 & CSS3",
    "Tailwind CSS",
    "Responsive Design",
    "Component-based Architecture"
  ],
  "Backend & Integration": [
    "REST API Integration",
    "Node.js (Basic)",
    "API Integration",
    "Data Flow Management"
  ],
  "UI/UX Performance": [
    "Responsive & Modern UI Design",
    "Performance Optimization",
    "Clean Code Practices",
    "Scalable Architecture"
  ],
  "Tools & Version Control": [
    "Git",
    "GitHub",
    "Problem Solving & Debugging",
    "Cross-team Collaboration",
    "Requirement Understanding"
  ]
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 text-center uppercase tracking-tighter">
            Skills & <span className="bg-foreground text-background px-2">Tools</span>
          </h2>
          <p className="text-center text-foreground font-medium max-w-2xl mx-auto mb-16 md:mb-20 uppercase tracking-tight text-sm sm:text-base">
            The technical arsenal behind the craft
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-background border-2 border-foreground p-8 hover:bg-foreground group transition-colors"
            >
              <h3 className="text-xl font-black mb-8 border-b-2 border-foreground pb-2 group-hover:text-background group-hover:border-background uppercase tracking-tighter transition-colors">{category}</h3>
              <ul className="space-y-4">
                {items.map((skill, index) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="text-foreground group-hover:text-background/60 font-bold text-sm flex items-center gap-3 uppercase tracking-tight transition-colors"
                  >
                    <span className="w-2 h-2 bg-foreground group-hover:bg-background transition-colors" />
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

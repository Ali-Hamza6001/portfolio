"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[85vh] flex items-center pt-28 sm:pt-32 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* TEXT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-20"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-foreground font-black mb-4 tracking-wider uppercase border-l-4 border-foreground pl-4"
            >
              Frontend & Creative Engineer
            </motion.p>

            <div className="mb-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col group"
              >
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black tracking-[-0.05em] leading-[0.85] uppercase flex flex-col">
                  <span className="flex items-center gap-4 flex-wrap">
                    I BUILD
                    <motion.span
                      animate={{ rotate: [0, -2, 2, 0] }}
                      transition={{ repeat: Infinity, duration: 5 }}
                      className="inline-block px-4 py-2 bg-foreground text-background text-base sm:text-lg md:text-2xl font-black tracking-widest -rotate-2 group-hover:rotate-0 transition-transform hard-shadow-sm"
                    >
                      SCALABLE
                    </motion.span>
                  </span>

                  <span className="text-transparent text-outline-foreground group-hover:text-foreground transition-all duration-700 ease-in-out">
                    DIGITAL
                  </span>

                  <span className="bg-foreground text-background px-2 mt-2 w-fit">
                    TRUTH.
                  </span>
                </h1>
              </motion.div>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-foreground font-medium mb-10 max-w-xl leading-tight uppercase">
              Hi, I&apos;m Ali Hamza. I translate complex business requirements into
              high-performance, production-ready interfaces with ~1 year of
              hand-on experience.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
  <a
  href="#projects"
  className="bg-foreground text-background px-10 py-5 font-black uppercase tracking-tighter hover:bg-background hover:text-foreground border-2 border-foreground transition-all hard-shadow active:translate-x-1 active:translate-y-1 active:shadow-none text-center"
>
  View Work
</a>


  <a
    href="/Resume.pdf"
    download
    target="_blank"
    rel="noopener noreferrer"
    className="bg-secondary text-foreground px-10 py-5 font-black uppercase tracking-tighter hover:bg-foreground hover:text-background border-2 border-foreground transition-all hard-shadow active:translate-x-1 active:translate-y-1 active:shadow-none text-center inline-flex items-center justify-center gap-3"
  >
    <Download className="w-5 h-5" />
    Download Resume
  </a>
</div>


          </motion.div>

          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative z-10 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg p-4 border-4 border-foreground bg-background hard-shadow-large">
              <div className="relative aspect-square border-2 border-foreground bg-secondary flex items-center justify-center overflow-hidden group">
                <div className="flex flex-col items-center justify-center text-center p-8 z-20 transition-transform duration-500 group-hover:scale-110">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 bg-background border-4 border-foreground flex items-center justify-center mb-6">
                    <Image src="/images/hero.jpg" alt="Hero" width={100} height={100} className="w-40 h-40 object-cover" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter">
                    Ali Hamza
                  </h2>
                  <p className="bg-foreground text-background px-2 text-xs sm:text-sm uppercase tracking-widest mt-4 font-black">
                    Frontend Engineer
                  </p>
                </div>

                {/* Grid Pattern */}
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, var(--color-foreground) 1.5px, transparent 1.5px)",
                    backgroundSize: "20px 20px",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

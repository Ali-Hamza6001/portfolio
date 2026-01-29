"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ArrowLeft, ExternalLink, Zap, Layout, Code2, AlertTriangle } from "lucide-react";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

export default function ProjectCaseStudy({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const router = useRouter();
  const { slug } = params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-8">Project not found</p>
          <Link href="/" className="text-primary hover:underline flex items-center justify-center gap-2">
            <ArrowLeft size={20} /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground font-medium">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden border-b-4 border-foreground bg-secondary">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button 
              onClick={() => router.back()}
              className="flex items-center gap-2 text-foreground font-black uppercase tracking-tighter hover:bg-foreground hover:text-background border-2 border-foreground px-4 py-2 mb-8 group transition-all"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              Return to Catalog
            </button>
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter uppercase leading-[0.9] text-foreground">
              {project.title}
            </h1>
            <p className="text-xl md:text-3xl text-foreground font-black uppercase border-l-8 border-foreground pl-6 mb-8 max-w-3xl">
              {project.tagline}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-12">
              {project.tech.map((t) => (
                <span key={t} className="px-4 py-1 bg-foreground text-background text-xs font-black uppercase tracking-widest">
                  {t}
                </span>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="md:col-span-2 aspect-video border-4 border-foreground bg-background p-4 hard-shadow-large group">
                   <Image
                      src={project.image}
                      alt={project.title}
                      width={1200}
                      height={675}
                      className="w-full h-full object-cover border-2 border-foreground grayscale group-hover:grayscale-0 transition duration-300"
                      priority
                    />
                   </div>
              
              <div className="space-y-8">
                <div className="bg-background border-4 border-foreground p-8 hard-shadow-large">
                  <h3 className="text-xl font-black mb-6 uppercase tracking-wider border-b-2 border-foreground pb-2 text-foreground">Technical Result</h3>
                  <p className="text-foreground font-bold uppercase text-xs leading-tight mb-8">
                    {project.description}
                  </p>
                  <div className="space-y-4">
                    <a href={project.liveUrl} className="flex items-center justify-between w-full border-2 border-foreground p-4 hover:bg-foreground hover:text-background transition-all font-black uppercase text-sm tracking-tighter bg-background text-foreground">
                      <span>Live Session</span>
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            
            <div className="lg:col-span-2 space-y-20">
              {/* Overview */}
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="space-y-8"
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-black opacity-20 tracking-tighter text-foreground">01</span>
                  <h2 className="text-4xl font-black uppercase tracking-tighter text-foreground">Project Architecture</h2>
                </div>
                <div className="text-lg text-foreground font-bold uppercase leading-tight space-y-6">
                  <p className="border-l-4 border-foreground pl-6">{project.fullDescription}</p>
                </div>
              </motion.div>

              {/* The Problem & Solution */}
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-secondary border-2 border-foreground p-10 hard-shadow"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 border-2 border-foreground flex items-center justify-center bg-foreground text-background">
                      <AlertTriangle size={24} />
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter text-foreground">The Conflict</h3>
                  </div>
                  <p className="text-foreground font-bold uppercase text-xs leading-tight">
                    {project.problem}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-foreground text-background border-2 border-foreground p-10 hard-shadow-sm"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 border-2 border-background flex items-center justify-center bg-background text-foreground">
                      <Zap size={24} />
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter">The Resolution</h3>
                  </div>
                  <p className="font-bold uppercase text-xs leading-tight opacity-70">
                    {project.solution}
                  </p>
                </motion.div>
              </div>

              {/* Challenges & Learnings */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-16"
              >
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-black opacity-20 tracking-tighter text-foreground">02</span>
                    <h2 className="text-4xl font-black uppercase tracking-tighter text-foreground">Technical Hurdles</h2>
                  </div>
                  <p className="text-lg text-foreground font-bold uppercase leading-tight p-8 border-2 border-foreground border-dashed">
                    {project.challenges}
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-black opacity-20 tracking-tighter text-foreground">03</span>
                    <h2 className="text-4xl font-black uppercase tracking-tighter text-foreground">Post-Mortem Analysis</h2>
                  </div>
                  <p className="text-lg text-background font-bold uppercase leading-tight p-8 bg-foreground">
                    {project.learnings}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Sidebar Features */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-background border-4 border-foreground p-10 sticky top-32 hard-shadow-large"
              >
                <h3 className="text-2xl font-black mb-10 flex items-center gap-3 uppercase tracking-tighter border-b-2 border-foreground pb-4 text-foreground">
                  <Code2 className="w-8 h-8" /> Core Protocol
                </h3>
                <ul className="space-y-8">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4 group">
                      <div className="mt-1">
                        <div className="w-3 h-3 bg-foreground" />
                      </div>
                      <span className="text-foreground font-black uppercase text-xs tracking-tight">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

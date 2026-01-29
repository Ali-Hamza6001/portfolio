"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: "error",
        message: "Please fill in all fields"
      });
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon."
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again."
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 text-center uppercase tracking-tighter text-foreground">
            Initiate{" "}
            <span className="bg-foreground text-background px-2">
              Contact
            </span>
          </h2>
          <p className="text-center text-foreground font-medium max-w-2xl mx-auto mb-14 sm:mb-20 uppercase tracking-tight text-sm sm:text-base">
            Let&apos;s discuss the technical blueprint of your vision
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-10"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-6 underline decoration-4 underline-offset-8 text-foreground">
                Blueprint Discussion
              </h3>
              <p className="text-foreground font-bold text-sm uppercase leading-tight mb-8">
                I prioritize high-performance and precision. Reach out to
                discuss how my technical stack can solve your organizational
                challenges.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex gap-4 sm:gap-6 border-2 border-foreground p-5 sm:p-6 bg-background hover:hard-shadow transition-all group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 border-2 border-foreground bg-background flex items-center justify-center flex-shrink-0 group-hover:bg-foreground group-hover:text-background transition-colors text-foreground">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <p className="font-black uppercase text-xs tracking-widest mb-1 text-foreground">
                    Channel: Email
                  </p>
                  <a
                    href="mailto:alihamza0426170@gmail.com"
                    className="block break-all text-base sm:text-lg font-black uppercase tracking-tighter hover:bg-foreground hover:text-background transition-all underline decoration-2 underline-offset-4 text-foreground px-1"
                  >
                    alihamza0426170@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4 sm:gap-6 border-2 border-foreground p-5 sm:p-6 bg-background hover:hard-shadow transition-all group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 border-2 border-foreground bg-background flex items-center justify-center flex-shrink-0 group-hover:bg-foreground group-hover:text-background transition-colors text-foreground">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="font-black uppercase text-xs tracking-widest mb-1 text-foreground">
                    Base: Location
                  </p>
                  <p className="text-base sm:text-lg font-black uppercase tracking-tighter text-foreground">
                    Kasur, Punjab, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="border-2 border-foreground p-5 sm:p-8 md:p-10 space-y-8 bg-secondary hard-shadow"
            >
              <div>
                <label className="block text-xs font-black uppercase tracking-widest mb-3 text-foreground">
                  Identification
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  className="w-full px-6 py-4 border-2 border-foreground bg-background focus:bg-secondary focus:outline-none transition-colors font-bold uppercase placeholder:text-foreground/30 text-foreground"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-widest mb-3 text-foreground">
                  Return Path
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="contact@yourdomain.com"
                  className="w-full px-6 py-4 border-2 border-foreground bg-background focus:bg-secondary focus:outline-none transition-colors font-bold uppercase placeholder:text-foreground/30 text-foreground"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-widest mb-3 text-foreground">
                  Subject Matter
                </label>
                <textarea
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full px-6 py-4 border-2 border-foreground bg-background focus:bg-secondary focus:outline-none transition-colors resize-none font-bold uppercase placeholder:text-foreground/30 text-foreground"
                />
              </div>

              {status.message && (
                <div
                  className={`flex items-center gap-4 p-6 border-2 font-black uppercase text-xs tracking-tight ${
                    status.type === "success"
                      ? "bg-foreground text-background border-foreground"
                      : "bg-background text-foreground border-foreground border-dashed"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    <AlertCircle className="w-6 h-6" />
                  )}
                  <p>{status.message}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-foreground text-background px-10 py-6 font-black uppercase tracking-tighter hover:bg-background hover:text-foreground border-2 border-foreground transition-all hard-shadow-sm active:translate-x-1 active:translate-y-1 active:shadow-none flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-6 h-6 border-4 border-foreground/30 border-t-foreground rounded-full animate-spin" />
                    Transmitting...
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6" />
                    Submit Blueprint
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

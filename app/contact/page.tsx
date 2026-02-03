"use client";

import React from "react"

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Calendar,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@scaleflow.io",
    description: "We respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+1 (555) 123-4567",
    description: "Mon-Fri 9am - 6pm EST",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "San Francisco, CA",
    description: "123 Marketing St, Suite 100",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon - Fri: 9am - 6pm",
    description: "Weekend support for clients",
  },
];

const faqs = [
  {
    question: "How quickly can you set up my marketing automation?",
    answer: "Most implementations take 2-4 weeks depending on complexity.",
  },
  {
    question: "Do I need technical skills to use ScaleFlow?",
    answer: "Not at all! Our platform is designed for ease of use with full training provided.",
  },
  {
    question: "Can I upgrade from the course to agency services later?",
    answer: "Absolutely! We offer a seamless upgrade path and apply a credit toward your first month.",
  },
  {
    question: "What industries do you work with?",
    answer: "We serve coaches, consultants, e-commerce, real estate, healthcare, and professional services.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm text-muted-foreground mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Contact Us
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-[1.1] mb-6">
              Let's start your
              <br />
              <span className="text-muted-foreground">growth journey</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Have questions or ready to get started? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3 mb-16">
            {[
              "/images/team-collaboration.jpg",
              "/images/service-automation.jpg",
              "/images/service-funnels.jpg",
            ].map((src, index) => (
              <div
                key={src}
                className={`relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm ${
                  index === 1 ? "md:-mt-6" : ""
                }`}
              >
                <div className="relative h-48 w-full">
                  <Image src={src} alt="ScaleFlow contact visuals" fill className="object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
              </div>
            ))}
          </div>

          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="font-medium text-foreground mb-1">{info.title}</h3>
                <p className="text-foreground mb-1">{info.value}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & FAQ */}
      <section className="py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl font-medium text-foreground mb-6">
                Send us a message
              </h2>

              {isSubmitted ? (
                <div className="bg-card border border-border rounded-3xl p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-medium text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", company: "", message: "" });
                    }}
                    className="bg-transparent"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card border border-border rounded-3xl p-8 space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Company Name</label>
                    <Input
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Inc."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Your Message</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full rounded-full" disabled={isLoading}>
                    {isLoading ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* FAQ & Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                <div className="relative h-56 w-full">
                  <Image src="/images/hero-automation.jpg" alt="Automation workspace" fill className="object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              {/* Quick Actions */}
              <div>
                <h3 className="font-medium text-foreground mb-4">Quick Actions</h3>
                <div className="space-y-4">
                  <div className="bg-card border border-border rounded-2xl p-5 hover:border-accent/50 transition-all cursor-pointer group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                        <Calendar className="h-6 w-6 text-foreground group-hover:text-accent transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Schedule a Strategy Call</h4>
                        <p className="text-sm text-muted-foreground">Free 30-minute consultation</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-2xl p-5 hover:border-accent/50 transition-all cursor-pointer group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                        <MessageSquare className="h-6 w-6 text-foreground group-hover:text-accent transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Live Chat Support</h4>
                        <p className="text-sm text-muted-foreground">Chat during business hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h3 className="font-medium text-foreground mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <div key={faq.question} className="bg-card border border-border rounded-2xl p-5">
                      <div className="flex items-start gap-3 mb-2">
                        <HelpCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <h4 className="font-medium text-foreground">{faq.question}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground pl-8">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

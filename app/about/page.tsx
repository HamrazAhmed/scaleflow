"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Target,
  Heart,
  Lightbulb,
  Users,
  CheckCircle2,
  Linkedin,
  Twitter,
  ArrowRight,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every strategy and automation is designed with measurable outcomes in mind.",
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Your success is our success. We're partners in your growth journey.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We stay ahead of trends to give you cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Community Focused",
    description: "Building a thriving community of marketers who learn and grow together.",
  },
];

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "2.5x", label: "Avg. ROI Increase" },
  { value: "$50M+", label: "Revenue Generated" },
];

const team = [
  {
    name: "Alex Rivera",
    role: "Founder & CEO",
    bio: "Former Fortune 500 marketing director with 15+ years of experience.",
    linkedin: "#",
    twitter: "#",
    image: "/images/team-collaboration.jpg",
  },
  {
    name: "Jordan Chen",
    role: "Head of Automation",
    bio: "Automation expert who has built systems for 200+ businesses.",
    linkedin: "#",
    twitter: "#",
    image: "/images/service-automation.jpg",
  },
  {
    name: "Sam Williams",
    role: "Lead Strategist",
    bio: "Data-driven strategist specializing in funnel optimization.",
    linkedin: "#",
    twitter: "#",
    image: "/images/service-funnels.jpg",
  },
  {
    name: "Taylor Martinez",
    role: "Customer Success",
    bio: "Dedicated to ensuring every client achieves their goals.",
    linkedin: "#",
    twitter: "#",
    image: "/images/service-crm.jpg",
  },
];

const milestones = [
  { year: "2019", title: "Founded", description: "ScaleFlow Digital was born from a passion for automation." },
  { year: "2020", title: "100 Clients", description: "Reached our first major milestone." },
  { year: "2021", title: "Course Launch", description: "Launched our Marketing Mastery Course." },
  { year: "2022", title: "500+ Clients", description: "Expanded our team and services." },
  { year: "2023", title: "Platform Launch", description: "Launched our proprietary ScaleFlow Platform." },
  { year: "2024", title: "Global Expansion", description: "Now serving clients in 30+ countries." },
];

export default function AboutPage() {
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
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm text-muted-foreground mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              About Us
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-[1.1] mb-6">
              Empowering businesses
              <br />
              <span className="text-muted-foreground">to scale without limits</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              We're a team of marketing automation experts, strategists, and educators 
              passionate about helping businesses leverage technology to grow faster.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3 mb-16">
            {[
              "/images/team-collaboration.jpg",
              "/images/service-automation.jpg",
              "/images/service-crm.jpg",
            ].map((src, index) => (
              <div
                key={src}
                className={`relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm ${
                  index === 1 ? "md:-mt-6" : ""
                }`}
              >
                <div className="relative h-52 w-full">
                  <Image src={src} alt="ScaleFlow team" fill className="object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
              </div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card border border-border rounded-2xl p-6 text-center">
                <p className="font-serif text-3xl font-medium text-foreground mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl font-medium text-foreground mb-4">
              Our Mission & Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We believe every business deserves access to enterprise-level marketing automation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="font-medium text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl font-medium text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-muted-foreground">From startup to industry leader</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-12"
                  >
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-secondary border-2 border-background flex items-center justify-center">
                      <span className="text-xs font-medium text-foreground">{milestone.year.slice(2)}</span>
                    </div>
                    <div className="bg-card border border-border rounded-xl p-5">
                      <h3 className="font-medium text-foreground mb-1">{milestone.title}</h3>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl font-medium text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A passionate team dedicated to your success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 text-center"
              >
                <div className="relative w-20 h-20 rounded-full overflow-hidden border border-border mx-auto mb-4">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="font-medium text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-accent mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{member.bio}</p>
                <div className="flex justify-center gap-3">
                  <a href={member.linkedin} className="text-muted-foreground hover:text-foreground transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={member.twitter} className="text-muted-foreground hover:text-foreground transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl font-medium text-foreground mb-6">
                Why choose ScaleFlow?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Unlike other agencies, we become your long-term marketing partner. 
                Our hybrid approach of education plus implementation ensures you're never left in the dark.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Proprietary ScaleFlow Platform access",
                  "Dedicated success manager for every client",
                  "Continuous optimization and support",
                  "Transparent reporting and communication",
                  "Community of 500+ entrepreneurs",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-8">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card border border-border rounded-3xl p-8"
            >
              <div className="relative overflow-hidden rounded-2xl border border-border bg-muted/40 mb-6">
                <div className="relative h-48 w-full">
                  <Image src="/images/hero-automation.jpg" alt="ScaleFlow expertise" fill className="object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              <h3 className="font-medium text-foreground mb-6">Our Expertise</h3>
              <div className="space-y-6">
                {[
                  { skill: "Marketing Automation", progress: 98 },
                  { skill: "Funnel Development", progress: 95 },
                  { skill: "CRM Implementation", progress: 92 },
                  { skill: "Email Marketing", progress: 96 },
                  { skill: "Lead Generation", progress: 94 },
                ].map((item) => (
                  <div key={item.skill}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{item.skill}</span>
                      <span className="text-sm text-accent">{item.progress}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-accent rounded-full transition-all duration-1000"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

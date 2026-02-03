"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Target,
  TrendingUp,
  Zap,
  Users,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Play,
  Clock,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import Image from "next/image";

const modules = [
  {
    icon: Target,
    title: "Module 1: Foundation",
    description: "Master the fundamentals of modern digital marketing and customer psychology.",
    lessons: 8,
    duration: "2.5 hours",
  },
  {
    icon: TrendingUp,
    title: "Module 2: Funnel Mastery",
    description: "Build high-converting sales funnels that turn cold traffic into paying customers.",
    lessons: 12,
    duration: "4 hours",
  },
  {
    icon: Zap,
    title: "Module 3: Automation",
    description: "Set up automated nurture sequences that work 24/7 to close deals.",
    lessons: 10,
    duration: "3.5 hours",
  },
  {
    icon: Users,
    title: "Module 4: Traffic & Ads",
    description: "Learn paid advertising strategies for Facebook, Google, and beyond.",
    lessons: 14,
    duration: "5 hours",
  },
  {
    icon: BarChart3,
    title: "Module 5: Analytics",
    description: "Track, measure, and optimize every part of your marketing machine.",
    lessons: 6,
    duration: "2 hours",
  },
  {
    icon: BookOpen,
    title: "Module 6: Scaling",
    description: "Advanced strategies to scale your business to 7-figures and beyond.",
    lessons: 8,
    duration: "3 hours",
  },
];

const benefits = [
  "Lifetime access to all course materials",
  "Private community of 500+ marketers",
  "Weekly live Q&A sessions",
  "Done-for-you templates & swipe files",
  "Certificate of completion",
  "30-day money-back guarantee",
];

const testimonials = [
  {
    quote: "This course completely transformed how I approach marketing. The ROI has been incredible.",
    author: "Sarah Chen",
    role: "Founder, TechStart",
  },
  {
    quote: "The automation strategies alone saved me 20+ hours per week. Worth every penny.",
    author: "Marcus Johnson",
    role: "Marketing Director",
  },
  {
    quote: "Finally, a course that delivers real, actionable strategies instead of fluff.",
    author: "Emily Rodriguez",
    role: "E-commerce Owner",
  },
];

export default function CoursePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm text-muted-foreground mb-6">
                <Award className="h-4 w-4" />
                Marketing Mastery Course
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-[1.1] mb-6">
                Learn to scale
                <br />
                <span className="text-muted-foreground">the right way</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
                Our comprehensive course teaches you everything you need to know about modern marketing,
                from foundational principles to advanced automation strategies.
              </p>
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <BookOpen className="h-4 w-4" />
                  58 lessons
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  20+ hours
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  500+ students
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/pricing">
                  <Button size="lg" className="rounded-full px-8">
                    Enroll Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="rounded-full px-8 bg-transparent">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Preview
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-video overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
                <Image
                  src="/images/service-funnels.jpg"
                  alt="Course preview"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
                <Button
                  variant="ghost"
                  size="lg"
                  className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background/70 backdrop-blur-md"
                >
                  <Play className="h-6 w-6" />
                </Button>
              </div>
              <div className="absolute -bottom-10 -left-10 hidden md:block">
                <div className="relative h-32 w-40 overflow-hidden rounded-2xl border border-border bg-card shadow-md">
                  <Image src="/images/service-automation.jpg" alt="Course module" fill className="object-cover" />
                </div>
              </div>
              <div className="absolute -top-10 -right-6 hidden md:block">
                <div className="relative h-24 w-32 overflow-hidden rounded-2xl border border-border bg-card shadow-md">
                  <Image src="/images/service-crm.jpg" alt="Course insights" fill className="object-cover" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Curriculum */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-24"
          >
            <h2 className="font-serif text-3xl font-medium text-foreground text-center mb-12">
              Course Curriculum
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((module, index) => (
                <motion.div
                  key={module.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-accent/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                      <module.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground mb-2">{module.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{module.description}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>{module.lessons} lessons</span>
                        <span>{module.duration}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits & Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card border border-border rounded-3xl p-8 lg:p-12 mb-24"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground mb-6">
                  Everything you need to succeed
                </h2>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center lg:text-left">
                <div className="mb-6">
                  <span className="text-muted-foreground line-through text-lg">$1,997</span>
                  <div className="text-4xl font-serif font-medium text-foreground">
                    $997 <span className="text-lg font-sans font-normal text-muted-foreground">one-time</span>
                  </div>
                </div>
                <Link href="/pricing">
                  <Button size="lg" className="rounded-full px-8 w-full lg:w-auto">
                    Enroll Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <p className="text-sm text-muted-foreground mt-4">
                  30-day money-back guarantee. No questions asked.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="font-serif text-3xl font-medium text-foreground text-center mb-12">
              What our students say
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.author}
                  className="bg-card border border-border rounded-2xl p-6"
                >
                  <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

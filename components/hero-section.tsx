"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2, TrendingUp, Users, Zap, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function HeroSection() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-automation.jpg"
          alt="Marketing automation workspace"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 opacity-30" />
      </div>

      {/* Animated floating elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
        />
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full bg-accent/10 backdrop-blur-sm border border-accent/30 px-4 py-1.5 text-sm text-accent font-medium mb-8 hover:bg-accent/20 transition-colors"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Now accepting new clients
            </motion.div>

            {/* Heading */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-foreground leading-[0.95] mb-6">
              Scale your business
              <br />
              <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">with automation</span>
            </h1>

            {/* Description */}
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl text-pretty font-medium">
              Transform your business with our comprehensive marketing automation platform. 
              Custom solutions that work 24/7 while you focus on growth.
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap gap-4 mb-10">
              {["CRM & Pipeline", "Email Automation", "Sales Funnels"].map((benefit, idx) => (
                <motion.span
                  key={benefit}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground bg-card/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border hover:border-accent/50 transition-all"
                >
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  {benefit}
                </motion.span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="rounded-full px-10 h-14 text-base font-semibold shadow-lg hover:shadow-2xl transition-all bg-accent hover:bg-accent/90">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </Link>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
              <Button 
                variant="outline" 
                size="lg" 
                className="h-14 text-base rounded-full px-8 bg-card/50 backdrop-blur-sm border-border hover:border-accent/50 font-semibold"
                onClick={() => setVideoPlaying(true)}
              >
                <Play className="mr-2 h-5 w-5 fill-current" />
                Watch Demo
              </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "300%", label: "increase in conversions", color: "bg-accent/15", icon: TrendingUp },
                { value: "98%", label: "client satisfaction", color: "bg-blue-500/10", icon: Users },
                { value: "24/7", label: "automated systems", color: "bg-purple-500/10", icon: Zap },
                { value: "50+", label: "integrations", color: "bg-green-500/10", icon: Lightbulb },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className={`${stat.color} backdrop-blur-md border border-border rounded-2xl p-6 hover:border-accent/50 transition-all duration-300 cursor-pointer relative overflow-hidden group`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                    <stat.icon className="h-8 w-8 text-foreground" />
                  </div>
                  <div className="relative z-10">
                    <p className="font-serif text-4xl font-medium text-foreground mb-1">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating accent elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-8 -right-8 w-32 h-32 bg-accent/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -bottom-8 -left-8 w-24 h-24 bg-accent/10 rounded-full blur-2xl"
            />
          </motion.div>
        </div>

        {/* Trusted By */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-24 pt-12 border-t border-border/50 backdrop-blur-sm"
        >
          <p className="text-sm font-medium text-muted-foreground text-center mb-8">Trusted by 500+ innovative companies worldwide</p>
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-6">
            {["Acme Inc", "Quantum", "Pulse", "Nova", "Apex"].map((company) => (
              <motion.span
                key={company}
                whileHover={{ scale: 1.1 }}
                className="text-lg font-medium text-foreground/40 hover:text-foreground/70 transition-colors cursor-pointer"
              >
                {company}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {videoPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setVideoPlaying(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-5xl aspect-video bg-card rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Play className="h-16 w-16 text-accent mx-auto mb-4" />
                <p className="text-muted-foreground">Demo video placeholder</p>
                <p className="text-sm text-muted-foreground/60 mt-2">Add your video URL here</p>
              </div>
            </div>
            <button
              onClick={() => setVideoPlaying(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

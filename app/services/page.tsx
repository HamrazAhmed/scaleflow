"use client";

import { motion, useInView } from "framer-motion";
import {
  Users,
  Mail,
  Rocket,
  MessageSquare,
  Star,
  Calendar,
  Share2,
  GraduationCap,
  ArrowRight,
  Check,
  Play,
  Zap,
  Shield,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";

const services = [
  {
    icon: Users,
    title: "All-in-One CRM",
    description:
      "Manage all your leads, contacts, and pipelines in one powerful dashboard. Never lose track of an opportunity again.",
    features: ["Lead scoring & tracking", "Pipeline management", "Contact segmentation", "Deal forecasting"],
    image: "/images/service-crm.jpg",
  },
  {
    icon: Mail,
    title: "Automated Nurture",
    description:
      "Set up intelligent SMS, Email, and Voicemail automations that engage leads at the perfect moment.",
    features: ["Multi-channel sequences", "Trigger-based workflows", "A/B testing", "Personalization"],
    image: "/images/service-automation.jpg",
  },
  {
    icon: Rocket,
    title: "Sales Funnels & Websites",
    description:
      "High-converting landing pages and sales funnels built to turn visitors into customers.",
    features: ["Drag-and-drop builder", "Mobile optimized", "Conversion tracking", "Templates library"],
    image: "/images/service-funnels.jpg",
  },
  {
    icon: MessageSquare,
    title: "Unified Inbox",
    description:
      "Centralize all conversations from Messenger, DM, SMS, and Email in one place.",
    features: ["All channels in one view", "Quick responses", "Team collaboration", "Auto-routing"],
    image: "/images/team-collaboration.jpg",
  },
  {
    icon: Star,
    title: "Reputation Management",
    description:
      "Automatically request reviews and monitor your online reputation across all platforms.",
    features: ["Review requests", "Monitoring alerts", "Response templates", "Review widgets"],
    image: "/images/service-crm.jpg",
  },
  {
    icon: Calendar,
    title: "Appointment Booking",
    description:
      "Seamless calendar integration with automated reminders to eliminate no-shows.",
    features: ["Calendar sync", "Automated reminders", "Buffer times", "Group bookings"],
    image: "/images/service-automation.jpg",
  },
  {
    icon: Share2,
    title: "Social Media Planner",
    description:
      "Schedule and publish content across all your social platforms from one dashboard.",
    features: ["Multi-platform posting", "Content calendar", "Analytics", "Team workflows"],
    image: "/images/service-funnels.jpg",
  },
  {
    icon: GraduationCap,
    title: "Courses & Memberships",
    description:
      "Host your own courses, communities, and membership sites all within the platform.",
    features: ["Course hosting", "Community features", "Drip content", "Certifications"],
    image: "/images/team-collaboration.jpg",
  },
];

const stats = [
  { value: "10K+", label: "Active Users" },
  { value: "500M+", label: "Emails Sent" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" },
];

export default function ServicesPage() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const [activeService, setActiveService] = useState(0);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Video Background */}
      <section ref={heroRef} className="relative pt-24 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/team-collaboration.jpg"
            alt="Team collaboration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-card/80 backdrop-blur-sm border border-border px-4 py-1.5 text-sm text-muted-foreground mb-6">
              <Zap className="h-4 w-4 text-accent" />
              Powerful Automation Suite
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight text-foreground leading-[1.05] mb-6">
              Everything you need to
              <br />
              <span className="text-muted-foreground">scale your business</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto mb-10">
              Our all-in-one ScaleFlow Platform delivers enterprise-grade marketing automation 
              that works around the clock, so you can focus on what you do best.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="text-center"
                >
                  <p className="font-serif text-3xl lg:text-4xl font-medium text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visual Collage */}
      <section className="-mt-10 pb-10 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "/images/service-automation.jpg",
              "/images/service-crm.jpg",
              "/images/service-funnels.jpg",
            ].map((src, index) => (
              <div
                key={src}
                className={`relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm ${
                  index === 1 ? "md:-mt-6" : ""
                }`}
              >
                <div className="relative h-48 w-full">
                  <Image src={src} alt="ScaleFlow service" fill className="object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Services Showcase */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Service List */}
            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setActiveService(index)}
                  className={`cursor-pointer group p-6 rounded-2xl border transition-all duration-300 ${
                    activeService === index
                      ? "bg-card border-accent/50 shadow-lg"
                      : "bg-transparent border-border hover:border-accent/30 hover:bg-card/50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      activeService === index ? "bg-accent text-accent-foreground" : "bg-secondary text-foreground"
                    }`}>
                      <service.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-1">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                      {activeService === index && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="mt-4 space-y-2"
                        >
                          {service.features.map((feature) => (
                            <li key={feature} className="text-sm text-foreground flex items-center gap-2">
                              <Check className="h-4 w-4 text-accent shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right - Service Preview */}
            <div className="lg:sticky lg:top-32">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={services[activeService].image || "/placeholder.svg"}
                  alt={services[activeService].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-serif text-2xl text-white mb-2">
                    {services[activeService].title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {services[activeService].description}
                  </p>
                </div>
                
                {/* Play Button Overlay */}
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors group">
                  <Play className="h-8 w-8 text-white fill-white group-hover:scale-110 transition-transform" />
                </button>
              </motion.div>

              {/* Feature Highlights */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { icon: Shield, label: "Secure" },
                  { icon: Zap, label: "Fast" },
                  { icon: TrendingUp, label: "Scalable" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-card border border-border rounded-xl p-4 text-center"
                  >
                    <item.icon className="h-6 w-6 text-accent mx-auto mb-2" />
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-24 px-6 lg:px-8 bg-secondary/30">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-6">
              See ScaleFlow in action
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch how businesses like yours are using our platform to automate their marketing and scale faster.
            </p>
          </motion.div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "CRM Overview", duration: "4:32", image: "/images/service-crm.jpg" },
              { title: "Automation Workflows", duration: "6:18", image: "/images/service-automation.jpg" },
              { title: "Funnel Builder", duration: "5:45", image: "/images/service-funnels.jpg" },
            ].map((video, i) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={video.image || "/placeholder.svg"}
                  alt={video.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Play className="h-6 w-6 text-white fill-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-medium">{video.title}</p>
                  <p className="text-white/60 text-sm">{video.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/hero-automation.jpg"
                alt="Get started"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 to-foreground/80" />
            </div>

            <div className="relative z-10 p-12 lg:p-20 text-center">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-background mb-6">
                Ready to automate your marketing?
              </h2>
              <p className="text-background/80 text-lg mb-10 max-w-2xl mx-auto">
                Schedule a free strategy call and discover how our done-for-you services can transform your business.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="rounded-full px-8 h-14 text-base">
                    Book a Strategy Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-base bg-transparent border-background/30 text-background hover:bg-background/10">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

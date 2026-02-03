"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import Image from "next/image";

const pricingPlans = [
  {
    name: "Course Only",
    description: "Perfect for DIY marketers who want to learn and implement themselves.",
    price: "$997",
    billing: "one-time",
    features: [
      "Full Marketing Mastery Course",
      "58+ video lessons",
      "Private community access",
      "Done-for-you templates",
      "Weekly live Q&A sessions",
      "Lifetime updates",
      "Certificate of completion",
    ],
    cta: "Start Learning",
    href: "/course",
    popular: false,
  },
  {
    name: "Agency Services",
    description: "Let our team build and manage your entire marketing automation system.",
    price: "$2,497",
    billing: "/month",
    features: [
      "Full ScaleFlow platform setup",
      "Custom CRM configuration",
      "Sales funnel creation",
      "Email & SMS automation",
      "Reputation management",
      "Social media scheduling",
      "Monthly strategy calls",
      "Priority support",
    ],
    cta: "Book a Call",
    href: "/contact",
    popular: true,
  },
  {
    name: "Hybrid Bundle",
    description: "The best of both worlds: Learn the strategy AND get it implemented.",
    price: "$3,297",
    billing: "/month",
    features: [
      "Everything in Course Only",
      "Everything in Agency Services",
      "1-on-1 coaching sessions",
      "Custom ScaleFlow sub-account",
      "White-glove onboarding",
      "Advanced automation builds",
      "Revenue share opportunities",
      "VIP community access",
    ],
    cta: "Get Started",
    href: "/contact",
    popular: false,
  },
];

const faqs = [
  {
    question: "What happens after I sign up?",
    answer: "You'll receive immediate access to your course materials or we'll schedule an onboarding call for agency services within 24 hours.",
  },
  {
    question: "Is there a contract for agency services?",
    answer: "We offer month-to-month services with no long-term commitment. You can cancel anytime with 30 days notice.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes! We offer a 30-day money-back guarantee for the course and a satisfaction guarantee for agency services.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Absolutely. You can upgrade from Course Only to Agency Services or Hybrid Bundle at any time. We'll credit your course purchase.",
  },
];

export default function PricingPage() {
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
              Simple Pricing
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-[1.1] mb-6">
              Choose your path to
              <br />
              <span className="text-muted-foreground">marketing success</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Whether you want to learn it yourself or have us do it for you, 
              we have a plan that fits your needs and budget.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm mb-16"
          >
            <div className="relative h-64 w-full">
              <Image src="/images/hero-automation.jpg" alt="Pricing preview" fill className="object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
            <div className="absolute inset-y-0 left-0 flex items-center p-8">
              <div className="max-w-sm">
                <p className="text-sm text-muted-foreground">Premium growth plans</p>
                <h3 className="mt-2 font-serif text-2xl text-foreground">Launch with confidence and clarity.</h3>
                <p className="mt-2 text-sm text-muted-foreground">Every plan includes strategic onboarding and performance reporting.</p>
              </div>
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-card border rounded-3xl p-8 flex flex-col ${
                  plan.popular
                    ? "border-accent shadow-xl scale-105 z-10"
                    : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-medium text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <span className="font-serif text-4xl font-medium text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.billing}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={plan.href}>
                  <Button
                    size="lg"
                    className={`w-full rounded-full ${
                      plan.popular
                        ? "bg-accent text-accent-foreground hover:bg-accent/90"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-24"
          >
            <div className="flex flex-wrap items-center justify-center gap-8">
              {["Secure Payments", "30-Day Guarantee", "Cancel Anytime", "24/7 Support"].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-accent" />
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="font-serif text-3xl font-medium text-foreground text-center mb-12">
              Frequently asked questions
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="bg-card border border-border rounded-2xl p-6"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <HelpCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <h3 className="font-medium text-foreground">{faq.question}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-8">{faq.answer}</p>
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

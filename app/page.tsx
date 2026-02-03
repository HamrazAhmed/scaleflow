import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  BarChart3,
  MessagesSquare,
  Workflow,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      {/* Social Proof Strip */}
      <section className="relative z-10 -mt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 rounded-3xl border border-border bg-card/80 backdrop-blur-sm p-8 lg:grid-cols-3">
            {[
              {
                value: "$2.4M+",
                label: "Revenue influenced",
                description: "Automation-driven pipeline impact",
              },
              {
                value: "42 days",
                label: "Average payback period",
                description: "Fast ROI from optimized funnels",
              },
              {
                value: "4.9/5",
                label: "Client satisfaction",
                description: "Based on 120+ engagements",
              },
            ].map((item) => (
              <div key={item.label} className="space-y-2">
                <p className="font-serif text-3xl font-semibold text-foreground">{item.value}</p>
                <p className="text-sm font-medium text-foreground">{item.label}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-medium text-accent mb-4">
                <Sparkles className="h-4 w-4" />
                Revenue-focused automation
              </p>
              <h2 className="font-serif text-3xl lg:text-5xl leading-tight text-foreground">
                A landing experience designed to turn curious clicks into qualified leads.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                We combine strategy, design, and conversion science to create marketing systems that feel premium, build trust fast, and guide visitors to action.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="rounded-full px-8">
                    Book a Strategy Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg" className="rounded-full px-7">
                    View Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid gap-6">
              {[
                {
                  title: "Premium positioning",
                  description: "Instant credibility with refined visuals, proof points, and irresistible offers.",
                },
                {
                  title: "Conversion-driven flows",
                  description: "Guided journeys that keep attention and reduce drop-offs across devices.",
                },
                {
                  title: "Always-on nurture",
                  description: "Automations that follow up, qualify, and convert while you sleep.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <h3 className="text-lg font-medium text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-muted/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-accent mb-3">What we deliver</p>
            <h2 className="font-serif text-3xl lg:text-5xl text-foreground">Everything you need for a high-performing launch.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A full-stack approach that blends brand, automation, and sales enablement.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Conversion landing pages",
                description: "Strategic layouts, copy, and design systems optimized for paid traffic.",
                icon: Zap,
              },
              {
                title: "Lifecycle automation",
                description: "Email + CRM workflows that respond instantly and intelligently.",
                icon: Workflow,
              },
              {
                title: "Paid ads intelligence",
                description: "Dashboards that connect ad spend to revenue in real time.",
                icon: BarChart3,
              },
              {
                title: "Trust & credibility systems",
                description: "Testimonials, proof stacks, and authority-building content.",
                icon: Shield,
              },
              {
                title: "High-touch messaging",
                description: "Chat, SMS, and concierge follow-up to reduce lead decay.",
                icon: MessagesSquare,
              },
              {
                title: "Growth playbooks",
                description: "Clear, repeatable playbooks for scaling beyond the first launch.",
                icon: Sparkles,
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-lg transition-shadow">
                <item.icon className="h-6 w-6 text-accent" />
                <h3 className="mt-4 text-lg font-medium text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Showcase */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] items-center">
            <div>
              <p className="text-sm font-medium text-accent mb-3">Visual credibility</p>
              <h2 className="font-serif text-3xl lg:text-5xl text-foreground">
                A premium look that elevates every campaign touchpoint.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Purposeful imagery, clean spacing, and soft motion give your visitors confidence the moment they arrive.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Brand-aligned visuals",
                  "Mobile-first layouts",
                  "High-impact hero sections",
                ].map((item) => (
                  <span key={item} className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {["/images/team-collaboration.jpg", "/images/service-automation.jpg", "/images/service-crm.jpg", "/images/service-funnels.jpg"].map(
                (src, index) => (
                  <div
                    key={src}
                    className={`relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm ${
                      index === 1 ? "md:translate-y-6" : ""
                    }`}
                  >
                    <div className="relative h-56 w-full">
                      <Image
                        src={src}
                        alt="ScaleFlow visual showcase"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] items-center">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <Image
                  src="/images/hero-automation.jpg"
                  alt="Automation workspace"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative">
              <h3 className="font-serif text-2xl text-foreground">A launch process your team will love.</h3>
              <p className="mt-4 text-muted-foreground">
                Clear milestones, rapid iteration, and measurable outcomes from week one.
              </p>
              <div className="mt-6 space-y-5">
                {[
                  { step: "01", title: "Discovery & positioning", text: "We map the offer, market, and funnel architecture." },
                  { step: "02", title: "Design & build", text: "High-converting pages with premium visuals and messaging." },
                  { step: "03", title: "Automation & launch", text: "CRM, nurture, and reporting wired end-to-end." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="text-sm font-semibold text-accent">{item.step}</div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-accent mb-3">Built for performance</p>
              <h2 className="font-serif text-3xl lg:text-5xl text-foreground">Launch faster. Convert more. Scale confidently.</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                From ad creative to lead handoff, every detail is designed to protect your paid traffic and amplify results.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {["Custom analytics dashboards", "On-brand motion design", "Lead qualification logic", "Performance reporting"].map(
                  (item) => (
                    <div key={item} className="rounded-2xl border border-border bg-muted/40 p-4 text-sm text-foreground">
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary-foreground/70 mb-3">Client outcomes</p>
            <h2 className="font-serif text-3xl lg:text-5xl text-primary-foreground">
              Trusted by founders who demand premium experiences.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                quote:
                  "We doubled our qualified leads in 30 days and finally have a funnel that feels premium.",
                name: "Tanya Rhodes",
                role: "CEO, Radiant Health",
              },
              {
                quote:
                  "The automation is seamless. Our team now focuses on sales conversations, not admin.",
                name: "Michael Chen",
                role: "Founder, Zenith Media",
              },
              {
                quote:
                  "Every ad click now lands on a page that actually converts. Best investment this year.",
                name: "Sara Knight",
                role: "Growth Lead, Nova Labs",
              },
            ].map((item) => (
              <div key={item.name} className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6">
                <p className="text-sm text-primary-foreground/80">{item.quote}</p>
                <div className="mt-4 text-sm font-medium text-primary-foreground">{item.name}</div>
                <div className="text-xs text-primary-foreground/60">{item.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] items-center">
            <div>
              <p className="text-sm font-medium text-accent mb-3">Flexible packages</p>
              <h2 className="font-serif text-3xl lg:text-5xl text-foreground">Choose the engagement that matches your growth stage.</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Transparent pricing, clear deliverables, and measurable results.
              </p>
              <div className="mt-6">
                <Link href="/pricing">
                  <Button size="lg" className="rounded-full px-8">
                    View Pricing
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  name: "Launch",
                  price: "$2,900",
                  desc: "Ideal for new campaigns and MVPs.",
                  items: ["Landing page + copy", "Core automations", "Lead tracking"],
                },
                {
                  name: "Scale",
                  price: "$6,500",
                  desc: "Best for growth teams and ads.",
                  items: ["Multi-page funnel", "CRM + nurture", "Performance reporting"],
                },
              ].map((plan) => (
                <div key={plan.name} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="text-sm font-medium text-foreground">{plan.name}</div>
                  <div className="mt-2 font-serif text-3xl text-foreground">{plan.price}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{plan.desc}</div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {plan.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-muted/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-accent mb-3">FAQ</p>
            <h2 className="font-serif text-3xl lg:text-5xl text-foreground">Answers before your strategy call.</h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {[
              {
                q: "How fast can we launch?",
                a: "Most clients launch within 2-4 weeks depending on scope and approvals.",
              },
              {
                q: "Do you handle copywriting?",
                a: "Yes. We deliver high-converting copy, on-brand messaging, and offer positioning.",
              },
              {
                q: "What platforms do you integrate?",
                a: "HubSpot, GoHighLevel, Mailchimp, ActiveCampaign, and custom CRMs.",
              },
              {
                q: "Can you improve an existing funnel?",
                a: "Absolutely. We audit, redesign, and optimize without losing your current traffic.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-sm font-medium text-foreground">{item.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl border border-border bg-card p-10 lg:p-16 text-center shadow-sm">
            <p className="text-sm font-medium text-accent">Ready to scale?</p>
            <h2 className="mt-4 font-serif text-3xl lg:text-5xl text-foreground">
              Let&apos;s build a landing experience that converts every click.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Book a strategy call and receive a personalized conversion roadmap within 48 hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-10">
                  Get My Roadmap
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="rounded-full px-8">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

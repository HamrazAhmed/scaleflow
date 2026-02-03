import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "50% off your first month",
  "Conversion audit included",
  "Priority launch support",
  "Weekly optimization insights",
];

export default function SubscriptionPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-border bg-card p-10 lg:p-16 shadow-sm text-center">
            <p className="text-sm font-medium text-accent">Limited-time subscription</p>
            <h1 className="mt-4 font-serif text-3xl lg:text-5xl text-foreground">
              Claim your 50% discount and launch with confidence.
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Join the ScaleFlow growth program and receive a premium landing build, automation setup, and ongoing optimization.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 text-left">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 rounded-2xl border border-border bg-muted/40 px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span className="text-sm text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="rounded-full px-10">
                Start Subscription
              </Button>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="rounded-full px-8">
                  Talk to Sales
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

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Course", href: "/course" },
  { name: "Blog", href: "/blog" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/40 shadow-sm">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="h-9 w-9 rounded-full bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all"
            >
              <span className="text-accent-foreground font-serif font-bold text-sm">S</span>
            </motion.div>
            <span className="text-lg font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
              ScaleFlow
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-1 items-center">
            {navLinks.map((link) => (
              <motion.div key={link.name} whileHover={{ y: -2 }}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-accent px-3 py-2 rounded-lg transition-all duration-200 hover:bg-accent/5 flex items-center gap-1.5"
                >
                  {link.icon && <link.icon className="h-4 w-4" />}
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <Link href="/contact">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground rounded-full">
                Log in
              </Button>
            </Link>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact">
                <Button size="sm" className="rounded-full px-6 font-semibold bg-accent hover:bg-accent/90 shadow-lg">
                  Get Started
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background border-b border-border/40 backdrop-blur-xl"
          >
            <div className="px-6 py-6 space-y-3">
              {navLinks.map((link) => (
                <motion.div key={link.name} whileHover={{ x: 4 }}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 text-base font-medium text-muted-foreground hover:text-accent px-3 py-2.5 rounded-lg transition-all hover:bg-accent/5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.icon && <link.icon className="h-4 w-4" />}
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 flex flex-col gap-3 border-t border-border">
                <Link href="/contact" className="w-full">
                  <Button variant="outline" className="w-full bg-transparent rounded-full">
                    Log in
                  </Button>
                </Link>
                <Link href="/contact" className="w-full">
                  <Button className="w-full rounded-full font-semibold bg-accent hover:bg-accent/90">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Calendar,
  Clock,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const categories = [
  { name: "All", count: 24 },
  { name: "Marketing Automation", count: 8 },
  { name: "Sales Funnels", count: 6 },
  { name: "Email Marketing", count: 5 },
  { name: "CRM Tips", count: 3 },
  { name: "Case Studies", count: 2 },
];

const featuredPost = {
  slug: "complete-guide-marketing-automation-2024",
  title: "The Complete Guide to Marketing Automation in 2024",
  excerpt:
    "Discover how to leverage the latest automation tools and strategies to scale your business and increase conversions.",
  author: "Alex Rivera",
  date: "Jan 15, 2024",
  readTime: "12 min read",
  category: "Marketing Automation",
  image: "/images/hero-automation.jpg",
  authorImage: "/images/team-collaboration.jpg",
};

const blogPosts = [
  {
    slug: "5-email-sequences-every-business-needs",
    title: "5 Email Sequences Every Business Needs",
    excerpt: "Learn the essential email automation sequences that can transform your customer journey.",
    author: "Jordan Chen",
    date: "Jan 12, 2024",
    readTime: "8 min read",
    category: "Email Marketing",
    image: "/images/service-automation.jpg",
    authorImage: "/images/service-crm.jpg",
  },
  {
    slug: "building-high-converting-sales-funnels",
    title: "Building High-Converting Sales Funnels",
    excerpt: "Master the art of funnel creation with our comprehensive step-by-step guide.",
    author: "Sam Williams",
    date: "Jan 10, 2024",
    readTime: "10 min read",
    category: "Sales Funnels",
    image: "/images/service-funnels.jpg",
    authorImage: "/images/service-automation.jpg",
  },
  {
    slug: "crm-best-practices-small-business",
    title: "CRM Best Practices for Small Business",
    excerpt: "Maximize your CRM investment with these proven strategies.",
    author: "Taylor Martinez",
    date: "Jan 8, 2024",
    readTime: "6 min read",
    category: "CRM Tips",
    image: "/images/service-crm.jpg",
    authorImage: "/images/service-funnels.jpg",
  },
  {
    slug: "case-study-3x-revenue-90-days",
    title: "Case Study: 3x Revenue in 90 Days",
    excerpt: "A detailed breakdown of the automation strategies that transformed a coaching business.",
    author: "Alex Rivera",
    date: "Jan 5, 2024",
    readTime: "15 min read",
    category: "Case Studies",
    image: "/images/team-collaboration.jpg",
    authorImage: "/images/hero-automation.jpg",
  },
  {
    slug: "lead-scoring-ultimate-guide",
    title: "The Ultimate Guide to Lead Scoring",
    excerpt: "Stop wasting time on cold leads. Learn how to implement effective lead scoring.",
    author: "Jordan Chen",
    date: "Jan 3, 2024",
    readTime: "9 min read",
    category: "Marketing Automation",
    image: "/images/service-automation.jpg",
    authorImage: "/images/service-crm.jpg",
  },
  {
    slug: "sms-marketing-strategies-2024",
    title: "SMS Marketing Strategies That Work",
    excerpt: "Discover how to leverage SMS marketing without being spammy.",
    author: "Sam Williams",
    date: "Dec 28, 2023",
    readTime: "7 min read",
    category: "Marketing Automation",
    image: "/images/hero-automation.jpg",
    authorImage: "/images/service-automation.jpg",
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm text-muted-foreground mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              ScaleFlow Blog
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-[1.1] mb-6">
              Marketing insights &
              <br />
              <span className="text-muted-foreground">growth strategies</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Expert tips, case studies, and actionable strategies to help you scale.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl mx-auto mb-16"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 rounded-full"
              />
            </div>
          </motion.div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Link href={`/blog/${featuredPost.slug}`}>
              <div className="bg-card border border-border rounded-3xl overflow-hidden hover:border-accent/50 transition-all group">
                <div className="grid md:grid-cols-2">
                  <div className="relative aspect-video md:aspect-auto overflow-hidden">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">Featured</span>
                      <span className="text-sm text-muted-foreground">{featuredPost.category}</span>
                    </div>
                    <h2 className="font-serif text-2xl font-medium text-foreground mb-4 group-hover:text-accent transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <span className="relative h-7 w-7 overflow-hidden rounded-full border border-border">
                          <Image src={featuredPost.authorImage} alt={featuredPost.author} fill className="object-cover" />
                        </span>
                        {featuredPost.author}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-8">
              {/* Categories */}
              <div>
                <h3 className="font-medium text-foreground mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setActiveCategory(category.name)}
                      className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm transition-all ${
                        activeCategory === category.name
                          ? "bg-primary text-primary-foreground"
                          : "bg-card border border-border hover:border-accent/50 text-foreground"
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className={activeCategory === category.name ? "opacity-70" : "text-muted-foreground"}>
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-medium text-foreground mb-2">Stay Updated</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get the latest marketing tips weekly.
                </p>
                <Input placeholder="Your email" className="mb-3" />
                <Button size="sm" className="w-full rounded-full">
                  Subscribe
                </Button>
              </div>
            </aside>

            {/* Blog Posts */}
            <div className="lg:col-span-3">
              {filteredPosts.length === 0 ? (
                <div className="text-center py-16">
                  <h3 className="font-medium text-foreground mb-2">No articles found</h3>
                  <p className="text-muted-foreground">Try adjusting your search or filter.</p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-6">
                  {filteredPosts.map((post, index) => (
                    <motion.div
                      key={post.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                      <Link href={`/blog/${post.slug}`}>
                        <div className="bg-card border border-border rounded-2xl overflow-hidden h-full hover:border-accent/50 transition-all group">
                          <div className="relative aspect-video overflow-hidden">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                          </div>
                          <div className="p-6">
                            <span className="text-xs text-muted-foreground mb-3 block">{post.category}</span>
                            <h3 className="font-medium text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                              {post.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                              <span className="flex items-center gap-2">
                                <span className="relative h-6 w-6 overflow-hidden rounded-full border border-border">
                                  <Image src={post.authorImage} alt={post.author} fill className="object-cover" />
                                </span>
                                {post.author}
                              </span>
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

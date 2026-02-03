"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Bookmark,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

const blogPosts: Record<string, {
  title: string;
  excerpt: string;
  content: string[];
  author: { name: string; role: string };
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  authorImage: string;
}> = {
  "complete-guide-marketing-automation-2024": {
    title: "The Complete Guide to Marketing Automation in 2024",
    excerpt: "Discover how to leverage the latest automation tools and strategies to scale your business.",
    content: [
      "Marketing automation has transformed from a nice-to-have to a must-have for businesses of all sizes. In 2024, the landscape continues to evolve with AI-powered tools, more sophisticated customer journey mapping, and seamless integrations.",
      "## Why Marketing Automation Matters",
      "At its core, marketing automation is about delivering the right message to the right person at the right time without manual intervention. This means your marketing works around the clock.",
      "## Key Components of a Successful Strategy",
      "**Lead Capture and Scoring** - The foundation starts with capturing leads effectively through optimized landing pages and smart forms.",
      "**Email Sequences** - Email remains the backbone of marketing automation. From welcome sequences to abandoned cart recovery.",
      "**CRM Integration** - Your CRM is the central nervous system, tracking every interaction and triggering appropriate follow-ups.",
      "## Implementation Best Practices",
      "Start small and scale. Don't try to automate everything at once. Begin with your highest-impact touchpoints and expand from there.",
    ],
    author: { name: "Alex Rivera", role: "Founder & CEO" },
    date: "Jan 15, 2024",
    readTime: "12 min read",
    category: "Marketing Automation",
    tags: ["Automation", "Email Marketing", "CRM", "Lead Generation"],
    image: "/images/hero-automation.jpg",
    authorImage: "/images/team-collaboration.jpg",
  },
};

const defaultPost = {
  title: "Blog Post",
  excerpt: "Read our latest insights on marketing automation and business growth.",
  content: [
    "This is a sample blog post. Our team regularly publishes insights on marketing automation and growth strategies.",
    "## Why Read Our Blog?",
    "We share practical, actionable advice based on real-world experience helping hundreds of businesses scale.",
  ],
  author: { name: "ScaleFlow Team", role: "Marketing Experts" },
  date: "Jan 2024",
  readTime: "5 min read",
  category: "Marketing",
  tags: ["Marketing", "Automation"],
  image: "/images/service-automation.jpg",
  authorImage: "/images/service-crm.jpg",
};

const relatedPosts = [
  { slug: "5-email-sequences-every-business-needs", title: "5 Email Sequences Every Business Needs", readTime: "8 min" },
  { slug: "building-high-converting-sales-funnels", title: "Building High-Converting Sales Funnels", readTime: "10 min" },
  { slug: "crm-best-practices-small-business", title: "CRM Best Practices for Small Business", readTime: "6 min" },
];

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts[slug] || defaultPost;

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-foreground truncate">{post.title}</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">{post.category}</span>
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground leading-[1.1] mb-6">
              {post.title}
            </h1>

            <p className="text-lg text-muted-foreground mb-8">{post.excerpt}</p>

            <div className="relative overflow-hidden rounded-3xl border border-border bg-card mb-8">
              <div className="relative aspect-[16/9] w-full">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>

            {/* Author & Actions */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-border">
                  <Image src={post.authorImage} alt={post.author.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{post.author.name}</p>
                  <p className="text-sm text-muted-foreground">{post.author.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2.5 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors">
                  <Share2 className="h-5 w-5 text-muted-foreground" />
                </button>
                <button className="p-2.5 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors">
                  <Bookmark className="h-5 w-5 text-muted-foreground" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 lg:px-8 border-t border-border">
        <div className="mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3"
            >
              {post.content.map((paragraph, index) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={index} className="font-serif text-2xl font-medium text-foreground mt-10 mb-4">
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("**")) {
                  return (
                    <p key={index} className="text-foreground mb-4 leading-relaxed" dangerouslySetInnerHTML={{ 
                      __html: paragraph.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") 
                    }} />
                  );
                }
                return (
                  <p key={index} className="text-muted-foreground mb-6 leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">Tags:</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-secondary text-sm text-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Author Card */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="font-medium text-foreground mb-4">About the Author</h3>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-border">
                      <Image src={post.authorImage} alt={post.author.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{post.author.name}</p>
                      <p className="text-xs text-accent">{post.author.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Expert in marketing automation and business growth.
                  </p>
                </div>

                {/* Related Posts */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="font-medium text-foreground mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                        <div className="group">
                          <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors line-clamp-2">
                            {relatedPost.title}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">{relatedPost.readTime}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Back to Blog */}
          <div className="mt-16 pt-8 border-t border-border">
            <Link href="/blog">
              <Button variant="ghost" className="text-muted-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

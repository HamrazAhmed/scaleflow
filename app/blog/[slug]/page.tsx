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
  "all-in-one-business-management-platform-2026": {
    title: "Why Pakistani Startups Need an All-in-One Business Management Platform in 2026",
    excerpt: "Consolidate tools and cut costs with a unified business management platform built for Pakistani founders.",
    content: [
      "Let's be honest: running a startup in Pakistan often feels like juggling flaming swords. You have WhatsApp for client communication, Excel sheets for finances, and a paper diary for tasks. It's chaotic, right? In 2026, the digital landscape has evolved, and the \"hustle harder\" mindset is being replaced by \"hustle smarter.\" If you are tired of switching between ten different tabs just to send an invoice, it's time to look for a better solution.",
      "## The \"App Fatigue\" Is Real",
      "Most small business owners are drowning in subscriptions. You pay for a CRM, a separate invoicing tool, another project management system, email marketing software, and expense tracking apps. It adds up quickly. This is where an all-in-one business management platform comes in. Instead of paying for five different tools, imagine having one dashboard that does it all.",
      "## Why Centralization Wins",
      "A powerful business process management platform acts as the brain of your company. It connects your marketing, sales, and operations in one place. When you use a modern AI cloud business management platform, you're not just storing data — you're gaining insights. It also works as a business spend management platform, helping you track expenses, monitor cash flow, get alerts before overspending, and identify profit leaks. Centralization means fewer mistakes, better visibility, and faster decisions.",
      "## Key Benefits for Local Startups",
      "**Stop Leaking Money** - Consolidating tools means fewer subscriptions and lower monthly costs. **Automate the Boring Stuff** - From follow-up emails to lead tracking, automated workflows ensure nothing slips through the cracks. **Scale Without the Mess** - Whether you run a marketing agency or manage rental properties, having a single source of truth is critical as you grow.",
      "## Conclusion",
      "Stop running your business on sticky notes and WhatsApp screenshots. It's time to adopt a small business management platform that works as hard as you do. With ScaleFlow, you get the power of a complete business management system designed to turn chaos into a well-oiled machine.",
    ],
    author: { name: "ScaleFlow Team", role: "Growth Experts" },
    date: "Feb 13, 2026",
    readTime: "7 min read",
    category: "Business Management",
    tags: ["Business Management", "Startups", "CRM", "Automation"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=60",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=60",
  },
  "online-appointment-scheduling-pakistan": {
    title: "Online Appointment Scheduling Software Pakistan",
    excerpt: "Reduce no-shows, enable 24/7 bookings, and look more professional with smart scheduling.",
    content: [
      "How many times have you heard this? \"Sir, main bhool gaya tha.\" (Sir, I forgot.) Missed meetings are the silent killer of revenue for service-based businesses in Pakistan. Whether you're a consultant, doctor, tutor, or salon owner, the back-and-forth \"Are you free at 5 PM?\" messages are killing your productivity.",
      "## The 24/7 Receptionist You Don't Have to Pay",
      "Imagine a client wants to book you at 11 PM while you're asleep. With an online appointment scheduler, they can:",
      "• View real-time availability",
      "• Select a slot",
      "• Receive instant confirmation",
      "You wake up to a filled calendar — not a messy inbox.",
      "## Why You Need to Ditch the Paper Diary",
      "Manual booking systems cause:",
      "• Double bookings",
      "• Missed reminders",
      "• Lost notes",
      "• Scheduling confusion",
      "An online appointment calendar solves this by:",
      "• Sending automated SMS reminders",
      "• Sending email confirmations",
      "• Updating availability instantly",
      "This drastically reduces no-shows.",
      "## Features That Matter",
      "**Sync With Your Life** - A reliable calendar appointment scheduler syncs with Google Calendar so you never book during family dinner again.",
      "**Look More Professional** - Sending a booking link looks far more professional than negotiating time slots over the phone.",
      "**Make It Easy to Pay You** - Whether you run a salon or a law firm, the logic is simple: make it easy for clients to book and pay.",
      "## The ScaleFlow Advantage",
      "Why pay for a separate expensive scheduling tool? ScaleFlow integrates a powerful online calendar appointment scheduler directly into your website. Stop chasing clients. Start letting them come to you.",
    ],
    author: { name: "ScaleFlow Team", role: "Growth Experts" },
    date: "Feb 13, 2026",
    readTime: "6 min read",
    category: "Scheduling",
    tags: ["Scheduling", "Appointments", "Booking", "No-Shows"],
    image: "../images/appointment.png",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=60",
  },
  "website-builder-pakistan-no-code": {
    title: "Website Builder Pakistan – Create Professional Websites Without Coding",
    excerpt: "Build a modern, professional website with drag-and-drop tools and AI helpers — no developer needed.",
    content: [
      "\"I need a developer.\" In 2026, that's the biggest myth holding Pakistani businesses back. Years ago, you needed HTML and CSS knowledge to get online. Today? If you can drag and drop, you can build a professional website.",
      "## Why Your Facebook Page Isn't Enough",
      "Social media is rented land. You don't own it. An algorithm change can wipe out your reach overnight. A website is digital real estate that you own. And you don't need a computer science degree to build one.",
      "## Enter the Era of the AI Builder",
      "Modern website builder software does the heavy lifting for you. You:",
      "• Choose a template",
      "• Add your content",
      "• Click publish",
      "The best website builder tools now include AI features that:",
      "• Suggest layouts",
      "• Write copy",
      "• Optimize designs",
      "• Improve user experience",
      "## What to Look For",
      "If you're considering a free website builder, be careful — they often include ads and limitations. Instead, choose a professional tool that lets you:",
      "• Create mobile-friendly websites (80% of Pakistani users are mobile)",
      "• Use AI website builder features",
      "• Integrate with CRM and appointment tools",
      "• Accept payments seamlessly",
      "## How ScaleFlow Helps",
      "Most people ask, \"What is the best free website builder?\" The truth? The best one doesn't limit you. ScaleFlow offers a powerful website builder that connects directly with your payments, appointments, and CRM. Don't just build a site. Build a business engine.",
    ],
    author: { name: "ScaleFlow Team", role: "Growth Experts" },
    date: "Feb 13, 2026",
    readTime: "7 min read",
    category: "Website Builder",
    tags: ["Website Builder", "No Code", "Mobile", "AI"],
    image: "/images/builder.png",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=60",
  },
  "building-first-website-portfolio-guide": {
    title: "Step-by-Step Guide: Building Your First Website & Portfolio with ScaleFlow",
    excerpt: "A practical guide to building your professional portfolio from platform choice to SEO and launch.",
    content: [
      "In the freelance economy of 2026, your CV is dead. Clients don't care where you studied. They care what you've built. If you're a designer, writer, developer, or photographer without a portfolio website — you're leaving money on the table.",
      "## Step 1: Choose Your Platform",
      "While a free portfolio website may seem tempting, first impressions matter. A custom domain like yourname.com looks far more professional than yourname.wixsite.com",
      "## Step 2: Curate Your Work",
      "Don't upload everything. The best portfolio websites are selective. Show:",
      "• Your top 5–9 projects",
      "• Clear case studies",
      "• Before-and-after examples",
      "• Measurable results",
      "Search for portfolio website examples in your niche for inspiration.",
      "## Step 3: Build It (No Code Required)",
      "Use a tool to create your portfolio website quickly.",
      "Essential Pages:",
      "• **Home** – Who you are and what you do",
      "• **Work** – Your portfolio gallery",
      "• **About** – Your story and expertise",
      "• **Contact** – A form or booking link",
      "Use pre-made portfolio website templates to save time.",
      "## Step 4: SEO and Launch",
      "Make your website discoverable. Add:",
      "• Keyword-rich descriptions",
      "• Proper headings (H1, H2, H3)",
      "• Image alt text",
      "• Fast loading speed",
      "Even simple portfolio platforms need proper SEO to rank on Google.",
      "## Why ScaleFlow?",
      "Why pay for separate hosting, CRM, invoicing, and booking tools? ScaleFlow lets you:",
      "• Build your portfolio",
      "• Manage clients",
      "• Send invoices",
      "• Accept payments",
      "• Book appointments",
      "All in one place. Launch your professional portfolio today — and look like the pro you truly are.",
    ],
    author: { name: "ScaleFlow Team", role: "Growth Experts" },
    date: "Feb 13, 2026",
    readTime: "8 min read",
    category: "Portfolio",
    tags: ["Portfolio", "Freelance", "Website", "SEO"],
    image: "/images/website.jpg",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=60",
  },
  "marketing-automation-small-businesses-pakistan-2026": {
    title: "Marketing Automation for Small Businesses in Pakistan – The 2026 Guide to Saving Time & Boosting Sales",
    excerpt: "Save time and boost sales using email, SMS, CRM, and AI workflows designed for Pakistani businesses.",
    content: [
      "It is 2026. If your current marketing strategy still relies on manually copying and pasting messages into a WhatsApp Broadcast list, we need to talk. For years, Pakistani small business owners have worn the badge of \"busy\" like a medal. But being busy isn't the same as being productive. In today's competitive digital marketing landscape in Pakistan, customers are bombarded with content. They don't have time for generic spam — and you don't have time to manually follow up with 500 leads. Whether you run a digital marketing agency, clothing brand, consultancy, or salon, doing everything manually is the fastest path to burnout. It's about building a system that sells for you while you sleep, eat, or enjoy a cup of chai.",
      "## Understanding the Modern Customer Journey",
      "To automate effectively, you must understand the modern customer journey. Gone are the days when someone simply walked into a shop and made a purchase. Today, the journey looks like this:",
      "1. They see your ad on Instagram\n2. Visit your website\n3. Forget about you\n4. Receive an email\n5. Check your reviews\n6. Then maybe… they buy",
      "If you drop the ball at any stage, you lose the sale. This is where workflow automation steps in. Instead of hoping you remember to follow up, an automated system:",
      "• Tracks where the customer is in their journey",
      "• Sends timely reminders",
      "• Delivers personalized offers",
      "• Nudges them toward purchase",
      "That nudge might be:",
      "• An SMS discount code",
      "• A \"We miss you\" email",
      "• A reminder about an abandoned cart",
      "Automation ensures no opportunity slips away.",
      "## Why Client Relationship Management (CRM) Is Your Goldmine",
      "Most local businesses focus 100% on customer acquisition — and almost nothing on retention. This is a costly mistake. Customer retention management is where real profit lies. It is far cheaper to sell to an existing client than to find a new one. A strong customer relationship management (CRM) system allows you to:",
      "• Tag and segment customers",
      "• Track purchase history",
      "• Monitor engagement",
      "• Send targeted campaigns",
      "For example:",
      "• A customer bought a winter jacket last year? Automatically notify them when the new collection launches.",
      "• A client hasn't booked an appointment in 3 months? Send an automated \"Welcome Back\" discount SMS.",
      "This level of CRM client management makes customers feel valued — not like just another number in a spreadsheet.",
      "## The Power of Automated Reviews",
      "In Pakistan, word of mouth is king. Before trying a new restaurant or hiring a consultant, what do we do first? We check Google reviews or Facebook ratings. But asking for reviews manually can feel awkward and time-consuming. With automated reviews, the process becomes effortless. Imagine this:",
      "• One hour after a service is completed",
      "• The system automatically sends: \"Hi Ahmed, hope you enjoyed your visit! Would you mind leaving us a quick rating?\"",
      "If the customer gives:",
      "• ⭐⭐⭐⭐⭐ → They are prompted to leave a public Google review",
      "• ⭐ → You receive a private alert to resolve the issue immediately",
      "This simple use of AI and automation can double your social proof — without lifting a finger.",
      "## AI in Automation: The New Standard",
      "You might hear terms like:",
      "• AI in automation",
      "• AI for automation",
      "• Smart workflows",
      "And think, \"This sounds too technical for my bakery.\" It's not. In 2026, these tools are built for non-technical users. AI automation means:",
      "• Sending emails at the best time for maximum open rates",
      "• Predicting which leads are most likely to convert",
      "• Chatbots answering FAQs instantly at 2 AM",
      "• Smart follow-ups triggered by customer behavior",
      "By integrating automation and AI into your daily operations, you stop acting like an admin assistant — and start operating like a CEO.",
      "## Why ScaleFlow Is the Only Platform You Need",
      "There are dozens of customer relationship management platforms available. Some handle emails. Some handle SMS. Some handle your website. The problem? They don't communicate with each other. You end up paying five separate subscriptions for disconnected tools. ScaleFlow changes the game. It is a unified customer relationship management solution designed specifically for modern businesses in Pakistan.",
      "**What You Get:**",
      "**One Dashboard** - Manage emails, SMS campaigns, and sales pipelines in one place.",
      "**Smart Workflows** - Use drag-and-drop automation builders to create powerful marketing campaigns in minutes.",
      "**Total Visibility** - Track which campaign, SMS, or email generated the sale. No confusion. No scattered data. Just results.",
      "## Conclusion",
      "The difference between a struggling startup and a scaling business often comes down to systems. Don't let valuable leads slip through the cracks because you were too busy to hit \"send.\" Embrace the power of client relationship management systems and let technology handle the heavy lifting. With ScaleFlow, you're not just buying software — you're installing a growth engine. It's time to automate, optimize, and dominate your niche. Start your journey today.",
    ],
    author: { name: "ScaleFlow Team", role: "Growth Experts" },
    date: "Feb 13, 2026",
    readTime: "12 min read",
    category: "Marketing Automation",
    tags: ["Marketing Automation", "CRM", "Email", "SMS", "AI"],
    image: "/images/automation.png",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=60",
  },
  "how-one-business-3x-revenue-90-days-marketing-automation": {
    title: "How One Business 3X'd Revenue in 90 Days Using Marketing Automation (Without Increasing Ad Spend)",
    excerpt: "A real case study: How one e-commerce brand tripled revenue without increasing ad spend by implementing marketing automation.",
    content: [
      "Most businesses think growth comes from spending more on ads. But what if the real problem isn't traffic... What if it's what happens after someone shows interest? This case study shows how one growing e-commerce brand transformed its revenue in just 90 days — simply by installing the right marketing automation system.",
      "## The Situation: Revenue Was Stuck",
      "A mid-sized online fashion brand was generating consistent traffic from Instagram and paid ads. But revenue had plateaued at PKR 1.2M per month. The problems were common:",
      "• Manual replies on WhatsApp",
      "• No follow-ups for abandoned carts",
      "• No structured retention campaigns",
      "• No customer segmentation",
      "• No automated review collection",
      "They weren't lacking customers. They were leaking revenue.",
      "## The Turning Point: Installing a Centralized Marketing Automation System",
      "Instead of hiring more staff or increasing ad budgets, they implemented a centralized automation platform that handled:",
      "• CRM & customer segmentation",
      "• Email automation",
      "• SMS follow-ups",
      "• Abandoned cart recovery",
      "• Retention campaigns",
      "• Review collection",
      "• AI-based optimization",
      "Everything from one dashboard. And that changed everything.",
      "## What We Implemented (Step-by-Step)",
      "**1️ Smart Customer Segmentation**",
      "Customers were automatically grouped into:",
      "• First-time buyers",
      "• Repeat customers",
      "• High-value customers",
      "• Inactive users",
      "Instead of sending the same message to everyone, each group received targeted communication.",
      "Result: Higher engagement instantly.",
      "**2️ Automated Abandoned Cart Recovery**",
      "Before: Lost sales were ignored.",
      "After: The system triggered:",
      "• 1-hour reminder",
      "• 24-hour SMS with incentive",
      "• 48-hour urgency message",
      "Result: 18% of abandoned carts recovered in the first month. That alone added significant revenue — without spending an extra rupee on ads.",
      "**3️ Automated Retention Campaigns**",
      "The biggest shift? They stopped focusing only on new customers. The automation system triggered:",
      "• Reorder reminders",
      "• Seasonal collection previews",
      "• Birthday discounts",
      "• \"We Miss You\" campaigns",
      "Repeat purchase rate jumped from 18% to 60%. Retention became their biggest growth driver.",
      "**4️ Automated Review & Reputation System**",
      "After delivery, customers automatically received:",
      "• Feedback request",
      "• Review reminder",
      "• Escalation for negative feedback",
      "More reviews = higher trust = better conversion rate. Sales started compounding.",
      "**5️ AI-Optimized Communication Timing**",
      "The platform analyzed:",
      "• When customers open emails",
      "• When they respond to SMS",
      "• Which segments convert faster",
      "Messages were sent at the right time, to the right person, with the right offer. Open rates increased. Unsubscribes decreased.",
      "## The 90-Day Transformation",
      "The results speak for themselves:",
      "• Monthly Revenue: PKR 1.2M → PKR 3.6M (3X increase)",
      "• Repeat Purchase Rate: 18% → 60%",
      "• Abandoned Cart Recovery: 0% → 18%",
      "• Ad Spend: Same (no increase needed)",
      "• Team Size: Same (no extra hires)",
      "Revenue tripled. Not because of more marketing. But because of better systems.",
      "## Why Most Businesses Stay Stuck",
      "Most businesses:",
      "• Reply manually",
      "• Forget follow-ups",
      "• Don't segment customers",
      "• Depend entirely on new traffic",
      "• Don't track lifecycle data",
      "Manual systems limit growth. Automation multiplies it.",
      "## What This Means for You",
      "If your business:",
      "• Has traffic but inconsistent sales",
      "• Relies on WhatsApp manually",
      "• Has no abandoned cart recovery",
      "• Has low repeat purchases",
      "• Feels \"busy\" but not scaling",
      "Then you don't have a marketing problem. You have a system problem. And that's fixable.",
      "## Imagine This Running Automatically",
      "Imagine:",
      "• Every abandoned cart automatically followed up",
      "• Every customer segmented intelligently",
      "• Every buyer nurtured toward repeat purchase",
      "• Reviews collected automatically",
      "• Campaigns triggered without manual effort",
      "Your business working 24/7 — even while you sleep. That's what marketing automation does.",
      "## Final Thought",
      "The difference between a business that struggles and one that scales often isn't effort. It's infrastructure. If one brand can 3X revenue in 90 days without increasing ad spend — what could structured automation do for yours? The question isn't whether automation works. It's whether you're ready to install a growth engine inside your business.",
    ],
    author: { name: "ScaleFlow Team", role: "Growth Experts" },
    date: "Feb 13, 2026",
    readTime: "10 min read",
    category: "Case Studies",
    tags: ["Case Study", "Marketing Automation", "Revenue", "E-commerce", "Growth"],
    image: "/images/team-collaboration.jpg",
    authorImage: "/images/hero-automation.jpg",
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

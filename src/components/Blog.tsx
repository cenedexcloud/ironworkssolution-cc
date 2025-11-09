"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import { useRouter } from "next/navigation"

const posts = [
  {
    title: "Iron Fence vs Aluminum — Which Lasts Longer?",
    excerpt: "Discover the key differences in durability, maintenance, and cost between iron and aluminum fencing.",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&q=80",
    category: "Materials Guide",
    readTime: "5 min read"
  },
  {
    title: "How to Prevent Rust on Ironwork",
    excerpt: "Expert tips on protecting your iron fence and gates from rust and corrosion for decades to come.",
    image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=600&q=80",
    category: "Maintenance",
    readTime: "4 min read"
  },
  {
    title: "Top 5 Gate Designs for California Homes",
    excerpt: "Trending gate styles that perfectly complement Southern California architecture and lifestyle.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    category: "Design Inspiration",
    readTime: "6 min read"
  },
  {
    title: "Why Powder Coating Beats Paint for Iron Fencing",
    excerpt: "Learn why powder coating is the superior finish for long-lasting protection and vibrant color.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
    category: "Finishes",
    readTime: "5 min read"
  }
]

export default function Blog() {
  const router = useRouter()

  const handleDownloadGuide = () => {
    // Redirect to the online brochure page instead of downloading
    router.push('/resources/free-guide')
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            Expert Tips & Inspiration
          </h2>
          <div className="w-24 h-1 bg-[#C41E3A] mx-auto mb-4" />
          <p className="text-lg text-[#3c3c3c] max-w-2xl mx-auto">
            Insights from our master craftsmen to help you make informed decisions about your ironwork
          </p>
        </div>

        {/* Lead Magnet - Featured */}
        <Card className="p-8 mb-12 bg-gradient-to-r from-[#1a1a1a] to-[#3c3c3c] text-white border-none">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 bg-[#C41E3A] rounded-full flex items-center justify-center flex-shrink-0">
              <Download className="w-10 h-10" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">
                Free Guide: 5 Ways to Boost Curb Appeal with Iron Fencing
              </h3>
              <p className="text-white/80">
                Download our comprehensive guide and discover proven strategies to enhance your property value
              </p>
            </div>
            <Button
              variant="secondary"
              size="lg"
              className="flex-shrink-0"
              onClick={handleDownloadGuide}
            >
              Get My Free Guide
            </Button>
          </div>
        </Card>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="overflow-hidden border-[#e5e5e5] hover:shadow-xl hover:border-[#C41E3A]/30 transition-all duration-300 group glow-on-hover cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-[#C41E3A] uppercase tracking-wide">
                    {post.category}
                  </span>
                  <span className="text-xs text-[#3c3c3c]">• {post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2 group-hover:text-[#C41E3A] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-[#3c3c3c] mb-4">
                  {post.excerpt}
                </p>
                <button className="text-[#C41E3A] font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

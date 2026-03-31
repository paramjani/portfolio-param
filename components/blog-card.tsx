"use client"

import type { BlogPost } from "@/lib/rss-parser"
import { formatDate } from "@/lib/rss-parser"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="group overflow-hidden h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Featured Image */}
      {post.image && (
        <div className="relative h-48 w-full bg-muted overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={(e) => {
              // Fallback for broken images
              const img = e.target as HTMLImageElement
              img.style.display = "none"
            }}
          />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col flex-grow p-4 sm:p-6">
        {/* Categories */}
        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {post.categories.slice(0, 2).map((category) => (
              <Badge
                key={category}
                variant="secondary"
                className="text-xs"
              >
                {category}
              </Badge>
            ))}
          </div>
        )}

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-semibold line-clamp-3 mb-3 group-hover:text-primary transition-colors">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">
          {post.description}
        </p>

        {/* Meta Information */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex flex-col gap-1">
            <time className="text-xs text-muted-foreground">
              {formatDate(post.pubDate)}
            </time>
            {post.author && (
              <span className="text-xs text-muted-foreground">
                By {post.author}
              </span>
            )}
          </div>

          {/* Read More Link */}
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label={`Read more about ${post.title}`}
          >
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </Card>
  )
}

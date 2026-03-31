"use client"

import type { BlogPost } from "@/lib/rss-parser"
import BlogCard from "@/components/blog-card"

interface BlogGridProps {
  posts: BlogPost[]
  isLoading?: boolean
}

export default function BlogGrid({ posts, isLoading }: BlogGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="rounded-lg h-96 bg-muted animate-pulse"
          />
        ))}
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className="col-span-full py-12 text-center">
        <p className="text-muted-foreground text-lg">
          No blog posts found. Please try a different search or category.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  )
}

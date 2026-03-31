"use client"

import { useState, useMemo, useEffect } from "react"
import { getUniqueCategories, type BlogPost } from "@/lib/rss-parser"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import BlogHeader from "@/components/blog-header"
import BlogSearch from "@/components/blog-search"
import BlogGrid from "@/components/blog-grid"

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Fetch RSS feed on mount via API route
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const response = await fetch("/api/blog/feed")
        const data = await response.json()

        if (!data.success) {
          throw new Error(data.error || "Failed to fetch blog posts")
        }

        setPosts(data.posts)
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Failed to load blog posts. Please try again later."
        )
        setPosts([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  // Get unique categories
  const categories = useMemo(() => getUniqueCategories(posts), [posts])

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory =
        selectedCategory === null ||
        (post.categories && post.categories.includes(selectedCategory))

      return matchesSearch && matchesCategory
    })
  }, [posts, searchQuery, selectedCategory])

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-grow mt-24 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <BlogHeader />

        {/* Search and Filters Section */}
        <div className="mb-12">
          <BlogSearch
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
            categories={categories}
            onSearchChange={setSearchQuery}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {/* Error State */}
        {error && !isLoading && (
          <div className="mb-8 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
            <p className="text-destructive text-sm">{error}</p>
            <p className="text-destructive/80 text-xs mt-1">
              Make sure to update the RSS_FEED_URL in the blog page with your actual feed URL.
            </p>
          </div>
        )}

        {/* Results Count */}
        {!isLoading && posts.length > 0 && (
          <div className="mb-6 text-sm text-muted-foreground">
            Showing {filteredPosts.length} of {posts.length} post
            {posts.length !== 1 ? "s" : ""}
          </div>
        )}

        {/* Blog Grid */}
        <BlogGrid posts={filteredPosts} isLoading={isLoading} />
      </main>

      <Footer />
    </div>
  )
}

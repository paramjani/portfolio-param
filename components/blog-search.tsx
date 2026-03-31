"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, Search } from "lucide-react"

interface BlogSearchProps {
  searchQuery: string
  selectedCategory: string | null
  categories: string[]
  onSearchChange: (query: string) => void
  onCategoryChange: (category: string | null) => void
}

export default function BlogSearch({
  searchQuery,
  selectedCategory,
  categories,
  onSearchChange,
  onCategoryChange,
}: BlogSearchProps) {
  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
        <Input
          type="text"
          placeholder="Search blog posts..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 h-11"
        />
      </div>

      {/* Category Filter */}
      {categories.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-foreground">Filter by Category</h3>
          <div className="flex flex-wrap gap-2">
            {selectedCategory && (
              <Button
                variant="default"
                size="sm"
                className="gap-2"
                onClick={() => onCategoryChange(null)}
              >
                {selectedCategory}
                <X size={14} />
              </Button>
            )}

            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() =>
                  onCategoryChange(selectedCategory === category ? null : category)
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Active Filters Summary */}
      {(searchQuery || selectedCategory) && (
        <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Filters applied:</span>
            {searchQuery && (
              <Badge variant="secondary" className="gap-1">
                Search: {searchQuery}
                <button
                  onClick={() => onSearchChange("")}
                  className="ml-1 hover:opacity-70"
                >
                  <X size={12} />
                </button>
              </Badge>
            )}
            {selectedCategory && (
              <Badge variant="secondary" className="gap-1">
                Category: {selectedCategory}
                <button
                  onClick={() => onCategoryChange(null)}
                  className="ml-1 hover:opacity-70"
                >
                  <X size={12} />
                </button>
              </Badge>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              onSearchChange("")
              onCategoryChange(null)
            }}
          >
            Clear All
          </Button>
        </div>
      )}
    </div>
  )
}

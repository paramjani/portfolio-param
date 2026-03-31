import { type BlogPost } from "@/lib/rss-parser"
import { NextRequest, NextResponse } from "next/server"

const RSS_FEED_URL = process.env.NEXT_PUBLIC_RSS_FEED_URL || "https://example.com/blog/feed"

/**
 * Server-side RSS feed parser
 * This API route fetches and parses the RSS feed, returning JSON posts
 */
export async function GET(request: NextRequest) {
  try {
    // Fetch the RSS feed
    const response = await fetch(RSS_FEED_URL, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.statusText}`)
    }

    const feedText = await response.text()

    // Parse RSS feed on server using regex-based parser
    const posts = parseRSSFeedServer(feedText)

    return NextResponse.json(
      { posts, success: true },
      {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      }
    )
  } catch (error) {
    console.error("Error fetching RSS feed:", error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to fetch RSS feed",
        posts: [],
      },
      { status: 500 }
    )
  }
}

/**
 * Simple server-side RSS parser using regex
 */
function parseRSSFeedServer(xmlString: string): BlogPost[] {
  try {
    const posts: BlogPost[] = []

    // Extract all item elements
    const itemRegex = /<item[^>]*>([\s\S]*?)<\/item>/gi
    let itemMatch

    while ((itemMatch = itemRegex.exec(xmlString)) !== null) {
      const itemContent = itemMatch[1]

      // Extract title
      const titleMatch = /<title[^>]*>([\s\S]*?)<\/title>/i.exec(itemContent)
      const title = titleMatch ? decodeEntities(titleMatch[1]) : ""

      // Extract link
      const linkMatch = /<link[^>]*>([\s\S]*?)<\/link>/i.exec(itemContent)
      const link = linkMatch ? decodeEntities(linkMatch[1]).trim() : ""

      // Extract description
      const descriptionMatch = /<description[^>]*>([\s\S]*?)<\/description>/i.exec(
        itemContent
      )
      const rawDescription = descriptionMatch ? decodeEntities(descriptionMatch[1]) : ""
      const description = cleanHTML(rawDescription)

      // Extract pubDate
      const pubDateMatch = /<pubDate[^>]*>([\s\S]*?)<\/pubDate>/i.exec(itemContent)
      const pubDate = pubDateMatch ? decodeEntities(pubDateMatch[1]) : new Date().toISOString()

      if (!title || !link) continue

      // Extract image
      let image: string | undefined

      // Try content:encoded
      const contentMatch = /<content:encoded[^>]*>([\s\S]*?)<\/content:encoded>/i.exec(
        itemContent
      )
      if (contentMatch) {
        image = extractImageFromHTML(contentMatch[1])
      }

      // Try media:content
      if (!image) {
        const mediaMatch = /<media:content[^>]*url=["']([^"']+)["']/i.exec(itemContent)
        if (mediaMatch) {
          image = mediaMatch[1]
        }
      }

      // Extract categories
      const categories: string[] = []
      const categoryRegex = /<category[^>]*>([\s\S]*?)<\/category>/gi
      let catMatch

      while ((catMatch = categoryRegex.exec(itemContent)) !== null) {
        const cat = decodeEntities(catMatch[1]).trim()
        if (cat) categories.push(cat)
      }

      // Extract author
      const authorMatch =
        /<author[^>]*>([\s\S]*?)<\/author>/i.exec(itemContent) ||
        /<dc:creator[^>]*>([\s\S]*?)<\/dc:creator>/i.exec(itemContent)
      const author = authorMatch ? decodeEntities(authorMatch[1]) : undefined

      const post: BlogPost = {
        id: link,
        title: cleanText(title),
        description,
        pubDate,
        link,
        image,
        categories: categories.length > 0 ? categories : undefined,
        author,
      }

      posts.push(post)
    }

    // Sort by date (newest first)
    posts.sort((a, b) => {
      const dateA = new Date(a.pubDate).getTime()
      const dateB = new Date(b.pubDate).getTime()
      return dateB - dateA
    })

    return posts
  } catch (error) {
    console.error("Error parsing RSS feed:", error)
    return []
  }
}

/**
 * Extract image URL from HTML content
 */
function extractImageFromHTML(html: string): string | undefined {
  const imgRegex = /<img[^>]+src=["']([^"']+)["']/i
  const match = html.match(imgRegex)
  return match?.[1]
}

/**
 * Clean HTML tags and entities from text
 */
function cleanHTML(html: string): string {
  if (!html) return ""

  // Remove HTML tags
  let text = html.replace(/<[^>]+>/g, "")

  // Decode entities
  text = decodeEntities(text)

  // Truncate to reasonable length
  if (text.length > 300) {
    text = text.substring(0, 300).trim() + "..."
  }

  return text
}

/**
 * Decode HTML entities
 */
function decodeEntities(text: string): string {
  const entities: { [key: string]: string } = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&apos;": "'",
    "&#39;": "'",
    "&nbsp;": " ",
  }

  let decoded = text
  for (const [entity, char] of Object.entries(entities)) {
    decoded = decoded.replace(new RegExp(entity, "g"), char)
  }

  return decoded
}

/**
 * Clean text by removing extra whitespace
 */
function cleanText(text: string): string {
  return text.replace(/\s+/g, " ").trim()
}

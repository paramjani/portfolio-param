export interface BlogPost {
  id: string
  title: string
  description: string
  pubDate: string
  link: string
  image?: string
  categories?: string[]
  author?: string
}

/**
 * Parse RSS feed XML string and extract blog posts
 * Works on both client and server side
 */
export function parseRSSFeed(xmlString: string): BlogPost[] {
  try {
    // Create a DOM parser from the XML string
    const parser = new DOMParser()
    const xmlDoc = parser.parseFromString(xmlString, "application/xml")

    // Check for parser errors
    if (xmlDoc.getElementsByTagName("parsererror").length > 0) {
      throw new Error("Invalid XML in RSS feed")
    }

    const items = xmlDoc.getElementsByTagName("item")
    const posts: BlogPost[] = []

    for (let i = 0; i < items.length; i++) {
      const item = items[i]

      // Extract basic fields
      const title = getElementText(item, "title")
      const link = getElementText(item, "link")
      const description = getElementText(item, "description")
      const pubDate = getElementText(item, "pubDate")

      if (!title || !link) continue

      // Extract image from various possible sources
      let image: string | undefined = undefined

      // Try content:encoded first (common in WordPress)
      const contentEncoded = getElementText(item, "content:encoded")
      if (contentEncoded) {
        image = extractImageFromHTML(contentEncoded)
      }

      // Try media:content (common in modern feeds)
      if (!image) {
        const mediaContent = item.getElementsByTagName("media:content")[0]
        if (mediaContent) {
          image = mediaContent.getAttribute("url") || undefined
        }
      }

      // Try image tag
      if (!image) {
        const imageTag = getElementText(item, "image")
        if (imageTag) {
          image = imageTag
        }
      }

      // Try enclosure with image type
      if (!image) {
        const enclosure = item.getElementsByTagName("enclosure")[0]
        if (enclosure) {
          const type = enclosure.getAttribute("type")
          if (type?.startsWith("image/")) {
            image = enclosure.getAttribute("url") || undefined
          }
        }
      }

      // Extract categories
      const categoryElements = item.getElementsByTagName("category")
      const categories: string[] = []
      for (let j = 0; j < categoryElements.length; j++) {
        const cat = categoryElements[j].textContent
        if (cat) {
          categories.push(cat)
        }
      }

      // Extract author
      const author = getElementText(item, "author") || getElementText(item, "dc:creator")

      // Create post object with unique ID based on link
      const post: BlogPost = {
        id: link,
        title: cleanText(title),
        description: cleanHTML(description),
        pubDate: pubDate,
        link: link,
        image: image,
        categories: categories.length > 0 ? categories : undefined,
        author: author || undefined,
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
 * Helper function to safely get element text content
 */
function getElementText(element: Element, tagName: string): string {
  const el = element.getElementsByTagName(tagName)[0]
  return el?.textContent?.trim() || ""
}

/**
 * Extract image URL from HTML content
 */
function extractImageFromHTML(html: string): string | undefined {
  const imgRegex = /<img[^>]+src=["']([^"']+)["']/
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

  // Decode HTML entities
  text = decodeHTMLEntities(text)

  // Truncate to reasonable length
  if (text.length > 300) {
    text = text.substring(0, 300).trim() + "..."
  }

  return text
}

/**
 * Decode HTML entities
 */
function decodeHTMLEntities(text: string): string {
  const textarea = document.createElement("textarea")
  textarea.innerHTML = text
  return textarea.value
}

/**
 * Clean text by removing extra whitespace
 */
function cleanText(text: string): string {
  return text.replace(/\s+/g, " ").trim()
}

/**
 * Format date for display
 */
export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  } catch {
    return dateString
  }
}

/**
 * Get unique categories from posts
 */
export function getUniqueCategories(posts: BlogPost[]): string[] {
  const categories = new Set<string>()
  posts.forEach((post) => {
    post.categories?.forEach((cat) => categories.add(cat))
  })
  return Array.from(categories).sort()
}

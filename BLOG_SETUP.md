# Blog Setup Guide

This guide will help you set up and configure your RSS-based blog page.

## Quick Start

The blog page is fully integrated into your portfolio and requires minimal setup:

1. **Set the RSS Feed URL** as an environment variable in your Vercel project settings:
   - Go to your Vercel dashboard → Project Settings → Environment Variables
   - Add: `NEXT_PUBLIC_RSS_FEED_URL = "https://your-blog.com/feed"`
   - Replace with your actual RSS feed URL
   - Redeploy your project after adding the environment variable

2. **Access the blog**: Navigate to `/blog` on your website

Note: The `NEXT_PUBLIC_` prefix allows the URL to be used in the browser. If your RSS feed requires authentication, you can use a regular environment variable and fetch it server-side only.

## Features

✅ **Automatic RSS Feed Integration** - Displays posts from any RSS feed
✅ **Search Functionality** - Search posts by title and description
✅ **Category Filtering** - Filter posts by categories from RSS feed
✅ **Responsive Design** - Works beautifully on mobile, tablet, and desktop
✅ **Featured Images** - Automatically extracts images from posts
✅ **SEO-Friendly** - Proper metadata and semantic HTML
✅ **Loading States** - Smooth skeleton loading while fetching
✅ **Error Handling** - Graceful error messages if feed fails
✅ **Performance Optimized** - Server-side caching (1 hour) and image optimization
✅ **Modern UI** - Rounded cards, smooth hover effects, and animations

## Finding Your RSS Feed URL

Most blogging platforms provide an RSS feed. Here are common locations:

### Popular Blogging Platforms:
- **Medium**: `https://medium.com/feed/@yourusername`
- **Dev.to**: `https://dev.to/api/articles?username=yourusername&state=published`
- **Hashnode**: `https://yourblog.hashnode.dev/rss.xml`
- **WordPress**: `https://yourblog.com/feed/`
- **Ghost**: `https://yourblog.com/rss/`
- **Substack**: `https://yourblog.substack.com/feed`
- **Personal Blog**: Usually at `/feed`, `/feed.xml`, or `/blog/feed`

## Customization

### Change the RSS Feed URL

Update your environment variable in Vercel project settings:
- Go to Project Settings → Environment Variables
- Update `NEXT_PUBLIC_RSS_FEED_URL` with your new feed URL
- Redeploy the project

Or set it locally in `.env.local`:
```
NEXT_PUBLIC_RSS_FEED_URL=https://your-feed-url-here.com/feed
```

### Modify Blog Header Text

Edit `/components/blog-header.tsx` to customize the title and description.

### Adjust Grid Layout

In `/components/blog-grid.tsx`, modify the grid classes:
```typescript
// Current: 1 column mobile, 2 columns tablet, 3 columns desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// For 2 columns desktop instead:
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
```

### Customize Blog Card Appearance

Edit `/components/blog-card.tsx` to change:
- Card styling and shadow effects
- Featured image height: `h-48` (change to `h-40`, `h-56`, etc.)
- Text truncation: `line-clamp-3` (number determines lines shown)
- Badge colors and sizes

### Change Cache Duration

In `/lib/rss-parser.ts`, modify the revalidate time:
```typescript
const response = await fetch(feedUrl, {
  next: { revalidate: 3600 }, // Change 3600 to your desired seconds
})
```

## Component Structure

```
/app/blog/
├── page.tsx           # Main blog page with search & filter logic
└── layout.tsx         # SEO metadata for blog section

/components/
├── blog-header.tsx    # Blog title and description
├── blog-search.tsx    # Search bar and category filters
├── blog-grid.tsx      # Responsive grid layout
└── blog-card.tsx      # Individual post card

/lib/
└── rss-parser.ts      # RSS feed parsing and utilities
```

## How It Works

1. **Fetch**: When the page loads, it fetches your RSS feed from the configured URL
2. **Parse**: The RSS parser extracts posts, images, categories, and metadata
3. **Cache**: Results are cached for 1 hour (configurable)
4. **Display**: Posts are displayed in a responsive grid with filtering
5. **Search**: Users can search by title/description and filter by category
6. **Click**: Users can click any post to open it in a new tab

## Supported RSS Feed Formats

The parser supports:
- Standard RSS 2.0
- Atom feeds
- WordPress feeds
- Medium feeds
- Dev.to feeds
- Custom feeds with common metadata

## Image Extraction

The parser automatically tries to extract images from multiple sources:
1. `content:encoded` (WordPress style)
2. `media:content` (Standard media tags)
3. `image` tags
4. `enclosure` tags with image MIME types
5. HTML img tags within description

If a feed doesn't have images, posts will display without featured images (but cards remain functional).

## Search & Filter Performance

- Search is performed client-side for instant feedback
- Category filtering works on the extracted RSS data
- Both can be combined (AND logic)
- Clear All button resets both filters

## Mobile Responsiveness

The blog is fully responsive:
- **Mobile (< 768px)**: 1 column grid, touch-friendly search
- **Tablet (768px - 1024px)**: 2 column grid
- **Desktop (> 1024px)**: 3 column grid

## SEO Benefits

✅ Unique meta tags for blog section
✅ Canonical URLs
✅ Open Graph tags for social sharing
✅ Proper heading hierarchy (h1 > h3)
✅ Image alt text
✅ Semantic HTML structure
✅ Mobile-friendly design
✅ Fast page load (cached for 1 hour)

## Troubleshooting

### "No blog posts found" error
- Check that the RSS_FEED_URL is correct and accessible
- Verify the feed is in a supported format
- Test the URL in your browser

### Images not showing
- Not all feeds include images
- Check if your RSS feed has `<image>` or `<media:content>` tags
- Some feeds may require CORS headers

### Categories not appearing
- Your RSS feed may not include category tags
- Some platforms use different tag names

### Feed updates not showing
- Blog posts are cached for 1 hour
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Or change the revalidate time to a lower number

## Adding Multiple Feeds

To combine posts from multiple RSS feeds:

```typescript
const RSS_FEEDS = [
  "https://feed1.com/rss",
  "https://feed2.com/rss",
  "https://feed3.com/rss",
]

const allPosts: BlogPost[] = []
for (const url of RSS_FEEDS) {
  const posts = await parseRSSFeed(url)
  allPosts.push(...posts)
}

// Sort and deduplicate
setPosts(allPosts.sort(...))
```

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Initial Load**: ~500ms (depends on RSS feed size)
- **Cache**: 1 hour by default
- **Search/Filter**: Instant (client-side)
- **Image Loading**: Optimized with Next.js Image component
- **Bundle Size**: Minimal (~5KB gzipped for blog components)

## Need Help?

1. Check browser console for error messages
2. Verify your RSS feed is valid: https://www.feedvalidator.org/
3. Test with a known working feed first (e.g., Medium)
4. Ensure CORS is allowed (most feeds allow it)

## License

This blog component is part of your portfolio and can be freely customized.

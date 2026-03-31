# Blog Page Troubleshooting Checklist

Use this guide to quickly diagnose and fix issues with your blog page.

## 🔍 Before You Start

Open your browser's Developer Console (F12 or Cmd+Option+I) and check for error messages.

---

## ❌ Issue: Blog page shows "No blog posts found"

### Check List:
1. ✅ **Verify RSS feed URL is set**
   ```bash
   # Check your environment variables
   # Local: Look in .env.local
   # Vercel: Go to Project Settings → Environment Variables
   ```
   - Make sure `NEXT_PUBLIC_RSS_FEED_URL` is configured
   - Make sure it's not pointing to `https://example.com/blog/feed`

2. ✅ **Test the RSS feed URL in browser**
   - Paste your feed URL directly in the browser
   - You should see XML content (not a 404 or HTML page)
   - Example: Open `https://dev.to/api/articles?username=ben&state=published`

3. ✅ **Check API route response**
   - Open Network tab (F12)
   - Visit `/blog` page
   - Look for request to `/api/blog/feed`
   - Check if it returns `"success": true` with posts

4. ✅ **Verify feed is public**
   - RSS feeds must be publicly accessible
   - Check CORS headers (not always visible to users)
   - Most feeds allow cross-origin requests

5. ✅ **Try a known working feed**
   ```
   https://dev.to/api/articles?username=ben&state=published
   https://css-tricks.com/feed/
   ```

### Solution:
- Update environment variable with correct feed URL
- Redeploy if on Vercel
- Hard refresh browser (Ctrl+Shift+R)

---

## ❌ Issue: "Failed to fetch RSS feed" error

### Check List:
1. ✅ **Feed URL is correct**
   - No typos in the URL
   - URL is accessible (test in browser)
   - URL hasn't changed

2. ✅ **Network connectivity**
   - Check internet connection
   - Verify request in Network tab (F12)
   - Check if API response shows error details

3. ✅ **Feed is valid XML**
   - Test at https://www.feedvalidator.org/
   - Some feeds might be malformed

4. ✅ **CORS issues**
   - Most feeds support CORS
   - Some feeds might block requests
   - If blocked, try a different feed source

### Solution:
- Verify feed URL and format
- Check console error message for details
- Try a different RSS feed
- Contact feed provider if URL is valid but returns 404

---

## ❌ Issue: Images not showing on blog cards

### Check List:
1. ✅ **Feed includes images**
   - Not all RSS feeds have images in metadata
   - Open the XML in browser and search for `<image>` or `<media:content>`
   - Blog posts will work fine without images (cards remain functional)

2. ✅ **Image URLs are valid**
   - In Network tab, check image requests
   - Look for 404 or broken image responses
   - Some feeds might use relative URLs instead of absolute

3. ✅ **Image domain allows CORS**
   - Some image hosts block cross-origin requests
   - This is not fixable on client-side

4. ✅ **Browser has images enabled**
   - Check browser settings
   - Disable any image-blocking extensions

### Solution:
- Some feeds simply don't have images - that's normal
- Cards display perfectly without images
- The blog remains fully functional
- No action needed unless images are critical

---

## ❌ Issue: Categories/Tags not appearing

### Check List:
1. ✅ **Feed includes category data**
   - Check RSS feed XML for `<category>` tags
   - Some feeds don't include categories
   - Different feeds use different tag names

2. ✅ **Parser supports your feed's categories**
   - Our parser looks for `<category>` tags
   - Supports most common RSS formats
   - Some custom formats might not be detected

### Solution:
- Not all feeds include category data
- Categories are optional - blog works without them
- If you need them, switch to a feed that includes categories
- No action needed if feed doesn't have categories

---

## ❌ Issue: Blog page is blank or never loads

### Check List:
1. ✅ **JavaScript is enabled**
   - Check browser console for errors
   - Disable browser extensions (they might block JS)

2. ✅ **Page route exists**
   - URL should be `/blog` not `/blog/` or `/blog/page`
   - Check navbar link goes to correct URL

3. ✅ **Components are imported correctly**
   - Check console for import errors
   - File names are case-sensitive: `blog-card.tsx` not `BlogCard.tsx`

4. ✅ **API route is working**
   - Check Network tab for `/api/blog/feed` request
   - Should return JSON response

5. ✅ **Browser is modern**
   - Use Chrome, Firefox, Safari, or Edge
   - Old browsers might not support React 19

### Solution:
- Hard refresh page (Ctrl+Shift+R)
- Check console for error messages (F12)
- Verify `/app/blog/page.tsx` file exists
- Ensure environment variable is set

---

## ❌ Issue: "Feed updates not showing"

### Check List:
1. ✅ **Feed is cached for 1 hour**
   - Posts are cached for performance
   - Wait 1 hour for automatic refresh
   - Or hard refresh your browser

2. ✅ **You've deployed the change**
   - Vercel changes take ~5 minutes to deploy
   - Check Deployments tab if you changed the URL

3. ✅ **Browser cache**
   - Browser might cache the page
   - Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
   - Open in incognito/private window

### Solution:
- Hard refresh the blog page
- Clear browser cache if using Ctrl+F5 doesn't work
- To immediately see updates, change cache duration in `app/api/blog/feed/route.ts`:
  ```typescript
  next: { revalidate: 60 } // Change from 3600 to 60 (1 minute)
  ```

---

## ❌ Issue: Search not working

### Check List:
1. ✅ **Posts are loaded**
   - Blog shows posts before searching
   - If no posts, fix the "No blog posts found" issue first

2. ✅ **Search is client-side**
   - Searches happen instantly (no network request)
   - Works even offline (searches cached posts)

3. ✅ **Browser has JavaScript enabled**
   - Search requires JavaScript
   - Check console for errors

### Solution:
- Verify posts load first
- Type slowly to see results update
- Clear search to see all posts again
- Check browser console for errors

---

## ❌ Issue: Categories filter not working

### Check List:
1. ✅ **Feed includes categories**
   - Check if categories appear in the UI
   - If no category buttons, feed doesn't have categories

2. ✅ **You clicked the category button**
   - Category buttons toggle on/off
   - Click again to deselect

3. ✅ **Filter logic is correct**
   - Filtering works with search combined
   - "Clear All" button resets both filters

### Solution:
- Click category button to toggle filter on/off
- Use "Clear All" to reset filters
- Combine with search for powerful filtering

---

## ❌ Issue: Wrong number of posts showing

### Check List:
1. ✅ **Filters are applied**
   - Check if search or category filter is active
   - Click "Clear All" to see full count

2. ✅ **Feed has limited posts**
   - Some feeds only return 10-20 recent posts
   - Older posts might not be available via RSS

3. ✅ **Feed pagination**
   - Some feeds paginate results
   - Our parser gets the first page only

### Solution:
- Check how many posts the RSS feed includes
- Clear filters to see actual post count
- Try "View on original blog" for more posts

---

## ❌ Issue: Style looks broken or weird

### Check List:
1. ✅ **Tailwind CSS is loaded**
   - Check if any styling appears
   - If completely unstyled, Tailwind didn't load

2. ✅ **Dark mode is working**
   - Switch theme using theme toggle
   - Colors should invert properly

3. ✅ **Browser is up-to-date**
   - Use latest Chrome, Firefox, Safari, or Edge
   - CSS Grid and Flexbox might not work in old browsers

### Solution:
- Hard refresh page (Ctrl+Shift+R)
- Check browser console for CSS errors
- Update browser to latest version
- Try different browser to isolate issue

---

## ✅ Issue: Everything works, but I want to customize it

### See These Files:
- **Change colors**: Edit `app/globals.css` CSS variables
- **Change layout**: Edit `components/blog-grid.tsx` grid classes
- **Change card style**: Edit `components/blog-card.tsx`
- **Change header text**: Edit `components/blog-header.tsx`
- **Change cache time**: Edit `app/api/blog/feed/route.ts` revalidate value

---

## 🔧 Advanced Troubleshooting

### Check RSS Feed Validity
Visit: https://www.feedvalidator.org/
Paste your RSS feed URL to validate the XML structure.

### Monitor API Performance
1. Open DevTools (F12)
2. Go to Network tab
3. Look for `/api/blog/feed` request
4. Check response time and size
5. Expand response to see parsed posts

### Test Different Feeds
If your feed isn't working, test with:
```
https://dev.to/api/articles?username=ben&state=published
https://css-tricks.com/feed/
https://www.smashingmagazine.com/feed/
```

If these work, your setup is correct - your feed might be the issue.

### Check Environment Variables
```bash
# Local development
cat .env.local | grep NEXT_PUBLIC_RSS_FEED_URL

# Production (Vercel)
# Go to Settings → Environment Variables
```

### View Complete Error Log
In API route response (F12 → Network → /api/blog/feed → Response tab):
```json
{
  "success": false,
  "error": "Detailed error message here",
  "posts": []
}
```

---

## 🆘 Still Having Issues?

1. **Check all the guides:**
   - `BLOG_QUICK_START.md` - For quick reference
   - `BLOG_SETUP.md` - For detailed setup
   - `BLOG_IMPLEMENTATION_SUMMARY.md` - For architecture overview

2. **Verify your setup:**
   - Environment variable is set
   - Feed URL is correct and accessible
   - You've redeployed after changing env vars

3. **Test with a known feed:**
   ```
   NEXT_PUBLIC_RSS_FEED_URL=https://dev.to/api/articles?username=ben&state=published
   ```

4. **Clear everything and restart:**
   ```bash
   # Hard refresh browser
   Ctrl+Shift+R (or Cmd+Shift+R on Mac)
   
   # Or clear cache manually
   F12 → Application → Clear site data
   ```

5. **If still stuck:**
   - Check browser console for exact error message
   - Search Google for the error message
   - Check the RSS feed validity at https://www.feedvalidator.org/

---

## 📝 Useful Commands

```bash
# Development
npm run dev

# Build
npm run build

# Check for errors
npm run lint

# View network requests
# F12 → Network tab → Visit /blog
```

---

## 🎯 Common Solutions Summary

| Problem | Solution |
|---------|----------|
| No posts showing | Check RSS feed URL in env vars |
| Images not showing | Not all feeds have images - normal |
| Feed not updating | Hard refresh (Ctrl+Shift+R) |
| Categories missing | Feed doesn't include categories |
| Search not working | Posts must load first |
| Styles look broken | Check Tailwind CSS loaded |
| Wrong posts count | Check if filter is active |
| API errors | Validate feed at feedvalidator.org |

---

Good luck! Your blog page is ready to go. 🚀

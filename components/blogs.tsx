import Link from "next/link";

const blogs = [
  {
    title: "How to Rank a Website on Google in 2026",
    description:
      "Learn the latest SEO strategies to rank your website higher on Google and increase organic traffic.",
    category: "SEO Guide",
    date: "March 2026",
    slug: "rank-website-google-2026",
  },
  {
    title: "Complete Technical SEO Checklist for Developers",
    description:
      "A step-by-step technical SEO checklist to improve website speed, crawlability, and indexing.",
    category: "Technical SEO",
    date: "March 2026",
    slug: "technical-seo-checklist",
  },
  {
    title: "Keyword Research Guide for Beginners",
    description:
      "Learn how to find high-traffic keywords and build a powerful SEO strategy.",
    category: "SEO Strategy",
    date: "March 2026",
    slug: "keyword-research-guide",
  },
];

export default function Blogs() {
  return (
    <section className="max-w-6xl mx-auto">

      <h2 className="text-3xl font-bold text-center mb-4 text-white">
        Latest SEO Blogs
      </h2>

      <p className="text-center text-gray-400 mb-12">
        Learn SEO strategies, technical optimization techniques, and digital marketing insights from SEO consultant Param Jani.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl p-6 shadow-md hover:shadow-xl transition"
          >
            <span className="text-sm text-blue-600 font-semibold">
              {blog.category}
            </span>

            <h3 className="text-lg font-semibold mt-2 mb-3 text-gray-900">
              {blog.title}
            </h3>

            <p className="text-gray-600 mb-4">
              {blog.description}
            </p>

            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm">
                {blog.date}
              </span>

              <Link
                href={`/blogs/${blog.slug}`}
                className="text-blue-600 font-semibold hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

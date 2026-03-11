import Link from "next/link";

interface Blog {
  id: number;
  title: string;
  description: string;
  slug: string;
  date: string;
  category: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "How to Rank a Website on Google in 2026",
    description:
      "Learn the latest SEO strategies to rank your website higher on Google and increase organic traffic.",
    slug: "rank-website-on-google-2026",
    date: "March 2026",
    category: "SEO Guide",
  },
  {
    id: 2,
    title: "Complete Technical SEO Checklist for Developers",
    description:
      "A step-by-step technical SEO checklist to improve website speed, crawlability, and indexing.",
    slug: "technical-seo-checklist",
    date: "March 2026",
    category: "Technical SEO",
  },
  {
    id: 3,
    title: "Keyword Research Guide for Beginners",
    description:
      "Learn how to find high-traffic keywords and build a powerful SEO strategy.",
    slug: "keyword-research-guide",
    date: "March 2026",
    category: "SEO Strategy",
  },
];

export default function Blogs() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-4">
          Latest SEO Blogs
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Learn SEO strategies, technical optimization techniques, and digital
          marketing insights from SEO consultant Param Jani.
        </p>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
            >
              <span className="text-sm text-blue-600 font-semibold">
                {blog.category}
              </span>

              <h3 className="text-xl font-semibold mt-2 mb-3">
                {blog.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                {blog.description}
              </p>

              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">
                  {blog.date}
                </span>

                <Link
                  href={`/blog/${blog.slug}`}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

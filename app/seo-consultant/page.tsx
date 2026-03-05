export const metadata = {
  title: "SEO Consultant | SEO Specialist Services | Hire SEO Expert",
  description:
    "Professional SEO consultant helping businesses rank higher on Google, increase organic traffic, and grow with proven SEO strategies.",
};

export default function SeoConsultant() {

  const schema = {
    "@context": "https://schema.org",
    "@graph": [

      {
        "@type": "Person",
        "name": "SEO Consultant",
        "jobTitle": "SEO Specialist",
        "description": "Professional SEO consultant helping businesses grow with organic search.",
        "url": "https://yourwebsite.com",
        "sameAs": [
          "https://www.linkedin.com",
          "https://twitter.com"
        ]
      },

      {
        "@type": "Service",
        "name": "SEO Consulting Services",
        "provider": {
          "@type": "Person",
          "name": "SEO Consultant"
        },
        "areaServed": "Worldwide",
        "description":
          "SEO consulting services including technical SEO, keyword research, on-page optimization and link building."
      },

      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does SEO take to show results?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most websites start seeing noticeable SEO improvements within 3 to 6 months depending on competition."
            }
          },
          {
            "@type": "Question",
            "name": "Is SEO better than paid ads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO generates long term organic traffic while paid ads stop bringing traffic once advertising budgets stop."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide SEO reports?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Monthly SEO reports include keyword rankings, traffic insights, and technical improvements."
            }
          }
        ]
      }

    ]
  };

  return (
    <main className="max-w-4xl mx-auto p-6 text-gray-200">

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <h1 className="text-4xl font-extrabold mb-6 text-white">
        Professional SEO Consultant & SEO Specialist Services
      </h1>

      <p className="text-lg font-semibold leading-relaxed">
        I help businesses improve Google rankings, increase organic traffic,
        and generate more leads through strategic search engine optimization.
      </p>

      {/* INTERNAL SEO LINKS */}

      <h2 className="text-2xl font-bold mt-10 text-white">
        Core SEO Services
      </h2>

      <ul className="mt-4 list-disc pl-6 space-y-2 font-semibold">

        <li>
          <a href="/seo-audit" className="text-blue-400 hover:underline">
            SEO Audit
          </a>{" "}
          – Complete website SEO analysis
        </li>

        <li>
          <a href="/technical-seo" className="text-blue-400 hover:underline">
            Technical SEO
          </a>{" "}
          – Improve site speed, crawlability and indexing
        </li>

        <li>
          <a href="/keyword-research" className="text-blue-400 hover:underline">
            Keyword Research
          </a>{" "}
          – Find profitable search terms
        </li>

        <li>
          <a href="/seo-strategy" className="text-blue-400 hover:underline">
            SEO Strategy
          </a>{" "}
          – Long term ranking growth plan
        </li>

      </ul>

      {/* SEO PROCESS */}

      <h2 className="text-2xl font-bold mt-10 text-white">
        My SEO Process
      </h2>

      <ol className="mt-4 list-decimal pl-6 space-y-2 font-semibold">
        <li>Website SEO Audit</li>
        <li>Competitor Analysis</li>
        <li>Keyword Research</li>
        <li>On Page Optimization</li>
        <li>Technical SEO Improvements</li>
        <li>Content Optimization</li>
        <li>Link Building</li>
        <li>Performance Tracking</li>
      </ol>

      {/* BLOG SECTION */}

      <h2 className="text-2xl font-bold mt-10 text-white">
        SEO Guides & Resources
      </h2>

      <p className="mt-2 font-medium">
        Learn SEO with these helpful guides and tutorials.
      </p>

      <ul className="mt-4 list-disc pl-6 space-y-2 font-semibold">

        <li>
          <a href="/blog/rank-on-google-2025" className="text-blue-400 hover:underline">
            How to Rank on Google in 2025
          </a>
        </li>

        <li>
          <a href="/blog/seo-checklist-small-business" className="text-blue-400 hover:underline">
            SEO Checklist for Small Businesses
          </a>
        </li>

        <li>
          <a href="/blog/technical-seo-guide" className="text-blue-400 hover:underline">
            Complete Technical SEO Guide
          </a>
        </li>

        <li>
          <a href="/blog/keyword-research-guide" className="text-blue-400 hover:underline">
            Keyword Research Guide for Beginners
          </a>
        </li>

      </ul>

      {/* CTA */}

      <p className="mt-8 font-semibold text-white text-lg">
        Talk directly with an SEO expert and get a personalized strategy.
      </p>

      <div className="mt-6 flex flex-col sm:flex-row gap-4">

        <a
          href="/#contact"
          className="px-7 py-3 bg-primary text-primary-foreground rounded-lg font-bold text-center"
        >
          Get Free SEO Consultation
        </a>

        <a
          href="tel:+917862005679"
          className="px-7 py-3 bg-green-600 text-white rounded-lg font-bold text-center"
        >
          📞 Call Now
        </a>

        <a
          href="https://wa.me/917862005679?text=Hello%20I%20need%20SEO%20services"
          target="_blank"
          className="px-7 py-3 bg-[#25D366] text-white rounded-lg font-bold text-center"
        >
          💬 Chat on WhatsApp
        </a>

      </div>

      {/* FLOATING WHATSAPP */}

      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        💬
      </a>

    </main>
  );
}

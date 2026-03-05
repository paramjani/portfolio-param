export const metadata = {
  title: "SEO Consultant | SEO Specialist Services | SEO Expert",
  description:
    "Professional SEO consultant services to help businesses rank higher on Google, increase organic traffic, and improve search visibility with proven SEO strategies.",
};

export default function SeoConsultant() {
  return (
    <main className="max-w-4xl mx-auto p-6 text-gray-200">

      <h1 className="text-4xl font-extrabold mb-6 text-white">
        Professional SEO Consultant & SEO Specialist Services
      </h1>

      <p className="text-lg font-semibold leading-relaxed">
        I am an experienced <strong className="text-white">SEO consultant and SEO specialist</strong> dedicated to helping businesses improve their Google rankings,
        increase organic traffic, and achieve sustainable long-term growth. My SEO
        strategies are data-driven, transparent, and focused on delivering measurable
        results that improve online visibility and attract high-quality customers.
      </p>

      <h2 className="text-2xl font-bold mt-8 text-white">
        Why Hire a Professional SEO Consultant?
      </h2>

      <p className="font-medium mt-3 leading-relaxed">
        In today’s competitive digital marketplace, search engine optimization is
        essential for business success. Without proper SEO, even great websites
        struggle to reach potential customers. As an SEO specialist, I provide
        strategic optimization that helps businesses rank higher in search results,
        increase targeted traffic, and convert visitors into customers.
      </p>

      <ul className="mt-5 list-disc pl-6 space-y-2 font-semibold">
        <li>
          <strong className="text-white">Advanced keyword research</strong> to target
          high-value search terms with strong ranking potential
        </li>
        <li>
          <strong className="text-white">On-page SEO optimization</strong> to improve
          search engine visibility and page relevance
        </li>
        <li>
          <strong className="text-white">Technical SEO audits</strong> to enhance site
          speed, structure, and performance
        </li>
        <li>
          <strong className="text-white">Content optimization</strong> designed for
          better rankings and user engagement
        </li>
        <li>
          <strong className="text-white">Google ranking strategies</strong> focused on
          sustainable long-term organic growth
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 text-white">
        SEO Services & Transparent Pricing
      </h2>

      <p className="mt-3 font-medium">
        I offer flexible SEO service packages designed to support businesses at
        different stages of growth.
      </p>

      <ul className="mt-5 list-disc pl-6 space-y-4 font-semibold">
        <li>
          <strong className="text-white">
            Basic SEO – ₹3,000 to ₹7,000 / month
          </strong>
          <br />
          Ideal for small websites and local businesses that want to establish
          their online presence and start ranking on Google.
        </li>

        <li>
          <strong className="text-white">
            Standard SEO – ₹7,000 to ₹15,000 / month
          </strong>
          <br />
          Best for growing businesses aiming to improve search rankings,
          increase organic traffic, and generate consistent leads.
        </li>

        <li>
          <strong className="text-white">
            Premium SEO – ₹15,000+ / month
          </strong>
          <br />
          Advanced SEO strategy including competitor analysis, technical
          optimization, and aggressive growth planning for maximum results.
        </li>
      </ul>

      <p className="mt-6 font-medium leading-relaxed">
        Every business is unique, so pricing may vary depending on the project
        scope, industry competition, and business goals. My focus is always on
        delivering measurable SEO results that drive long-term traffic and
        revenue growth.
      </p>

      <p className="mt-6 font-semibold text-white">
        Talk directly with an SEO expert and get a personalized strategy for your business.
      </p>

      {/* CTA Buttons */}

      <div className="mt-8 flex flex-col sm:flex-row gap-4">

        {/* Consultation Button */}
        <a
          href="/#contact"
          className="px-7 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:opacity-90 transition text-center"
        >
          Get Free SEO Consultation
        </a>

        {/* Call Button */}
        <a
          href="tel:+917862005679"
          className="px-7 py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition text-center"
        >
          📞 Call Now
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/917862005679?text=Hello%20I%20am%20interested%20in%20your%20SEO%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-3 bg-[#25D366] text-white rounded-lg font-bold hover:bg-[#1ebe5d] transition text-center"
        >
          💬 Chat on WhatsApp
        </a>

      </div>

    </main>
  );
}

export const metadata = {
  title: "SEO Consultant | SEO Specialist Services | SEO Expert",
  description:
    "Professional SEO consultant services to help businesses rank higher on Google, increase organic traffic, and improve search visibility. SEO strategy and optimization.",
};

export default function SeoConsultant() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">
        SEO Consultant & SEO Specialist Services
      </h1>

      <p className="text-lg text-gray-700">
        I am a professional SEO consultant and SEO specialist helping businesses
        improve their Google rankings and grow organic traffic. My SEO services
        focus on data-driven strategies, keyword research, on-page optimization,
        and technical SEO improvements that drive real results.
      </p>

      <h2 className="text-2xl font-semibold mt-6">
        Why Hire an SEO Consultant?
      </h2>
      <p className="text-gray-700">
        Search engine optimization is essential for online visibility. Without
        SEO, your website may struggle to reach potential customers. I help
        businesses optimize their websites so they can rank higher in search
        results and attract quality traffic that converts.
      </p>

      <ul className="mt-4 list-disc pl-6 text-gray-700">
        <li>Keyword research and SEO strategy</li>
        <li>On-page SEO optimization</li>
        <li>Technical SEO audits and fixes</li>
        <li>Content optimization for search engines</li>
        <li>Google ranking improvement strategies</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">
        SEO Services & Charges
      </h2>

      <ul className="mt-4 list-disc pl-6 text-gray-700">
        <li>
          <strong>Basic SEO:</strong> ₹3,000 - ₹7,000 / month  
          <br />
          Ideal for small websites and local businesses.
        </li>
        <li>
          <strong>Standard SEO:</strong> ₹7,000 - ₹15,000 / month  
          <br />
          Best for growing businesses that need improved search visibility.
        </li>
        <li>
          <strong>Premium SEO:</strong> ₹15,000+ / month  
          <br />
          Advanced SEO strategy, competitor analysis, and performance optimization.
        </li>
      </ul>

      <p className="text-gray-700 mt-4">
        Pricing depends on project scope and business requirements. Contact me
        for a customized SEO proposal tailored to your goals.
      </p>

      <div className="mt-6">
        <a
          href="/#contact"
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg"
        >
          Contact for SEO Consultation
        </a>
      </div>
    </main>
  );
}

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-background">

      <Navbar />

      <main className="container mx-auto px-6 py-20 text-white">

        <h1 className="text-4xl font-bold mb-6">
          Blog Title
        </h1>

        <p className="text-gray-400 mb-10">
          Written by Param Jani • SEO Consultant
        </p>

        <article className="prose prose-invert max-w-none">

          <p>
            This is where your blog content will go.
            Write detailed SEO blogs here to rank on Google.
          </p>

          <h2>Why SEO Matters</h2>

          <p>
            Search engine optimization helps websites increase
            organic traffic and improve visibility.
          </p>

        </article>

      </main>

      <Footer />

    </div>
  );
}

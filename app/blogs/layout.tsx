import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />

      <main className="container mx-auto px-6 py-20">
        {children}
      </main>

      <Footer />
    </div>
  );
}

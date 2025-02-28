import Hero from "@/components/Hero";
import Newest from "@/components/Newest";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero  />
      <Newest />
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

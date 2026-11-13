import Hero from "@/components/hero";
import Performance from "@/components/performance";
import Brands from "@/components/brands";
import Expertise from "@/components/expertise";
import Timeline from "@/components/timeline";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <Hero />
      <Performance />
      <Brands />
      <Expertise />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  );
}

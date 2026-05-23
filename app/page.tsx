import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { InternalWork } from "@/components/sections/internal-work";
import { Portfolio } from "@/components/sections/portfolio";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <InternalWork />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

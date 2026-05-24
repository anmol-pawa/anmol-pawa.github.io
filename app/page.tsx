import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { InternalWork } from "@/components/sections/internal-work";
import { Portfolio } from "@/components/sections/portfolio";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

/**
 * Single-page composition. Order is intentional — hero hooks, then proof
 * (about → experience → production), then portfolio (the centerpiece), then
 * the toolchain (skills), then contact.
 */
export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative min-h-screen overflow-hidden">
        <Hero />
        <About />
        <Experience />
        <InternalWork />
        <Portfolio />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

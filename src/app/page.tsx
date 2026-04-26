import { Nav } from "@/components/nav";
import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Testimonials } from "@/components/sections/testimonials";
import { About } from "@/components/sections/about";
import { Academic } from "@/components/sections/academic";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Experience />
      <Projects />
      <Testimonials />
      <About />
      <Academic />
      <Contact />
      <Footer />
    </main>
  );
}

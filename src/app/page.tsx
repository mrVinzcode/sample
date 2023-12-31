import Testimonials from "@/components/Testimonials";
import Menu from "@/components/Menu";
import Services from "@/components/Services";
import Feature from "@/components/Feature";
import Hero from "@/components/hero";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <Services />
      <Menu />
      <Testimonials />
      <Contact />
    </main>
  );
}

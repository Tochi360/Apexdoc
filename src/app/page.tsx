import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { OpeningStatement } from "@/components/sections/OpeningStatement";
import { Services } from "@/components/sections/Services";
import { Method } from "@/components/sections/Method";
import { Construction } from "@/components/sections/Construction";
import { WhyApex } from "@/components/sections/WhyApex";
import { Testimonial } from "@/components/sections/Testimonial";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <OpeningStatement />
        <Services />
        <Method />
        <Construction />
        <WhyApex />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

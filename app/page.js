import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import Why from "@/components/Why";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Reach from "@/components/Reach";
import Footer from "@/components/Footer";
import ScrollFX from "@/components/ScrollFX";

export default function Home() {
  return (
    <>
      <div className="bg-grid" aria-hidden="true"></div>
      <div className="bg-orb bg-orb-1" aria-hidden="true"></div>
      <div className="bg-orb bg-orb-2" aria-hidden="true"></div>

      <Nav />

      <main id="top">
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Industries />
        <Process />
        <Why />
        <CaseStudies />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Reach />
      </main>

      <Footer />
      <ScrollFX />
    </>
  );
}

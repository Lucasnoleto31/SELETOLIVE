import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Proof } from "@/components/sections/Proof";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Proof />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

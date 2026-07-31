import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/*
          Phase 2 adds: About, Skills, Experience, Testimonials, Contact
          Phase 3 adds: Projects (#projects)
          Phase 4 adds: Blog (#blog)
        */}
      </main>
      <Footer />
    </>
  );
}

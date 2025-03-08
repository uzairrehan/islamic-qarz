import Hero from "@/components/Hero";
import AllCards from "@/components/AllCards";
import HowWorks from "@/components/HowWorks";
import FAQs from "@/components/FAQs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AllCards />
      <HowWorks />
      <FAQs />
      <Footer />

    </>
  );
}

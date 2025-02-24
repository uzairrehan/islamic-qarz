import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AllCards from "@/components/AllCards";
import HowWorks from "@/components/HowWorks";
import Footer from "@/components/Footer";
import FAQs from "@/components/FAQs";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AllCards/>  
      <HowWorks/>      
      <FAQs/>
      <Footer/>

    </>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AllCards from "@/components/AllCards";
import HowWorks from "@/components/HowWorks";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AllCards/>  
      <HowWorks/>      
    </>
  );
}

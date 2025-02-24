import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Card from "@/components/Card";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="flex gap-5 absolute ">
        <Card name={"Wedding Loan"} link={"/explore/wedding-loan"} desc={""} img={"/wedding.jpg"} />
        <Card name={"Business Loan"} link={"/explore/business-loan"} desc={""} img={"/business.jpg"} />
        <Card name={"Home Loan"} link={"/explore/home-loan"} desc={""} img={"/construction.jpeg"} />
        <Card name={"Education Loan"} link={"/explore/education-loan"} desc={""} img={"/education.jpg"} />
      </div>
    </>
  );
}

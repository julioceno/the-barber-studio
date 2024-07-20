import { Address } from "@/components/Address";
import { Course } from "@/components/Course";
import { Footer } from "@/components/Footer";
import { InfosBarber } from "@/components/InfosBarber";
import { Main } from "@/components/Main";
import { OurServices } from "@/components/OurServices";
import { ServiceQuality } from "@/components/QualityService";
import { Barlow } from "next/font/google";

const barlow = Barlow({ subsets: ["latin"], weight: ['400', "500", "600", "700", "800", "900"] });

export default function Home() {
  return (
    <div className="bg-black w-full h-full">
      <div className={`bg-[#F8F5EF] h-full max-w-[2000px] mx-auto ${barlow.className}`}>
        <header>
          <Main />
        </header>
        <main>
          <InfosBarber />
          <ServiceQuality />
          <OurServices />
          <Course />
          <Address />
        </main>
        <Footer />
      </div>
    </div>
  );
}

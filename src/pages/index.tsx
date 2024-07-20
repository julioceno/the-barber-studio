import { InfosBarber } from "@/components/InfosBarber";
import { Main } from "@/components/Main";
import { OurServices } from "@/components/OurServices";
import { ServiceQuality } from "@/components/QualityService";
import { Barlow } from "next/font/google";

const barlow = Barlow({ subsets: ["latin"], weight: ['400', "900"] });

export default function Home() {
  return (
    <div className={`bg-[#F8F5EF] h-full max-w-[2000px] mx-auto ${barlow.className} pb-96`}>
      <Main />
      <InfosBarber />
      <ServiceQuality />
      <OurServices />
    </div>
  );
}

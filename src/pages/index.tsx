import { Adjacent } from "@/components/Adjacent";
import { Adjacent2 } from "@/components/Adjacent-2";
import { Main } from "@/components/Main";
import { Barlow } from "next/font/google";

const barlow = Barlow({ subsets: ["latin"], weight: ['400', "900"] });

// 
export default function Home() {
  return (
    <div className={`bg-[#F8F5EF] h-full max-w-[2000px] mx-auto ${barlow.className} pb-96`}>
      <Main />
      <Adjacent />
      <Adjacent2 />
    </div>
  );
}

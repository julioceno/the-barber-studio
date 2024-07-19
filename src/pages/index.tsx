import { Adjacent } from "@/components/Adjacent";
import { Main } from "@/components/Main";
import { Barlow } from "next/font/google";

const barlow = Barlow({ subsets: ["latin"], weight: ['400', "900"] });

// 
export default function Home() {
  return (
    <div className={`bg-[#F8F5EF] h-screen max-w-[2000px] mx-auto${barlow.className}`}>
      <Main />
      <Adjacent />
    </div>
  );
}

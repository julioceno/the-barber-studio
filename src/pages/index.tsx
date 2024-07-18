import { Main } from "@/components/Main";
import { Barlow } from "next/font/google";

const barlow = Barlow({ subsets: ["latin"], weight: ['400'] });

export default function Home() {
  return (
    <div>
      <Main />
    </div>
  );
}

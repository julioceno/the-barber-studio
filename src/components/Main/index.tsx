import { Work_Sans } from "next/font/google";
import Image from "next/image";
import { Button } from "./Button";

const work_Sans = Work_Sans({ subsets: ["latin"], weight: ['400'] });

export function Main() {

  return (
    <div className="text-center">
      <div className="h-80 bp-330px:h-72 tablet:h-80 lg:h-96 relative">
        <Image 
          src='/main-image.png'
          layout="fill"
          objectFit="cover"
          alt="Main image"
          objectPosition="top center" 
        />
        <div className="absolute h-full w-full gap-2 bp-330px:gap-3 text-white flex flex-col justify-center items-center px-3">
          <h5 className="font-black text-3xl xs:text-4xl md:text-5xl 2xl:text-6xl 2xl:w-6/12 " >TRADIÇÃO E ELEGÂNCIA EM CADA CORTE.</h5>
          <p className={`text-sm xs:text-base md:text-xl  ${work_Sans.className}`}>Aqui é o lugar onde os sonhos da sua imagem se tornam realidade</p>

          <div className="flex flex-col bp-330px:flex-row gap-3 bp-330px:gap-5 sm:mt-5">
            <Button className="font-extrabold text-black bg-[#DEC7A6]">
              Faça um agendamento
            </Button>
            <Button className="font-bold border-2 border-white">
              conheça nosso curso
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
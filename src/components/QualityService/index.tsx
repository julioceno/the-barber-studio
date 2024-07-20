import Image from "next/image";
import { useEffect, useState } from "react";
import { ItemInfo } from "./components/ItemInfo";


export function ServiceQuality() {
  const [year, setYear] = useState<string>('');

  useEffect(() => {
    const year2018 =  new Date('1/1/2018').getFullYear();
    const currentYear = new Date().getFullYear()
    const value = currentYear - year2018

    setYear(value.toString());
  }, []);

  return (
    <section className="flex flex-col justify-between gap-8 md:gap-1 md:flex-row-reverse mx-5 lg:mx-32 2xl:mx-36 mt-10 md:mt-32">
        <div className="relative w-full h-36 bp-330px:h-48 md:h-[28rem] md:max-w-[25rem] 2xl:h-[40rem] 2xl:max-w-[40rem] rounded-md md:rounded-none overflow-hidden">
          <Image 
            src='/man-cutting-hair-secondary.png'
            layout="fill"
            objectFit="cover"
            alt="Homem cortando cabelo"
            quality={90}
            className="rounded-md md:rounded-none"
          />
        </div>
        <div className="flex flex-col text-center lg:text-start gap-3 2xl:self-center md:w-6/12 self-start items-center lg:items-start">
          <h5 className="font-black text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl md:w-8/12 md:tracking-wide lg:tracking-widest" >SERVIÇOS DE QUALIDADE</h5>
          <p className="leading-6  text-sm md:text-md lg:text-lg md:w-9/12 lg:mt-5">
            Experimente o melhor em cuidados pessoais na nossa barbearia! Desde cortes de cabelo modernos até barboterapia relaxante e tratamentos de pele revitalizantes, oferecemos um ambiente acolhedor e profissionais dedicados para garantir que você saia renovado e satisfeito. Visite-nos e descubra a diferença!
          </p>

          <div className="flex gap-5 sm:gap-8 md:gap-2 md:mt-5">
            <ItemInfo 
              value="99"
              complement="%"
              about="SATISFAÇÃO DOS CLIENTES"
            />
            <ItemInfo 
              value={year}
              complement="+"
              about="ANOS DE EXPERIÊNCIA"
            />
          </div>
        </div>
    </section>
  )
}
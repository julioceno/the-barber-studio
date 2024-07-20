import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Work_Sans } from "next/font/google";
import Image from "next/image";
import { Button } from "./components/Button";

const work_Sans = Work_Sans({ subsets: ["latin"], weight: ['400'] });
export function Address() {

  return (
    <section className="text-center">
    <div className="h-[35rem] relative">
      <Image 
        src='/image.png'
        layout="fill"
        objectFit="cover"
        alt="Main image"
        objectPosition="top center" 
      />
        <div className="absolute h-full w-full gap-2 bp-330px:gap-3 text-white flex flex-col justify-center items-center px-3">
          <h5 className="font-extrabold text-3xl xs:text-4xl md:text-5xl 2xl:text-6xl 2xl:w-6/12 " >VENHA FAZER UMA VISITA</h5>
          <p className={`text-sm xs:text-base md:text-xl ${work_Sans.className}`}>A exclusividade que você merece, você encontra só aqui!</p>

          <div className="flex flex-col gap-3">
            <Button 
              icon={faWhatsapp}
              title="CLIQUE AQUI PARA ENVIAR UMA MENSAGEM"
              subject="Nossa equipe vai esta pronta para tirar suas dúvidas"
            />
            {/** TODO: alterar icon abaixo*/}
            <Button 
              icon={faWhatsapp} 
              title="CLIQUE AQUI PARA FAZER UM AGENDAMENTO"
              subject="Faça o agendamento do conforto de sua casa"
            />
          </div>
        </div>
    </div>
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14705.901907636833!2d-43.7796419!3d-22.8588876!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bf98b29a46e75%3A0xdb30a2072d887986!2sThe%20Barber%20Studio!5e0!3m2!1spt-BR!2sbr!4v1721485177247!5m2!1spt-BR!2sbr" 
      className="w-full h-96"
      loading="lazy"
    ></iframe>
  </section>
  )
}
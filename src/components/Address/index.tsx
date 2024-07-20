import { SocialMediaEnum } from '@/utils/contacts';
import { motion } from 'framer-motion';
import { Work_Sans } from "next/font/google";
import Image from "next/image";
import { FaClock, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SlMustache } from "react-icons/sl";
import { Item } from "../Item";
import { Button } from "./components/Button";

const work_Sans = Work_Sans({ subsets: ["latin"], weight: ['400'] });
export function Address() {

  return (
    <section className="text-center">
      <div className="h-[55rem] bp-330px:h-[45rem] bp-400px:h-[40rem] relative">
        <Image 
          src='/image.png'
          layout="fill"
          objectFit="cover"
          alt="Main image"
          objectPosition="top center" 
        />
          <div className="absolute w-full gap-2 bp-330px:gap-3 lg:gap-6 text-white flex flex-col top-9 lg:top-1/4 items-center px-3 2xl:px-20 lg:items-start">
            <h5 className="font-extrabold text-3xl xs:text-4xl md:text-5xl 2xl:text-6xl 2xl:w-6/12 lg:text-start" >VENHA FAZER UMA VISITA</h5>
            <p className={`text-sm xs:text-base md:text-xl ${work_Sans.className}`}>A exclusividade que você merece, você encontra só aqui!</p>

            <div className="flex flex-col gap-3 lg:mt-10 2lg:mt-20">
              <Button 
                icon={FaWhatsapp}
                title="CLIQUE AQUI PARA ENVIAR UMA MENSAGEM"
                subject="Nossa equipe vai esta pronta para tirar suas dúvidas"
                href={SocialMediaEnum.WHATSAPP}
              />
              <Button 
                icon={SlMustache} 
                title="CLIQUE AQUI PARA FAZER UM AGENDAMENTO"
                subject="Faça um agendamento do conforto de sua casa"
                href={SocialMediaEnum.APPBARBER}
              />
            </div>
          </div>
          <motion.div 
            className="grid grid-cols-1 bp-480px:grid-cols-2 bg-white py-12 w-10/12 md:w-8/12 lg:w-6/12 absolute bottom-[-1.5rem] left-1/2 lg:left-3/4 lg:-ml-10 transform -translate-x-1/2 shadow-2xl gap-5 justify-center items-center"
            initial={{ opacity: 0, y: 50, x: '-50%'  }}
            whileInView={{ opacity: 1, y: 0, x: '-50%'  }}
            transition={{ duration: 0.5 }}
          >
            <Item
            icon={FaLocationDot}
            title="Endereço"
          >
            <Item.Description className="w-2/3"><span className="text-sm lg:text-base">Estrada Teixeiras , 338 - Rua do Febre Amarela - 23820275 Vista Alegre - Itaguaí/RJ</span></Item.Description>
          </Item>
            <Item
              icon={FaClock}
              title="Horários"
            >
              <Item.Description><span className="text-base lg:text-lg"> Segunda a sabado 08 às 18h</span></Item.Description>
            </Item>   
          </motion.div>
      </div>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14705.901907636833!2d-43.7796419!3d-22.8588876!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bf98b29a46e75%3A0xdb30a2072d887986!2sThe%20Barber%20Studio!5e0!3m2!1spt-BR!2sbr!4v1721485177247!5m2!1spt-BR!2sbr" 
        className="w-full h-96"
        loading="lazy"
      ></iframe>
  </section>
  )
}
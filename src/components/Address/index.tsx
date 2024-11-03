import { SocialMediaEnum } from '@/utils/contacts';
import { motion } from 'framer-motion';
import { Work_Sans } from "next/font/google";
import Image from "next/image";
import { FaClock, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SlMustache } from "react-icons/sl";
import { InfoItem } from '../InfoItem';
import { Button } from "./components/Button";
import { modalStore } from '../Modal/store';

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
                onClick={modalStore.handleOpen}
              />
            </div>
          </div>
          <motion.div 
            className="grid grid-cols-1 bp-480px:grid-cols-2 bg-white py-12 w-10/12 md:w-8/12 lg:w-6/12 absolute bottom-[-1.5rem] left-1/2 lg:left-3/4 lg:-ml-10 transform -translate-x-1/2 shadow-2xl gap-5 justify-center items-center"
            initial={{ opacity: 0, y: 50, x: '-50%'  }}
            whileInView={{ opacity: 1, y: 0, x: '-50%'  }}
            transition={{ duration: 0.5 }}
          >
            <InfoItem
            icon={FaLocationDot}
            title="Onde Estamos"
          >
            <InfoItem.Description className="w-2/3"><span className="text-sm lg:text-base">A franquia está localizada na Avenida Itaguaí e Estrada do Teixeira</span></InfoItem.Description>
          </InfoItem>
            <InfoItem
              icon={FaClock}
              title="Horários"
            >
              <InfoItem.Description className="w-6/12"><span className="text-sm lg:text-base">Terça a Sexta 09 às 19h e Sábado de 9 às 17</span></InfoItem.Description>
            </InfoItem>   
          </motion.div>
      </div>
      <iframe 
        src="https://www.google.com/maps/d/u/1/embed?mid=1SX5yz4CwOt0XYY-saqOh-3nZuH2eY8U&ehbc=2E312F" 
        className="w-full h-96 mt-[-3.5rem]"
        loading="lazy"
      ></iframe>
  </section>
  )
}
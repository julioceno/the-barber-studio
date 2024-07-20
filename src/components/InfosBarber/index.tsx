import Image from "next/image";
import { FaClock, FaGraduationCap, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { InfoItem } from "../InfoItem";


export function InfosBarber() {

  return (
    <section className="bg-white mt-10 md:mt-32  mx-5 lg:mx-32 2xl:mx-36 gap-7 sm:gap-2 py-10 px-5 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 place-items-center items-center md:items-start lg:items-center">
     <Image 
        src='/logo.png'
        width={250}
        height={10}
        alt="Main image"
        className="row-span-2 order-1 sm:order-2 md:order-3"
      />
      
      <InfoItem
        icon={FaGraduationCap}
        title="Cursos"
        className="order-2  sm:order-1 md:order-1"
      >
        <InfoItem.Description className="w-2/3">Formação para barbeiro de todas as idades</InfoItem.Description>
      </InfoItem>
    
      <InfoItem
        icon={FaWhatsapp}
        title="Whatsapp"
        className="order-3  sm:order-2 md:order-2"
      >
        <InfoItem.Description className="">21 99217-5804</InfoItem.Description>
      </InfoItem>
    
      <InfoItem
        icon={FaLocationDot}
        title="Endereço"
        className="order-4  sm:order-4 md:order-4"
      >
        <InfoItem.Description className="w-2/3 md:w-full text-sm">Estrada Teixeiras , 338 - Rua do Febre Amarela - 23820275 Vista Alegre - Itaguaí/RJ</InfoItem.Description>
      </InfoItem>
      <InfoItem
        icon={FaClock}
        title="Horários"
        className="order-5 sm:order-5 md:order-5"
      >
        <InfoItem.Description className="w-2/3">Terça a Sexta 09 às 19h e Sábado de 9 à</InfoItem.Description>
      </InfoItem>
    </section>
  )
}
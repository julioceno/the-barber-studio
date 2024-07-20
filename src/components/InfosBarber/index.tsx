import Image from "next/image";
import { FaClock, FaGraduationCap, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Item } from "./components/Item";


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
      
      <Item
        icon={FaGraduationCap}
        title="Cursos"
        className="order-2  sm:order-1 md:order-1"
      >
        <Item.Description className="w-2/3">Formação para barbeiro de todas as idades</Item.Description>
      </Item>
    
      <Item
        icon={FaWhatsapp}
        title="Whatsapp"
        className="order-3  sm:order-2 md:order-2"
      >
        <Item.Description className="">+55 21 99217-5804</Item.Description>
      </Item>
    
      <Item
        icon={FaLocationDot}
        title="Endereço"
        className="order-4  sm:order-4 md:order-4"
      >
        <Item.Description className="w-2/3 md:w-full text-sm">Estrada Teixeiras , 338 - Rua do Febre Amarela - 23820275 Vista Alegre - Itaguaí/RJ</Item.Description>
      </Item>
      <Item
        icon={FaClock}
        title="Horários"
        className="order-5 sm:order-5 md:order-5"
      >
        <Item.Description className="w-2/3">Terça a Sábado 09 às 19h</Item.Description>
      </Item>
    </section>
  )
}
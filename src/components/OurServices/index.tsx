import { Work_Sans } from "next/font/google";
import { ItemService } from "./ItemService";

const list = [
  {
    imageSrc: "/comb-and-hair-cutting-scissors.png",
    title: "Cortes adultos",
    description: "Venha ter um corte de cabelo de qualidade, acompanhad  o de uma boa conversa"
  },
  {
    imageSrc: "/hair-brushing-comb.png",
    title: "Corte infantil",
    description: "Nossos profissionais são 100% preparados para cuidar e renovar a aparência do seu filho"
  },
  {
    imageSrc: "/hair-cutting-machine.png",
    title: "Equipamento de qualidade",
    description: "Nossos equipamentos são de ótima qualidade, sempre em perfeito estado para atender nossos clientes"
  },
  {
    imageSrc: "/beard.png",
    title: "Outros serviços",
    description: "Prestamos serviços desde barboterapia até tratamento de pele para realçar o seu estilo"
  },
]

const work_Sans = Work_Sans({ subsets: ["latin"], weight: ['400'] });

export function OurServices() {

  return (
    <section className="mt-20 lg:mt-36 flex flex-col mx-5 lg:mx-32 2xl:mx-64 gap-10 md:gap-24">
      <div className="flex flex-col items-center text-center">
        <h5 className="font-black text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl  md:tracking-wide lg:tracking-widest" >CONHEÇA NOSSOS SERVIÇOS</h5>
        <p className={`leading-6  text-sm md:text-md lg:text-lg lg:mt-5 w-10/12 lg:w-9/12 xl:w-7/12  ${work_Sans.className}`}>
        Na nossa barbearia, oferecemos corte de cabelo, barboterapia e tratamento de pele em um ambiente acolhedor. Nossos profissionais são especializados e utilizam produtos de alta qualidade. Venha relaxar e sair renovado!        </p>
      </div>

      <div className="bg-white  gap-y-10 py-10 px-5 grid grid-cols-1 sm:grid-cols-2 place-items-center items-center md:items-start lg:items-center shadow-2xl">
        {list.map((item, index) => (
           <ItemService
            imageSrc={item.imageSrc}
            title={item.title}
            description={item.description}
            key={index}
         />
        ))}
      </div>
    </section>
  )
}
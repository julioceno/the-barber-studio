import { SocialMediaEnum } from "@/utils/contacts";
import { Work_Sans } from "next/font/google";
import { FaWhatsapp } from "react-icons/fa";
import { Avaliable } from "./components/Avaliable";
import { ItemCourseBenefit } from "./components/ItemCourseBenefit";
import { Stars } from "./components/Stars";

const list = [
  {
    imageSrc: "/course/license.png",
    title: "CURSOS",
    description: "Ganhe um certificado de  conclusão por qualquer um dos treinamentos"
  },
  {
    imageSrc: "/course/educator.png",
    title: "EDUCADORES",
    description: "Nossos educadores tem um vasto conhecimento que vai desde o técnico até a parte de gestão de uma barbearia"
  },
  {
    imageSrc: "/course/reliable.png",
    title: "confiável",
    description: "Já formamos diversos barbeiros que hoje já abriram suas próprias barbearias e tocam seu próprio negócio"
  },
]


const work_Sans = Work_Sans({ subsets: ["latin"], weight: ['400'] });
export function Course() {

  return (
    <section className="mt-20 lg:mt-36 flex flex-col px-5 lg:px-32 2xl:px-64 gap-10 py-10 md:py-20 lg:py-32 bg-white" id="course">
      <div className="flex flex-col items-center text-center">
        <h3 className="font-black text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl  md:tracking-wide lg:tracking-widest" >SE FORME COMO BARBEIRO</h3>
        <p className={`leading-6  text-sm md:text-md lg:text-lg lg:mt-5 w-10/12 lg:w-9/12 xl:w-7/12  ${work_Sans.className}`}>
        Além dos serviços, oferecemos cursos de corte de cabelo, barboterapia e tratamentos de pele. Aprenda com nossos barbeiros experientes e aprimore suas habilidades para se destacar na área. Venha se profissionalizar conosco!</p>
      </div>
      <a
          className="text-center self-center bg-green-500 hover:bg-green-600 duration-300 rounded-md flex justify-center items-center text-white gap-2 px-10 py-2 shadow-green-shadow w-10/12 max-w-72 md:max-w-80 hover:font-bold"
          target="_blank"
          href={SocialMediaEnum.WHATSAPP}
        >
        <FaWhatsapp className="size-6 md:size-7"/>
        <span className="text-sm md:text-base">Escreva uma Mensagem</span>
      </a>

      <div className="flex flex-col md:flex-row gap-5">
        {list.map((item, index) => (
          <ItemCourseBenefit
            imageSrc={item.imageSrc}
            description={item.description}
            title={item.title}
            key={index}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 bp-330px:grid-cols-2 lg:flex gap-5 lg:gap-10 place-items-center lg:justify-center md:mt-20">
        <div className="flex flex-col items-center border-almond border-2 text-center gap-3 md:gap-5 p-10 bp-300px:w-9/12 md:w-8/12 lg:w-7/12 md:py-24 lg:py-32 self-center bp-330px:col-span-2 lg:order-2">
          <Stars />
          <h6 className="text-lg md:text-xl font-bold">O QUE OS NOSSOS CLIENTES DIZEM</h6>
          <p className={`${work_Sans.className} text-sm md:text-base 2xl:mx-10`}>“Ótimo serviço e excelente atendimento. Profissionais de altíssimo nível. Galera é gente boa demais.”</p>
          <span className="text-base md:text-lg font-bold">SAMUEL SALADINO</span>
        </div>
        <Avaliable 
          imageSrc="/avaliables/google.png"
          title="Google"
          size={{
            height: 40,
            width: 40,
          }}
          className="lg:order-1"
        />
        <Avaliable 
          imageSrc="/avaliables/cash-barber.png"
          title="Cash Barber"
          size={{
            height: 70,
            width: 100,
          }}
          className="lg:order-3"
        />
      </div>
  </section>
  )
}
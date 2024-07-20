import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Work_Sans } from "next/font/google";
import { ItemCourseBenefit } from "./components/ItemCourseBenefit";

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
    <section className="mt-20 lg:mt-36 flex flex-col px-5 lg:px-32 2xl:px-64 gap-10 py-10 md:py-20 lg:py-32 bg-white">
      <div className="flex flex-col items-center text-center">
        <h5 className="font-black text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl  md:tracking-wide lg:tracking-widest" >SE FORME COMO BARBEIRO</h5>
        <p className={`leading-6  text-sm md:text-md lg:text-lg lg:mt-5 w-10/12 lg:w-9/12 xl:w-7/12  ${work_Sans.className}`}>
        Além dos serviços, oferecemos cursos de corte de cabelo, barboterapia e tratamentos de pele. Aprenda com nossos barbeiros experientes e aprimore suas habilidades para se destacar na área. Venha se profissionalizar conosco!</p>
      </div>
      <a
          className=" text-center self-center bg-green-500 hover:bg-green-600 duration-300 rounded-md flex justify-center items-center text-white gap-2 px-10 py-2 shadow-green-shadow w-10/12 max-w-72 md:max-w-80"
          target="_blank"
        >
        <FontAwesomeIcon icon={faWhatsapp} className="size-6 md:size-7"/>
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
  </section>
  )
}
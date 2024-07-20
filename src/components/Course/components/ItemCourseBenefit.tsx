import { Work_Sans } from "next/font/google";
import Image from "next/image";

interface ItemProps {
  title: string
  imageSrc: string
  description: string
}

const work_Sans = Work_Sans({ subsets: ["latin"], weight: ['400'] });

// TODO: avaliar a possibilidade desse componente ser o mesmo que foi usado na parte de inofsBarbers
export function ItemCourseBenefit({ title, imageSrc, description }: ItemProps) {

  return (
    <div className="flex flex-col items-center text-center self-center pb-300px:w-10/12 md:w-6/12">
        <Image
          src={imageSrc}
          height={70}
          width={70}
          alt={title}
        />
      <h6 className="font-extrabold text-lg md:text-xl xl:text-2xl" >{title}</h6>
      <div className="border-b-4 border-almond min-w-10 w-1/12 md:w-3/12"/>
      <p className={`w-9/12 md:w-full lg:w-8/12  text-sm ${work_Sans.className}`}>{description}</p>
    </div>
  )
}

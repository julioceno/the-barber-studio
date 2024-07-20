import { Work_Sans } from "next/font/google";
import Image from "next/image";

interface ItemProps {
  title: string
  imageSrc: string
  description: string
}

const work_Sans = Work_Sans({ subsets: ["latin"], weight: ['400'] });

export function ItemService({ title, imageSrc, description }: ItemProps) {

  return (
    <div className="flex flex-col items-center text-center md:w-6/12">
         <Image
          src={imageSrc}
          height={70}
          width={70}
          alt={title}
        />
      <h6 className="font-extrabold text-lg md:text-xl xl:text-2xl" >{title}</h6>
      <p className={`w-9/12 md:w-full ${work_Sans.className}`}>{description}</p>
    </div>
  )
}




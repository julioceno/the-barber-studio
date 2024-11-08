import Image from "next/image";
import { Stars } from "./Stars";


interface Props {
  title: string
  imageSrc: string
  className: string,
  size: { height: number, width: number }
}

export function Avaliable({ imageSrc, title, size, className }: Props) {

  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
        <Image
          src={imageSrc}
          height={size.height}
          width={size.width}
          alt={title}
        />
        <p className="text-xl md:text-2xl lg:text-1xl font-semibold">{title}</p>
        <p className="text-6xl font-bold">5.0</p>
        <Stars />
    </div>
  )
}
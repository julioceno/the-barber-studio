import { Button } from "@/components/Main/Button";
import { SocialMediaEnum } from "@/utils/contacts";
import { Work_Sans } from "next/font/google";

interface Props {
    title: string
    address: string
    link: string
}

const work_Sans = Work_Sans({ subsets: ["latin"], weight: ['400'] });
export function Unit({ title, address, link }: Props) {

    return (
        <div className="flex flex-col flex-1">
          <div className="flex-1 mb-5">
            <h6 className="font-bold text-2xl" >{title}</h6>
            <p className={`text-sm xs:text-base ${work_Sans.className}`}>{address}</p>
          </div>
            <Button 
              className="font-extrabold text-black bg-almond hover:bg-almond-hover" 
              href={link} 
              target="_blank"  
            >
              Agendar
            </Button>
        </div>
    )
}
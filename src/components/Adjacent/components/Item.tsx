import { IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ReactNode } from "react"

interface ItemProps {
  title: string
  icon: IconDefinition
  children: ReactNode
  className?: string
}

interface DescriptionProps {
  className?: string
  children: ReactNode
}

function Item({ icon, title, children, className }: ItemProps) {

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <FontAwesomeIcon icon={icon} className="text-3xl"/>
      <h6 className="font-extrabold text-lg md:text-xl xl:text-2xl" >{title}</h6>
      <div className="border-b-4 border-almond w-10 md:w-14"/>
      {children}
    </div>
  )
}

function Description({ children, className }: DescriptionProps) {
  return (<p className={`font-bold text-center text-sm md:text-base ${className}  `} >{children}</p>)
}

Item.Description = Description;

export { Item }


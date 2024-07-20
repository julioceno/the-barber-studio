import { ReactNode } from "react"
import { IconType } from "react-icons"

interface ItemProps {
  title: string
  icon: IconType
  children: ReactNode
  className?: string
}

interface DescriptionProps {
  className?: string
  children: ReactNode
}

function Item({ icon: Icon, title, children, className }: ItemProps) {

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <Icon className="text-3xl"/>
      <h6 className="font-extrabold text-lg md:text-xl xl:text-2xl" >{title}</h6>
      <div className="border-b-4 border-almond w-10 md:w-14"/>
      {children}
    </div>
  )
}

function Description({ children, className }: DescriptionProps) {
  return (<p className={`font-bold text-center text-sm lg:text-base ${className}  `} >{children}</p>)
}

Item.Description = Description;

export { Item }


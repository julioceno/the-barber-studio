import { IconType } from "react-icons"

interface Props {
  title: string
  icon: IconType
  subject: string
}

export function Button({ icon: Icon, subject, title }: Props) {

  return (
    <button 
      className="px-3 py-1 xs:px-4 xs:py-2 lg:px-5 lg:py-3 md:px-7 xl:py-4 xl:px-10 text-base md:text-xl bp-300px:text-lg flex gap-5 bg-almond/40"
    >
      <div className="p-2 text-black bg-white text-5xl rounded-md">
        <Icon />
      </div>
      <div className="flex flex-col text-white text-start">
        <p className="font-extrabold text-base">{title}</p>
        <span className="text-xs">{subject}</span>
      </div>
    </button>
  )
}
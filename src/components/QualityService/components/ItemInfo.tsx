

interface Props {
  value: string
  about: string;
  complement: string
}

export function ItemInfo({ about, complement, value }: Props) {
  return (
    <div className="flex flex-col gap-1 md:gap-2">
      <p className="font-black text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl">{value} <span className="text-almond">{complement}</span> </p>
      <p className="font-black text-md text-ce lg:w-7/12 ">{about}</p>
    </div>
  )
}
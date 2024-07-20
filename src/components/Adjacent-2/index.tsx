
// TODO: alterar esse nome


// TODO: utilizar o componente Image do nest
export function Adjacent2() {

  return (
    <section className="flex flex-col gap-8 md:gap-1 md:flex-row-reverse mx-5 sm:mx-10 2xl:mx-36 mt-10 md:mt-32">
        <img 
          src='/man-cutting-hair-secondary.png'
          className="w-full h-36 bp-330px:h-48 md:h-[28rem] md:max-w-[400px] 2xl:h-[35rem] 2xl:max-w-[35rem] object-cover rounded-md md:rounded-none"
        />
        <div className="flex flex-col text-center lg:text-start gap-3 lg:items-start 2xl:self-center md:w-6/12 self-start">
          <h5 className="font-black text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl md:w-8/12 md:tracking-wide lg:tracking-widest" >SERVIÇOS DE QUALIDADE</h5>
          <p className="leading-6  text-sm md:text-md lg:text-lg md:w-9/12 lg:mt-5">
            Experimente o melhor em cuidados pessoais na nossa barbearia! Desde cortes de cabelo modernos até barboterapia relaxante e tratamentos de pele revitalizantes, oferecemos um ambiente acolhedor e profissionais dedicados para garantir que você saia renovado e satisfeito. Visite-nos e descubra a diferença!
          </p>

          <div className="flex gap-5 sm:gap-8 md:gap-2 md:mt-5 self-center md:self-start">
            <Item 
              value={99}
              complement="%"
              about="SATISFAÇÃO DOS CLIENTES"
            />
              <Item 
              value={7}
              complement="+"
              about="ANOS DE EXPERIÊNCIA"
            />
          </div>
        </div>
    </section>
  )
}

// TODO: colocar em outro arquivo e melhorar nome

interface Props {
  value: number
  about: string;
  complement: string
}

function Item({ about, complement, value }: Props) {

  return (
    <div className="flex flex-col gap-1 md:gap-2">
      <p className="font-black text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl">{value} <span className="text-almond">{complement}</span> </p>
      <p className="font-black text-md text-ce lg:w-7/12 ">{about}</p>
    </div>
  )
}
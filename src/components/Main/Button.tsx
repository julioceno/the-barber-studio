interface Props extends React.PropsWithChildren {
  className: string
}

export function Button({ className, children, ...rest }: Props) {

  // TODO: adicionar hover nesse
  return (
    <button 
      className={`px-3 py-1 xs:px-4 xs:py-2 lg:px-5 lg:py-3 md:px-7 xl:py-4 xl:px-10 text-base md:text-xl bp-300px:text-lg ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
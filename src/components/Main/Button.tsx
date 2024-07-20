import Link from "next/link";
import { HTMLAttributeAnchorTarget } from "react";

interface Props extends React.PropsWithChildren {
  className: string
  href: string
  target?: HTMLAttributeAnchorTarget | undefined;
}

export function Button({ className, children, href, target, ...rest }: Props) {

  // TODO: adicionar hover nesse
  return (
    <Link 
      className={`px-3 py-1 xs:px-4 xs:py-2 lg:px-5 lg:py-3 md:px-7 xl:py-4 xl:px-10 text-base md:text-xl bp-300px:text-lg ${className} duration-300 hover:-translate-y-1`}
      scroll={false}
      href={href}
      target={target}
      {...rest}
    >
      {children}
    </Link>
  )
}
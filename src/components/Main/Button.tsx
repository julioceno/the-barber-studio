import Link from "next/link";
import { HTMLAttributeAnchorTarget } from "react";

interface PropsLink extends React.PropsWithChildren {
  href: string;
  target?: HTMLAttributeAnchorTarget;
}

interface PropsButton extends React.PropsWithChildren {
  onClick: () => void;
}

type Props = (PropsLink | PropsButton) & {
  className: string;
};

// TODO: remover desse diretorio
export function Button({ className, children, ...rest }: Props) {
  const commonClasses = `px-3 py-1 xs:px-4 xs:py-2 lg:px-5 lg:py-3 md:px-7 xl:py-4 xl:px-10 text-base md:text-xl bp-300px:text-lg ${className} duration-300 hover:-translate-y-1`;

  if ("href" in rest) {
    return (
      <Link
        className={commonClasses}
        href={rest.href}
        target={rest.target}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={commonClasses}
      onClick={rest.onClick}
    >
      {children}
    </button>
  );
}
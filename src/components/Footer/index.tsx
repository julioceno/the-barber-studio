import { ContactLinkProps, contacts } from "@/utils/contacts";
import { useEffect, useState } from "react";


export function Footer() {
  const [year, setYear] = useState<number>();

  useEffect(() => {
    const date = new Date();
    const currentYear = date.getFullYear();

    setYear(currentYear);
  }, []);

  return (
    <footer className="flex flex-col md:flex-row bg-black text-white justify-between  gap-1 px-10 py-2">
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl md:text-3xl text-white font-extrabold">
              The Barber <span className="text-"> Studio </span> 
            </h1>
            <p className="flex text-xs md:text-sm font-light ">
              &copy; Todos os direitos reservados {year}
            </p>
        </div>
          <div className="flex self-center gap-.5">
            {contacts.map(({ ...props}, index) => (
               <ContactLink {...props} key={index} />
            ))}
        </div>
    </footer>
  );
}

function ContactLink({icon: Icon, label, ...rest }: ContactLinkProps) {
  const commonClasses = "hover:bg-almond py-1 px-1 rounded-md group peer";
  const iconClasses = "text-white size-7 group-hover:text-black duration-300";

  return "href" in rest ? (
    <a href={rest.href} target="_blank" className={commonClasses}>
      <Icon className={iconClasses} />
    </a>
  ) : (
    <button onClick={rest.onClick} className={commonClasses}>
      <Icon className={iconClasses} />
    </button>
  );
}
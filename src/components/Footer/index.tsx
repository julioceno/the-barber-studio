import { contacts } from "@/utils/contacts";
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
            <h3 className="text-2xl md:text-3xl text-white font-extrabold">
              The Barber <span className="text-"> Studio </span> 
            </h3>
            <p className="flex text-xs md:text-sm font-light ">
              &copy; Todos os direitos reservados {year}
            </p>
        </div>
          <div className="flex self-center gap-.5">
            {contacts.map(({ href, icon: Icon }, index) => (
              <a
                href={href}
                target="_blank"
                className="hover:bg-almond py-1 px-1 rounded-md group peer"
                key={index}
              >
                <Icon className="text-white size-7 group-hover:text-black duration-300" />
              </a>
            ))}
        </div>
    </footer>
  );
}
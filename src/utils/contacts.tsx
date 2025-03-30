import { IconBaseProps } from "react-icons";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SlMustache } from "react-icons/sl";

export enum SocialMediaEnum {
  INSTAGRAM = "https://www.instagram.com/thebarberstudio_oficial_",
  WHATSAPP = "https://api.whatsapp.com/send?phone=21985170005",
  SCHEDULING_SYSTEM_UNIT_1 = "https://cashbarber.com.br/thebarberstudio",
  SCHEDULING_SYSTEM_UNIT_2 = "https://cashbarber.com.br/thebarberstudio",
  MAP = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14705.901907636833!2d-43.7796419!3d-22.8588876!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bf98b29a46e75%3A0xdb30a2072d887986!2sThe%20Barber%20Studio!5e0!3m2!1spt-BR!2sbr!4v1721485177247!5m2!1spt-BR!2sbr"
}

interface PropsLink {
  href: string;
}

interface PropsButton {
  onClick: () => void;
}

export type ContactLinkProps = (PropsLink | PropsButton) & {
  icon: React.FC<IconBaseProps>;
  label: string;
};

export const contacts: ContactLinkProps[] = [
  {
    icon: FaWhatsapp,
    href: SocialMediaEnum.WHATSAPP,
    label: "Whatsapp",
  },
  {
    icon: FaInstagram,
    href: SocialMediaEnum.INSTAGRAM,
    label: "Instagram",
  },
  {
    icon: SlMustache,
    label: "App Barber",
    href: SocialMediaEnum.SCHEDULING_SYSTEM_UNIT_1
  }
];
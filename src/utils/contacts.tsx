import { IconBaseProps } from "react-icons";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SlMustache } from "react-icons/sl";

export enum SocialMediaEnum {
  INSTAGRAM = "https://www.instagram.com/thebarberstudio_oficial_",
  WHATSAPP = "https://api.whatsapp.com/send?phone=5521992175804",
  APPBARBER = "https://sites.appbarber.com.br/thebarberstudio-o70c",
}

interface Props {
  icon: React.FC<IconBaseProps>;
  href: SocialMediaEnum;
  label: string;
}

export const contacts: Props[] = [
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
    href: SocialMediaEnum.APPBARBER,
    label: "App Barber",
  }
];
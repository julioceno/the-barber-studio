import { modalStore } from "@/components/Modal/store";
import { IconBaseProps } from "react-icons";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SlMustache } from "react-icons/sl";

export enum SocialMediaEnum {
  INSTAGRAM = "https://www.instagram.com/thebarberstudio_oficial_",
  WHATSAPP = "https://api.whatsapp.com/send?phone=5521992175804",
  APPBARBER_UNIT_1 = "https://sites.appbarber.com.br/thebarberstudio-o70c",
  APPBARBER_UNIT_2 = "https://sites.appbarber.com.br/thebarberstudio-rznb",
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
    onClick: modalStore.handleOpen
  }
];
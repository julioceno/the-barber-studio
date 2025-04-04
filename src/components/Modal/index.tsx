import { useEffect, useRef } from "react";
import { Unit } from "./components";
import { useClickOutside } from "@/hooks";
import { motion } from 'framer-motion';
import { SocialMediaEnum } from "@/utils/contacts";
import { modalStore } from "./store";
import { observer } from "mobx-react-lite";

const modalVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const Modal = observer(() => {
  const popupRef = useRef(null);
  useClickOutside({ ref: popupRef, action: () => modalStore.handleClose() });

  useEffect(() => {
    if (modalStore.getOpen()) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => document.body.classList.remove('overflow-hidden');
  }, [modalStore.getOpen()]);

  if (!modalStore.getOpen()) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div 
        className="bg-white w-11/12 md:w-8/12 lg:w-6/12 xl:w-5/12 text-center shadow-lg rounded-lg overflow-auto "
        ref={popupRef}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={modalVariants}
        transition={{ duration: 0.3 }}
      >
        <div className="mx-1 sm:mx-10 mt-5 sm:mt-10 ">
          <h5 className="font-extrabold text-2xl md:text-3xl">ESCOLHA A UNIDADE DESEJADA</h5>
          <p className="text-gray-700">Nós seguimos um padrão único de qualidade e excelência em nossos serviços. Independentemente da unidade que escolher, você terá o mesmo resultado.</p>
          <div className="flex flex-col xs:flex-row gap-10 mt-4 mx-10 xs:mx-3 kg:mx-10">
            <Unit 
              title="Unidade I"
              address="Estrada Teixeiras , 338 - Rua do Febre Amarela - 23820275 Vista Alegre - Itaguaí/RJ"
              link={SocialMediaEnum.SCHEDULING_SYSTEM_UNIT_1}
            />
            <Unit 
              title="Unidade II"
              address="Avenida Itaguaí , 24 - 23820-306 Engenho - Itaguaí/RJ"
              link={SocialMediaEnum.SCHEDULING_SYSTEM_UNIT_2}
            />
          </div>
        </div>

        <div className="relative">
          <div className="absolute h-[4.2rem] w-full   bg-white" />
          <iframe 
            src="https://www.google.com/maps/d/u/1/embed?mid=1SX5yz4CwOt0XYY-saqOh-3nZuH2eY8U&ehbc=2E312F" 
            className="w-full h-72 rounded-b-lg hidden sm:flex"
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
});

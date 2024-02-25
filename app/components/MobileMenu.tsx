import { motion } from "framer-motion";
import { MobileMenuRef } from "./MobileMenuRef";
import { MobileMenuContacts } from "./MobileMenuContacts";

import { IoClose } from "react-icons/io5";

const MobileMenuRefVariant = {
  open: {
    y: "0%",
    transition: {
      delay: 0.15,
      duration: 1.1,
      ease: [0.74, 0, 0.19, 1.02],
    },
  },
  closed: {
    y: "-100%",
    transition: {
      delay: 0.35,
      duration: 0.63,
      ease: [0.74, 0, 0.19, 1.02],
    },
  },
};

type Props = {
  setIsOpen: ((val: boolean | ((val: boolean) => boolean)) => void);
};

export const MobileMenu = ({ setIsOpen }: Props) => {
  return (
    <motion.nav
    className={`index absolute left-0 z-10 h-screen w-screen bg-gray-900 p-4 font-mono text-gray-50 md:hidden`}
    initial={MobileMenuRefVariant.closed}
      variants={MobileMenuRefVariant}
    >
      <div className="flex w-full justify-end">
        <IoClose
          onClick={() => setIsOpen((isOpen: boolean) => !isOpen)}
          size={24}
        />
      </div>

      <MobileMenuRef />
      <MobileMenuContacts />
    </motion.nav>
  );
};

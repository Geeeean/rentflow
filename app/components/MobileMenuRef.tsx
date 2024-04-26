import { motion } from "framer-motion";
import { NAV_ITEMS } from "./Nav";
import { useRouter } from "next/navigation";

const liVariant = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
  closed: {
    opacity: 0,
    y: "100%",
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
};

const ulVariant = {
  open: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.18,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.06,
      staggerDirection: -1,
    },
  },
};

type Props = {
  setIsOpen: (val: boolean) => void
}

export const MobileMenuRef = ({ setIsOpen }: Props) => {
  const router = useRouter();

  const handleClick = (href: string) => {
    setIsOpen(false);

    setTimeout(() => {
      router.push(href);
    }, 700);
  }

  return (
    <motion.ul variants={ulVariant} className="mt-10 list-none">
      {[...NAV_ITEMS, {
        navTitle: "Contatti",
        href: "#contacts"
      }].map((navItem, index) => (
        <motion.li
          whileTap={{ scale: 0.95 }}
          key={index}
          className="m-5 select-none overflow-y-hidden"
        >
          <motion.div variants={liVariant} className="text-center text-3xl" onClick={(e) => {ƒ
            e.preventDefault();
            handleClick(navItem.href)
          }}>
            {navItem.navTitle}
          </motion.div>
        </motion.li>
      ))}
    </motion.ul>
  );
};

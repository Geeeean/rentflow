import { motion } from "framer-motion";

const MOBILE_NAV_ITEMS = [
  {
    navTitle: "Servizi",
  },
  {
    navTitle: "Offerte",
  },
  {
    navTitle: "Dicono di noi",
  },
  {
    navTitle: "Contatti",
  },
];

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

export const MobileMenuRef = () => {
  return (
    <motion.ul variants={ulVariant} className="mt-10 list-none">
      {MOBILE_NAV_ITEMS.map((navItem, index) => (
        <motion.li
          whileTap={{ scale: 0.95 }}
          key={index}
          className="m-5 select-none overflow-y-hidden"
        >
          <motion.div variants={liVariant} className="text-center text-4xl">
            {navItem.navTitle}
          </motion.div>
        </motion.li>
      ))}
    </motion.ul>
  );
};

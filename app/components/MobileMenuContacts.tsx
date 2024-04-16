import { motion } from "framer-motion";

const fadeInVariant = {
  open: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.8,
    },
  },
  closed: { opacity: 0 },
};

export const MobileMenuContacts = () => {
  return (
    <motion.div
      variants={fadeInVariant}
      className="mt-40 text-center font-medium"
    >
      <p className="text-center text-xl break-words">petrellistracciaacquisizioni@gmail.com</p>
      <p className="m-4 text-center text-xl">+39 334 180 5336</p>
    </motion.div>
  );
};

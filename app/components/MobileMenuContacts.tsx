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
      className="mt-32 text-center font-medium"
    >
      <p className="text-center text-xl break-words">info@rentflow.it</p>
      <p className="m-4 mb-2 text-center text-xl">+39 334 180 5336</p>
      <p className="m-4 mt-2 text-center text-xl">+39 339 883 6017</p>
    </motion.div>
  );
};

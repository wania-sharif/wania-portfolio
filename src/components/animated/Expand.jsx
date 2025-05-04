import React from 'react';
import { motion } from 'framer-motion';

const Expand = ({ children }) => {
  return (
    <motion.div
    style={{ overflow: "hidden" }}
    initial={{ height: 0 }}
    animate={{ height: "auto" }}
    exit={{ height: 0 }}
    transition={{
      duration: .2,
      ease: "easeInOut",
    }}
    >
      {children}
    </motion.div>
  );
};

export default Expand;

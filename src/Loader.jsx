import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 flex items-center justify-center bg-white dark:bg-black z-50"
      >
        <div className="flex items-center space-x-3">
          {/* Bouncing Logo */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "easeInOut",
            }}
          >
            {/* Light Theme */}
            <img
              src="/vnct-tag-dark-font.jpg"
              alt="VNCT logo"
              className="w-48 h-auto block dark:hidden"
            />
            {/* Dark Theme */}
            <img
              src="/vnct-tag-white-font.png"
              alt="VNCT logo"
              className="w-48 h-auto hidden dark:block"
            />
          </motion.div>

          {/* Sliding Text */}
          <motion.span
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl font-bold text-[#4ca771] dark:text-[#4ca771]"
          >
            .dev
          </motion.span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;

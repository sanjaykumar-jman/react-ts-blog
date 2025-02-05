import { motion } from "framer-motion";

type FadeProps = {
  isVisible: boolean;
  children: React.ReactNode;
};

export default function FadeComponent({ isVisible, children }: FadeProps) {
  return (
    <>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}

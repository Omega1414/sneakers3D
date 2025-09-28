// components/Modal.tsx
"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
 
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
      
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!isOpen) {
   
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key={isOpen.toString()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-gray-700 text-white rounded-xl shadow-lg p-6 w-[90%] max-w-md relative"
          >
            <button
              onClick={() => {
              
                onClose();
              }}
              className="absolute top-2 right-2 text-gray-300 hover:text-white p-2 bg-gray-600  hover:bg-gray-800 transition-all duration-200"
            >
              ✕
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
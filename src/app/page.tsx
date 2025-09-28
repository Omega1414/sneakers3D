"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "../components/Modal";

const ModelViewer = dynamic(() => import("../components/ModelViewer"), {
  ssr: false,
});

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState<"learn" | "buy" | null>(null);

  return (
    <div className="flex h-full w-full overflow-hidden">
      {/* top left */}
      <div className="absolute top-0 left-0 w-full lg:w-1/2 h-1/2 lg:h-1/2 flex flex-col justify-start mt-5 lg:mt-0 lg:justify-center items-center">
        <div className="flex flex-col space-y-6 px-4 lg:px-0">
          <h1 className="text-[100px] lg:text-[150px] font-huitside leading-none mb-0">
            Air Jordon
          </h1>
          <p className="w-full lg:w-[500px] opacity-60 text-[18px] lg:text-base">
            An immersive 3D web experience showcasing the legendary Air Jordan 1. Concept design created for portfolio presentation only.
          </p>
          <div className="flex flex-row gap-4 z-10">
            {/* Buy Now → opens portfolio description modal */}
            <button
              onClick={() => {
                setModalType("buy");
                setIsOpen(true);
              }}
              className="cursor-pointer px-[20px] lg:px-[40px] py-[8px] lg:py-[10px] bg-white text-gray-700 rounded-[80px] text-[12px] lg:text-[16px] font-bold font-sans transition-all duration-300 ease-in-out hover:bg-[#FF366B] hover:text-white hover:scale-105"
            >
              Buy Now
            </button>

            {/* Learn More → opens attribution modal */}
            <button
              onClick={() => {
                setModalType("learn");
                setIsOpen(true);
              }}
              className="cursor-pointer px-[20px] lg:px-[40px] py-[8px] lg:py-[10px] border-2 border-gray-500 text-white rounded-[80px] text-[12px] lg:text-[16px] font-semibold transition-all duration-300 ease-in-out hover:bg-white hover:text-gray-700 hover:border-white hover:scale-105"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* right side (gradients + model) */}
      <div className="absolute top-1/3 lg:top-0 right-0 w-full lg:w-1/2 h-1/2 lg:h-1/2 flex justify-center items-center">
        <div className="hidden lg:flex flex-row gap-3">
          <div className="w-[80px] lg:w-[120px] h-[40vh] lg:h-[75vh] bg-gradient-to-b from-[#FF366B] via-[#FF366B] to-transparent"></div>
          <div className="w-[80px] lg:w-[120px] h-[40vh] lg:h-[75vh] bg-gradient-to-b from-[#FF366B] via-[#FF366B] to-transparent"></div>
          <div className="w-[80px] lg:w-[120px] h-[40vh] lg:h-[75vh] bg-gradient-to-b from-[#FF366B] via-[#FF366B] to-transparent"></div>
          <div className="w-[80px] lg:w-[120px] h-[40vh] lg:h-[75vh] bg-gradient-to-b from-[#FF366B] via-[#FF366B] to-transparent"></div>
        </div>

        <div className="absolute overflow-hidden top-[60%] xxs:top-[50%] lg:top-[300px] 2xl:top-[350px] -translate-y-1/2 z-10">
          <ModelViewer />
        </div>
      </div>

      {/* bottom text */}
      <motion.h1
        initial={{ backgroundSize: "100% 100%" }}
        animate={{
          backgroundSize: ["100% 100%", "140% 140%", "100% 100%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 pb-10 font-obrazec top-[90%] lg:top-[calc(50%+200px)] 2xl:top-[calc(50%+228px)]
                   -translate-x-1/2 -translate-y-1/2 font-extrabold uppercase
                   text-[100px] lg:text-[300px] 2xl:text-[391px] leading-[150px] lg:leading-[300px] tracking-[-0.01em]
                   bg-[radial-gradient(rgba(255,54,107,0.4)_50%,rgba(0,0,0,0.8)_90%)]
                   bg-clip-text text-transparent select-none pointer-events-none"
      >
        AirJordons
      </motion.h1>

      {/* Modal */}
      <Modal
        key={isOpen.toString()}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        {modalType === "learn" && (
          <>
            <h2 className="text-xl font-bold mb-4">3D Model Attribution</h2>
            <p className="text-sm">
              "Nike Air Jordan 1" by{" "}
              <a
                href="https://skfb.ly/oELMK"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                DeezVertz
              </a>{" "}
              is licensed under{" "}
              <a
                href="http://creativecommons.org/licenses/by/4.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Creative Commons Attribution (CC BY 4.0)
              </a>
              .
            </p>
          </>
        )}

        {modalType === "buy" && (
          <>
            <h2 className="text-xl font-bold mb-4">
              Interactive Sneakers Showcase
            </h2>
            <p className="text-sm">
              An immersive 3D web experience showcasing the legendary Air Jordan
              1. Concept design created for portfolio presentation only.
            </p>
          </>
        )}
      </Modal>
    </div>
  );
}

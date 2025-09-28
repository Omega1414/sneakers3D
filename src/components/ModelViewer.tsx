"use client";
import { useState, useEffect, useRef } from "react";
import "@google/model-viewer";
import { motion } from "framer-motion";

export default function ModelViewer() {
  const MV = "model-viewer" as any;
  const [progress, setProgress] = useState(0); 
  const [isLoaded, setIsLoaded] = useState(false);
  const modelViewerRef = useRef<any>(null);

  useEffect(() => {
    const modelViewer = modelViewerRef.current;
    if (!modelViewer) return;

    const handleProgress = (event: CustomEvent) => {
      const value = event.detail.totalProgress; // 0–1
      if (value >= 1) {
        setIsLoaded(true);
      }
    };

    modelViewer.addEventListener("progress", handleProgress);
    return () => {
      modelViewer.removeEventListener("progress", handleProgress);
    };
  }, []);

  // Fake smooth increase
  useEffect(() => {
    if (isLoaded) {
      setProgress(100); 
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 95) {
          return prev + 1; 
        }
        return prev; 
      });
    }, 80); 

    return () => clearInterval(interval);
  }, [isLoaded]);

  return (
    <div>
      {/* Model Viewer with conditional blur */}
      <motion.div
        animate={{ filter: isLoaded ? "blur(0px)" : "blur(8px)" }}
        transition={{ duration: 0.5 }}
      >
        <MV
          ref={modelViewerRef}
          src="/models/model9.glb"
          alt="3D Shoe"
          camera-controls
          camera-orbit="270deg 75deg 100%"
          auto-rotate
          className="w-[350px] h-[290px] xxs:h-[400px] xl:w-[600px] xl:h-[500px] 2xl:h-[600px] overflow-hidden"
        ></MV>
      </motion.div>

      {/* Progress Bar */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3/4 bg-gray-200 rounded-full h-2.5">
            <motion.div
              className="bg-[#FF366B] h-2.5 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </div>
      )}

      {/* Loading Percentage Text */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center mt-12">
          <span className="text-white text-sm font-semibold">
            Loading: {progress}%
          </span>
        </div>
      )}
    </div>
  );
}

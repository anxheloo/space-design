import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/outline";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[15px] px-[10px] border border-[#7042f88b] opacity-[0.9]"
      >
        <SparklesIcon className=" text-[#b49bff] mr-[10px] h-5 w-5"></SparklesIcon>
        <h1 className="Welcome-text text-[13px]">
          Think better with MERN Technology
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Making apps with modern texhnologies
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-gray-200 mt-[10px] text-center mb-10"
      >
        Never miss a task, deadline or idea
      </motion.div>
    </div>
  );
};

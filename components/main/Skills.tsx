"use client";

import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import React from "react";
import { SkillData } from "./sub/SkillData";
import { SkillText } from "./sub/SkillText";

const Skills = () => {
  return (
    <section
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20 mb-10"
      id="skills"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText></SkillText>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Skill_data.map((item, index) => (
          <SkillData
            src={item.Image}
            key={index}
            index={index}
            width={item.width}
            height={item.height}
          ></SkillData>
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((item, index) => (
          <SkillData
            src={item.Image}
            key={index}
            index={index}
            width={item.width}
            height={item.height}
          ></SkillData>
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((item, index) => (
          <SkillData
            src={item.Image}
            key={index}
            index={index}
            width={item.width}
            height={item.height}
          ></SkillData>
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Full_stack.map((item, index) => (
          <SkillData
            src={item.Image}
            key={index}
            index={index}
            width={item.width}
            height={item.height}
          ></SkillData>
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Other_skill.map((item, index) => (
          <SkillData
            src={item.Image}
            key={index}
            index={index}
            width={item.width}
            height={item.height}
          ></SkillData>
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          ></video>
        </div>
      </div>
    </section>
  );
};

export default Skills;

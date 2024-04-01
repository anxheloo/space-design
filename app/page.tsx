import Hero from "@/components/main/Hero";
import { Navbar } from "@/components/main/Navbar";
import StarCanvas from "@/components/main/StarBackground";
import Image from "next/image";
import Skills from "@/components/main/Skills";
import { Encryption } from "@/components/main/Encryption";
import { Projects } from "@/components/main/Projects";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className=" flex flex-col gap-20">
        <Hero></Hero>
        <Skills></Skills>
        <Encryption></Encryption>
        <Projects></Projects>
      </div>
    </main>
  );
}

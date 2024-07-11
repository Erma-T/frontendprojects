import Image from "next/image";
import Hero from "./mainsections/hero";
import About from "./mainsections/about";
import Projects from "./mainsections/projects";
import Hireme from "./mainsections/hireme";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <About />
      <Projects />

      <div className="flex flex-wrap justify-center justify-items-center w-full bg-[url(/images/mk8.webp)] bg-cover bg-no-repeat">
        <div className="flex flex-wrap justify-center justify-items-center w-full bg-gradient-to-l from-[#ffffff]/70 via-[#ffffff] to-[#ffffff]/70">

          <Hireme />
        
        </div>
      </div>
      
    </main>
  );
}

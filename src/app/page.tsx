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

      <Hireme />
      
    </main>
  );
}

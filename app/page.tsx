import About from "@components/About";
import Help from "@components/Help";
import Hero from "@components/Hero";
import Service from "@components/Service";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Service />
      <About />
    </main>
  );
}

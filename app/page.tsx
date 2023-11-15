import About from "@components/About";
import Tags from "@components/Tags";
import Service from "@components/Service";
import Image from "next/image";
import Hero from "@components/Hero";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Tags />
      <Service />
      <About />
    </main>
  );
}

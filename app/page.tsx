import Image from "next/image";
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Carosel from './components/Carosel';

export default function Home() {
  return (
    <div className="w-full pt-6">
      <header >
        <Navbar />
      </header>
      
      <main className="container p-5 pt-10 w-[80%] mx-auto min-h-screen">
        <section>
          <Hero />
        </section>

        <section>
          <Projects />
        </section>

        <section>
          <Carosel />
        </section>
      </main>
    </div>
  );
}

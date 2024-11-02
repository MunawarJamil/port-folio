import Image from "next/image";
import Hero from './components/Hero'
import Navbar from './components/Navbar';
import Projects from './components/Projects';
export default function Home() {
  return (
    <div className="full     ">
    <main className="container p-5  pt-10   w-[80%] h-[100vh] mx-auto">

<Navbar/>
<Hero/>
<Projects/>
    </main>
    </div>
  );
}

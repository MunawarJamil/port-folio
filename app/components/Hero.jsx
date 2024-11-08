import React from "react";
import { Image } from "next/image";
import { xxx } from 'next/server';
function Hero() {
  return (
    <>
      <div className="md:max-w-4xl mx-auto flex items-center flex-col  gap-8 my-16    ">
        <p className="text-center">Dynamic Web Magic with Next.js</p>
        <h1 className=" font-custom_sans leading-tight lg:text-6xl text-center   text-[40px] lg:leading-tight md:leading-relaxed    md:text-5xl  font-bold space-y-6">
          Transforming Concepts into Seamless
          <span className="text-text-custom"> User Experiences </span>  
        </h1>

        <p className="text-sm">
          Hi! I&apos;m Munawar, a Next.js Developer based in Croatia.
        </p>

        <button className="  w-48  py-3   rounded-lg">
          show my work
        </button>
      </div>

 <div className="grid   gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
{/* 
<!-- Main image spanning two columns on large screens --> */}
<div className="  col-span-1 lg:col-span-2">
  <img src="./box(2).png" alt="" className="w-full h-full" />
</div>
 
<div className="  w-[50]%    space-y-4 w-full">
  <div className="   ">
  <img src="./box(1).png" alt="" className="w-full" />
  </div>
  <div className="  ">
  <img src="./box0.png" alt="" className="w-full" />
  </div>
</div>
{/* 
<!-- Another column with two stacked images --> */}
<div className="  space-y-4 w-full">
  <div className=" ">
    <img src="./box(2).png" alt="" className="w-full" />
  </div>
  <div className=" ">
    <img src="./box.png" alt="" className="w-full" />
  </div>
</div>
{/* 
<!-- Bottom image spanning two columns on large screens --> */}
<div className="  col-span-1 lg:col-span-2">
  <img src="./box(2).png" alt="" className="w-full h-full" />
</div>

</div>

    </>
  );
}

export default Hero;

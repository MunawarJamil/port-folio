import React from "react";
import { Image } from "next/image";
import { xxx } from 'next/server';
function Hero() {
  return (
    <>
      <div class="md:max-w-4xl mx-auto flex items-center flex-col  gap-8 my-16    ">
        <p class="text-center">Dynamic Web Magic with Next.js</p>
        <h1 class=" font-custom_sans leading-tight lg:text-6xl text-center   text-[40px] lg:leading-tight md:leading-relaxed    md:text-5xl  font-bold space-y-6">
          Transforming Concepts into Seamless
          <span className="text-text-custom"> User Experiences </span>  
        </h1>

        <p class="text-sm">
          Hi! I&apos;m Munawar, a Next.js Developer based in Croatia.
        </p>

        <button class="  w-48  py-3   rounded-lg">
          show my work
        </button>
      </div>

 <div class="grid   gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
{/* 
<!-- Main image spanning two columns on large screens --> */}
<div class="  col-span-1 lg:col-span-2">
  <img src="./box(2).png" alt="" class="w-full h-full" />
</div>
 
<div class="  w-[50]%    space-y-4 w-full">
  <div class="   ">
  <img src="./box(1).png" alt="" class="w-full" />
  </div>
  <div class="  ">
  <img src="./box0.png" alt="" class="w-full" />
  </div>
</div>
{/* 
<!-- Another column with two stacked images --> */}
<div class="  space-y-4 w-full">
  <div class=" ">
    <img src="./box(2).png" alt="" class="w-full" />
  </div>
  <div class=" ">
    <img src="./box.png" alt="" class="w-full" />
  </div>
</div>
{/* 
<!-- Bottom image spanning two columns on large screens --> */}
<div class="  col-span-1 lg:col-span-2">
  <img src="./box(2).png" alt="" class="w-full h-full" />
</div>

</div>

    </>
  );
}

export default Hero;

'use client'

import React from 'react'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import Autoplay from "embla-carousel-autoplay"
function Carosel() {
  return (<>





    <Carousel className='bg-black
    font-serif lg:text-lg  w-[90%] mx-auto h-[ ]'
    
    
    
    plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    
    >
  <CarouselContent  >
    <CarouselItem  >
        <p className=' md:font-medium leading-8 p-3 pl-5 text-base  md:text-lg '> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quae dolores quos soluta deserunt dolorum fugiat molestias blanditiis? Dolorem, nobis recusandae ipsum assumenda omnis quia nostrum quam in obcaecati optio?
            Aliquid facilis dignissimos libero quae! Expedita excepturi  
            
        </p>
        <div className='flex   p-3 gap-3'>
            <img src="./carosel1.png" alt="john doe" />
            <div>
                <h1>Michael Johnson</h1>
                <p className='text-xs md:text-sm'>Director of Alphastream technologies</p>
            </div>
        </div>
    </CarouselItem>
    {/* second carosel */}
    <CarouselItem  >
        <p className=' md:font-medium leading-8 p-3 pl-5 text-base  md:text-lg '> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quae dolores quos soluta deserunt dolorum fugiat molestias blanditiis? Dolorem, nobis recusandae ipsum assumenda omnis quia nostrum quam in obcaecati optio?
            Aliquid facilis dignissimos libero quae! Expedita excepturi  
            
        </p>
        <div className='flex   p-3 gap-3'>
            <img src="./carosel1.png" alt="john doe" />
            <div>
                <h1>Michael Johnson</h1>
                <p className='text-xs md:text-sm'>Director of Alphastream technologies</p>
            </div>
        </div>
    </CarouselItem>
    
    {/* third carosel */}
    <CarouselItem  >
        <p className=' md:font-medium leading-8 p-3 pl-5 text-base  md:text-lg '> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quae dolores quos soluta deserunt dolorum fugiat molestias blanditiis? Dolorem, nobis recusandae ipsum assumenda omnis quia nostrum quam in obcaecati optio?
            Aliquid facilis dignissimos libero quae! Expedita excepturi  
            
        </p>
        <div className='flex   p-3 gap-3'>
            <img src="./carosel1.png" alt="john doe" />
            <div>
                <h1>Michael Johnson</h1>
                <p className='text-xs md:text-sm'>Director of Alphastream technologies</p>
            </div>
        </div>
    </CarouselItem>


  </CarouselContent>
  <CarouselPrevious className='hidden' />
  <CarouselNext className='hidden' />
</Carousel>
</>
  )
  
}

export default Carosel



  
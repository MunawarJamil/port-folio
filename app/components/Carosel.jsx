"use client";
import { useEffect, useState } from "react";
import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
function Carosel() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(()=>{
    const fetchCaroselData = async () => {
        try {
          const response = await fetch('/api/carosel-data');
          if (!response.ok) throw new Error("Failed to fetch data");
          
          const data = await response.json();
          setItems(data);
          console.log("Fetched data:", data);
        } catch (err) {
          setError(err.message);
          console.error("Fetch error:", err.message);
        } finally {
          setLoading(false);
        }
      };
    
     
   
    
      // Optional cleanup function
      fetchCaroselData();
    }, []);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  
  return (
    <>


<h1 className=" font-custom_sans leading-tight mt-10 mb-10 lg:text-5xl text-center   text-[30px] lg:leading-tight md:leading-relaxed  md:text-4xl     font-bold space-y-6">
Kind words from <span className="text-text-custom">satisfied clients</span>  
        </h1>


      <Carousel
        className="bg-black
    font-serif lg:text-lg  w-[90%] mx-auto h-[ ]"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>


{items.map((item, index)=>{
    return (
        <CarouselItem key={index}>
        <p className=" md:font-medium leading-8 p-3 pl-5 text-base  md:text-lg ">
          {item.text}
        </p>
        <div className="flex   p-3 gap-3">
        <img src={item.image} alt={item.alt} />
          <div>
            <h1> {item.name} </h1>
            <p className="text-xs md:text-sm">
            {item.position}
            </p>
          </div>
        </div>
      </CarouselItem> 
    )
})}


        
          
        </CarouselContent>
        <CarouselPrevious className="hidden" />
        <CarouselNext className="hidden" />
      </Carousel>
    </>
  );
}

export default Carosel;

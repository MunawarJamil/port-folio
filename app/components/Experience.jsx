import React from "react"; 
 
import { Button } from "@/components/ui/button"
 
let experienceData = [
  {
    image: "/experience.png",
    role: "Frontend Engineer Intern",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sarabama taana water fusion.",
  },
  {
    image: "/exper2.png",
    role: "Frontend Engineer Intern",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sarabama taana water fusion.",
  },
  {
    image: "/exper3.png",
    role: "Frontend Engineer Intern",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sarabama taana water fusion.",
  },
  {
    image: "/exper4.png",
    role: "Frontend Engineer Intern",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sarabama taana water fusion.",
  },
  // Add more objects as needed
];

function Experience() {
  // Grouping the experience data into rows of two
  const groupedExperienceData = [];
  for (let i = 0; i < experienceData.length; i += 2) {
    groupedExperienceData.push(experienceData.slice(i, i + 2));
  }

  return (
    <section className="w-[90%] mx-auto">
      <h1 className="my-10 font-custom_sans leading-tight lg:text-6xl text-center text-[30px] lg:leading-tight md:leading-relaxed md:text-5xl font-bold space-y-6">
        My Work  <span className="text-text-custom"> Experience</span>   
      </h1>                                             

      <div className="flex flex-col gap-5">
        {groupedExperienceData.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-col md:flex-row gap-5 justify-center"
          >
            {row.map((data, index) => (
              <div
                key={index}
                className="font-serif bg-black p-5 rounded-lg shadow-2xl shadow-slate-600"
              >
                <img
                  src={data.image}
                  alt={data.role}
                  className="mb-4 object-cover"
                />
                <h1 className="text-xl my-2 text-white">{data.role}</h1>
                <p className="text-xs leading-6 text-gray-300">
                  {data.description}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
<div className="  text-center"> 
      <h1 className="my-5 font-custom_sans leading-tight lg:text-5xl text-center text-[30px] lg:leading-tight md:leading-tight md:text-4xl font-bold space-y-3">
      Ready to take your digital presence  <span className="text-text-custom">to the next level?</span>  
      </h1>
<p>
Reach out to me today and let's discuss how I can help you achieve your goals.
</p>
     
      <Button className="my-4">
       <span>Contact Me</span>  
       <img src="/arrow.png" alt="" />

    </Button>
    </div>

    <footer className="flex flex-col justify-center text-center my-6">
        <p className="font-serif">
        Copyright ©2024 Munawar Minhas
        </p>
        <div className="flex gap-3 justify-center">
            <img src="/insta.png" alt="" />
            <img src="/twitter.png" alt="" />
            <img src="/github.png" alt="" />
            <img src="/whatsapp.png" alt="" />
            <img src="/linkedIn.png" alt="" />
        </div>
    </footer>
    </section>
   
  );
}

export default Experience;

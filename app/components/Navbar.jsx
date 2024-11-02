import {

    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    
    MenubarTrigger,
  } from "@/components/ui/menubar"
  import { Link } from 'next/link';
  

 function Navbar() {
  return (
//     <div className=' flex justify-center bg-slate-900 md:w-[50%]     text-white  md:mx-auto'> 
// <ul className='flex gap-6 items-center   '>
//     <li><Link href="/home">Home</Link></li>
//     <li><Link href="#">About</Link></li>
//     <li><Link href="#">Projects</Link></li>
//     <li><Link href="#">Testimonial</Link></li>
//     <li><Link href="#">Contact</Link></li>
// </ul>
//     </div>
<> 
<Menubar className=" flex justify-evenly md:p-6 bg-black   lg:max-w-[50%] mx-auto h-[60px] rounded-lg" >
  <MenubarMenu>
  <a href="/contact">Home</a>
    
</MenubarMenu>
    


  <MenubarMenu> 
    <MenubarTrigger>   My business </MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
       <a href="/calander">Calander</a>  
      </MenubarItem>
      <MenubarItem>New Window</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Recording </MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Separating</MenubarItem>
    </MenubarContent>
  </MenubarMenu>


  <MenubarMenu> 
    <MenubarTrigger>   Toolkit</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
       <a href="/calander">Mobile Apps </a>  
      </MenubarItem>
      <MenubarItem>Web Apps </MenubarItem>
      <MenubarSeparator />
      <MenubarItem> tutoring </MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Driving</MenubarItem>
    </MenubarContent>
  </MenubarMenu>




  <MenubarMenu> 
    <MenubarTrigger> <a href="/testimonial">  Testimonial</a></MenubarTrigger>
     
  </MenubarMenu>
  

  
</Menubar>


</>
  )
}

export default Navbar
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from './NavBar';
import HeroArea from './HeroArea';
import Image from 'next/image';
import image7 from './image/image7.png';

gsap.registerPlugin(ScrollTrigger);


const Header = () => {
    useEffect(() => {
        gsap.from(".section-6", {
          opacity: 0,
          y: 250,
          duration: 2,
          scrollTrigger: {
            trigger: ".section-6",
            start: "top 80%",
            end: "top 50%",
            scrub: 2,
          },
        });
      }, []);

    return (
        <div className='!bg-[#FFEBEB] relative overflow-hidden section-6'>
            <Image className='w-full absolute top-0 left-0 h-full object-cover z-[0] select-none pointer-event-none' src={image7} alt=''/>
            <NavBar/>
            <HeroArea/>
        </div>
    );
};

export default Header;
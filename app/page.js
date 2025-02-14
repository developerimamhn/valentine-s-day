"use client"

import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import React, { useEffect, useState } from "react";

export default function Home() {
  const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
  
      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);
  
    return (
      <div
        className="w-[18px] blur-[0px]  mt-[8px] rounded-full fixed pointer-events-none transition-transform duration-[3s] z-[99]"
        style={{
          top: position.y,
          left: position.x,
          transform: "translate(-50%, -50%)",
        }}
      >
        <svg className='' viewBox="0 0 80 79" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M37.8021 72.5817C0.554029 45.3107 -2.01632 24.0882 12.8001 15.5838C19.8748 11.438 27.2542 15.4871 31.7918 19.1831C34.7345 21.4984 36.4773 23.6716 36.4773 23.6716C36.4773 23.6716 47.7154 8.22632 59.6225 14.2951C74.9569 21.8948 73.5727 43.224 37.8021 72.5817Z" fill="#E65E5B"/>
        <path d="M37.8021 72.5817C0.554029 45.3107 -2.01632 24.0882 12.8001 15.5838C19.8748 11.438 27.2542 15.4871 31.7918 19.1831C31.2892 18.9235 17.7362 12.9598 12.6356 28.2319C6.45013 46.684 36.9266 71.8113 37.8021 72.5817Z" fill="#CD2A25"/>
        <path d="M46.5157 17.9511C46.5157 17.9511 56.5521 12.2308 63.3548 21.712C70.2831 31.2581 56.9974 48.511 56.9974 48.511C56.9974 48.511 64.451 34.6927 59.7361 25.1754C55.0515 15.7534 46.5157 17.9511 46.5157 17.9511Z" fill="white"/>
        <path d="M37.8011 72.5818C73.5717 43.2241 74.956 21.8949 59.6216 14.2952C47.7144 8.22637 36.4763 23.6716 36.4763 23.6716C36.4763 23.6716 24.3032 8.87074 12.7991 15.5839C-2.01728 24.0882 0.553074 45.3107 37.8011 72.5818Z" stroke="#3D0D0D" stroke-width="2.9" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    );
  };
  return (
    <div className='scroll-auto'>
      <CustomCursor className='md:block hidden' />
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

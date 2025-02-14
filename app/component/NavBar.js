"use client";


import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import logo1 from './image/logo1.png';
import Image from 'next/image';
import { LiaBarsSolid } from "react-icons/lia";
import { VscChromeClose } from "react-icons/vsc";
import image1 from './image/image1.png';
import image2 from './image/image2.png';
import image3 from './image/image3.png';

const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null); 
    const menuButtonRef = useRef(null);

    const handleClickOutside = (event) => {
        // Close menu if clicked outside of menu and toggle button
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            (!menuButtonRef.current || !menuButtonRef.current.contains(event.target))
        ) {
            setToggle(false);
        }
    };

    useEffect(() => {
        // Add event listener for clicks outside the component
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div className='relative '>
            <header className=' container mx-auto flex justify-between items-center py-[18px] sm:py-[24px] relative px-[24px] sm:px-[0]'>
                <div className='sm:hidden relative top-[-11px]'>
                    
                    <div 
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-100' : 'opacity-0 -translate-x-2'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <VscChromeClose className='text-[#0C0C0C] text-[22px] absolute' />
                    </div>
                    <div ref={menuButtonRef}
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-0 translate-x-2' : 'opacity-100'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <LiaBarsSolid className='text-[#0C0C0C] text-[22px] absolute' />
                    </div>
                </div>
                <Link href="*" className='Froggo-Logo w-[44.926px] 2xl:w-[71px]'>
                    <Image className='w-full' src={logo1} alt=''/>
                </Link>
                <nav ref={menuRef} className={`navbar-items-main absolute sm:top-0 top-[100%] sm:right-0 sm:relative duration-1000 z-50 sm:z-0 sm:opacity-100 flex justify-between items-start sm:items-center gap-[20px] md:gap-[25px] lg:gap-[30px] xl:gap-[35px] 2xl:gap-[40px] sm:bg-transparent sm:flex-row flex-col p-[20px] sm:p-[0]
                    ${toggle ? 'right-[10]' :'right-[130%]' }
                    ${toggle ? 'opacity-100' : 'opacity-10'} 
                    `} >
                    <Link className={`Link-manu-bar`} href="#Home">Home</Link>
                    <Link className={`Link-manu-bar`} href="#About">About</Link>
                    <Link className='Link-manu-bar' href="#How-to-Buy">How to Buy</Link>
                    <Link className='Link-manu-bar' href="#Tokenomics">Tokenomics</Link>
                    <Link className={`Link-manu-bar`} href="#Roadmap">Roadmap</Link>
                </nav>
                <ul className=' manu-sosul-area flex items-center'>
                    <Image className='w-[50px] md:w-[70px] xl:w-[100px] cursor-pointer' src={image1} alt=''/>
                    <Image className='w-[50px] md:w-[70px] xl:w-[100px] cursor-pointer' src={image2} alt=''/>
                    <Image className='w-[50px] md:w-[70px] xl:w-[100px] cursor-pointer' src={image3} alt=''/>
                    <button className='contactusbtn relative group'>
                    <svg xmlns="http://www.w3.org/2000/svg"  className='w-[130px] md:w-[180px] xl:w-[221px]' viewBox="0 0 221 74" fill="none">
                    <path d="M214.731 10.9269C203.008 -3.09791 168.628 0.925147 141.135 0.36639C109.357 -0.276181 77.6051 -0.080617 45.9586 1.00896C34.9717 1.40009 23.3277 2.0706 14.7327 7.46261C3.82469 14.3074 0.644273 26.9912 0.0660161 38.753C-0.459672 50.0958 1.98478 63.4222 13.5499 69.8479C21.0673 74.0106 30.4245 74.0665 39.1772 73.9827C79.9006 73.5543 120.633 73.1352 161.374 72.7255C169.311 72.6416 208.396 74.9325 215.756 63.5339C222.511 53.0851 223.326 21.1801 214.731 10.9269Z" className="fill-[#E03835] transition-colors duration-300 group-hover:fill-[#FF5733]"/>
                    </svg>

                        <p className='w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Buy now</p></button>
                </ul>
                
                
            </header>
        </div>
    );
};

export default NavBar;
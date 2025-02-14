import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import Image from 'next/image';
import image9 from './image/image9.png';
import image10 from './image/image10.png';
import image11 from './image/image11.png';
import image12 from './image/image12.png';

const Pagetwo = () => {
    useEffect(() => {
        gsap.from(".section-1", {
          opacity: 0,
          y: 250,
          duration: 2,
          scrollTrigger: {
            trigger: ".section-1",
            start: "top 80%",
            end: "top 50%",
            scrub: 2,
          },
        });
      }, []);
    return (
        <div className='!bg-[#FFEBEB] relative overflow-hidden section-1'>
            <Image className='w-full absolute top-0 left-0 h-full object-cover z-[0] select-none pointer-event-none' src={image12} alt=''/>
            <div className='container mx-auto px-[24] sm:px-[0] md:px-[48px] lg:px-[64px] xl:px-[100px] 2xl:px-[174px] pb-[20px]'>
                <h2 className='howtobyepage text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[60px] pt-[32px] sm:pt-[36px] md:pt-[40px] lg:pt-[48px] xl:pt-[64px] 2xl:pt-[100px]  pb-[20px] sm:pb-[24px] md:pb-[32px] lg:pb-[36px] xl:pb-[40px] 2xl:pb-[44px]'>How to Buy</h2>
                <div className='relative z-[2] bg-[#E03835] sm:bg-transparent py-[36px] sm:py-0'>
                    <svg className='w-full sm:block hidden' viewBox="0 0 1163 275" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1163 0H0V237L1163 191.895V0Z" fill="#E03835"/>
                    <rect x="1080.5" y="166.5" width="21" height="69" rx="10.5" fill="#FFD3D3" stroke="black" stroke-width="3"/>
                    <rect x="61.5" y="204.5" width="21" height="69" rx="10.5" fill="#FFD3D3" stroke="black" stroke-width="3"/>
                    </svg>
                    <div className='sm:absolute top-0 left-0 pl-[24px] sm:pl-[32px] md:pl-[36px] lg:pl-[40px] xl:pl-[48px] 2xl:pl-[60px] pt-[20px] sm:pt-[24px] md:pt-[20px] lg:pt-[36px] xl:pt-[40px] 2xl:pt-[48px] flex justify-start sm:items-center gap-[28px] md:gap-[45px] xl:gap-[70px]  sm:flex-row flex-col'>
                        <div>
                            <h3 className='setuppage text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[25px]'>SET UP A Phantom WALLET</h3>
                            <p className='tostopeandima text-[10px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[22px] mt-[8px] lg:mt-[12px]'>TO STORE AND MANAGE YOUR MUNK TOKENS, YOU'LL NEED A COMPATIBLE <br/> CRYPTOCURRENCY WALLET. WE RECOMMEND USING A WALLET THAT SUPPORTS ERC-10 <br/> TOKENS, SUCH AS METAMASK, TRUST WALLET, OR COINBASE WALLET</p>
                        </div>
                        <Image className='w-[100px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[100px]' src={image9} alt=''/>
                    </div>
                </div>
                <div className='relative sm:top-[-40px] md:top-[-40px] lg:top-[-75px] xl:top-[-92px] z-[1] bg-[#E03835] sm:bg-transparent mt-[24px] py-[36px] sm:py-0'>
                    <div className='sm:absolute bottom-0 left-0 pl-[36px] sm:pl-[40px] md:pl-[48px] lg:pl-[64px] xl:pl-[96px] 2xl:pl-[122px] pb-[28px] sm:pb-[30px] md:pb-[40px] lg:pb-[60px] xl:pb-[48px] 2xl:pb-[68px] flex justify-start sm:items-center gap-[28px] md:gap-[45px] xl:gap-[70px]  sm:flex-row flex-col'>
                        <Image className='w-[100px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[100px]' src={image10} alt=''/>
                        <div>
                            <h3 className='setuppage text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[25px]'>PURCHASE SOLANA</h3>
                            <p className='tostopeandima text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[22px] mt-[8px] lg:mt-[12px]'>To purchase $CUPID coin using Raydium, connect your Solana wallet,<br/>  navigate to the $CUPID trading pair, enter the desired amount, confirm the <br/> transaction, and receive $CUPID tokens in your wallet.</p>
                        </div>
                        
                    </div>
                    <svg className='w-full sm:block hidden' viewBox="0 0 1163 279" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 237H1163V0L0 45.1048V237Z" fill="#E03835"/>
                    <rect x="61.5" y="208.5" width="21" height="69" rx="10.5" fill="#FFD3D3" stroke="black" stroke-width="3"/>
                    <rect x="1080.5" y="208.5" width="21" height="69" rx="10.5" fill="#FFD3D3" stroke="black" stroke-width="3"/>
                    </svg>
                </div>
                <div className='relative py-[36px] sm:py-0 sm:top-[-55px] lg:top-[-120px] xl:top-[-140px] bg-[#E03835] sm:bg-transparent mt-[24px]'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-full sm:block hidden' viewBox="0 0 1163 237" fill="none">
                <path d="M1163 0H0V237L1163 191.895V0Z" fill="#E03835"/>
                </svg>
                    <div className='sm:absolute top-0 left-0 pl-[24px] sm:pl-[32px] md:pl-[36px] lg:pl-[40px] xl:pl-[48px] 2xl:pl-[60px] pt-[20px] sm:pt-[24px] md:pt-[32px] lg:pt-[36px] xl:pt-[40px] 2xl:pt-[48px] flex justify-start sm:items-center gap-[28px] md:gap-[45px] xl:gap-[70px] sm:flex-row flex-col'>
                        <div>
                            <h3 className='setuppage text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[25px]'>SWAP SOL for $CUPID</h3>
                            <p className='tostopeandima text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[22px] mt-[8px] lg:mt-[12px]'>To purchase $CUPID coin using Raydium, connect your Solana wallet,<br/> navigate to the $CUPID trading pair, enter the desired amount, confirm the<br/> transaction, and receive $CUPID tokens in your wallet.</p>
                        </div>
                        <Image className='w-[100px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[100px]' src={image11} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    );
};
// const styles = {
//     section: {
//       height: "100vh",
//     },
//   };
export default Pagetwo;
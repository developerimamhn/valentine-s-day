import React from 'react';
import Image from 'next/image';
import image17 from './image/image17.png';
import image1 from './image/image1.png';
import image2 from './image/image2.png';
import image3 from './image/image3.png';

const Pagefive = () => {
    return (
        <div className='bg-[#E03835] pt-[32px] sm:pt-[36px] md:pt-[40px] lg:pt-[48px] xl:pt-[64px] 2xl:pt-[96px] relative'>
            <div>
            <Image className='absolute w-1/6 bottom-0 left-0 select-none pointer-event-none pl-[24px] sm:pl-[32px] md:pl-[36px] lg:pl-[40px] xl:pl-[48px] 2xl:pl-[54px] pt-[15px] sm:pt-[16px] md:pt-[20px] lg:pt-[23px] xl:pt-[33px] 2xl:pt-[39px]' src={image17} alt=''/>
            <Image className='absolute w-1/6 bottom-0 right-0 select-none pointer-event-none pr-[24px] sm:pr-[32px] md:pr-[36px] lg:pr-[40px] xl:pr-[48px] 2xl:pr-[54px] pt-[15px] sm:pt-[16px] md:pt-[20px] lg:pt-[23px] xl:pt-[33px] 2xl:pt-[39px]' src={image17} alt=''/>
                <div className='px-[24px] sm:px-[0]'>
                    <h2 className='joinmadmvers text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]'>JOIN THE MAD MOVEMENT</h2>
                    <p className='joivalentins text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[24px]'>Join the Valentine Meme Club and let's have fun while making bank! <br className='sm:block hidden'/>Follow us for updates so juicy, you might get a buzz!</p>
                    <ul className=' manu-sosul-area flex items-center justify-center pt-[8px] md:pt-[12px] xl:pt-[16px]'>
                        <Image className='w-[50px] md:w-[70px] xl:w-[100px] cursor-pointer hover:brightness-125 duration-300' src={image1} alt=''/>
                        <Image className='w-[50px] md:w-[70px] xl:w-[100px] cursor-pointer hover:brightness-125 duration-300' src={image2} alt=''/>
                        <Image className='w-[50px] md:w-[70px] xl:w-[100px] cursor-pointer hover:brightness-125 duration-300' src={image3} alt=''/>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Pagefive;
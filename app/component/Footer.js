import React from 'react';
import Image from 'next/image';
import image17 from './image/image18.png';

const Pagefive = () => {
    return (
        <div className='bg-[#E03835] relative border-t-[1px] border-[#FCC0C0]'>
            <div className='px-[24px] sm:px-[32px] md:px-[36px] lg:px-[40px] xl:px-[48px] 2xl:px-[64px] flex justify-between items-center pt-[14px] sm:pt-[15px] md:pt-[16px] lg:pt-[20px] xl:pt-[24px] 2xl:pt-[29px] pb-[13px] sm:pb-[14px] md:pb-[15px] lg:pb-[16px] xl:pb-[20px] 2xl:pb-[24px]'>
                <Image className='w-[120px] md:w-[180px] xl:w-[240px]' src={image17} alt=''/>
                <p className='valentinedaysds text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px]'>Valentine © 2025. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Pagefive;
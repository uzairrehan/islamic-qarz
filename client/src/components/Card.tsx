import { CardTypes } from '@/types/cardType';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowTrendUp } from 'react-icons/fa6';

function Card({ name, link, img, desc }: CardTypes) {
    return (
        <>
            <div className='rounded-lg bg-transparent flex justify-center items-center flex-col mx-3 relative'>
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071629]/100 z-10 transition-opacity duration-300 ease-in-out hover:opacity-0" />
                    <Image
                        src={img}
                        alt={name}
                        width={400}
                        height={400}
                        className="w-96 h-60 rounded-3xl shadow-md shadow-[#071629] border-2 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                    />
                </div>
                <div className='bg-[#071629] px-2 border-2 z-30 rounded-2xl w-4/5 flex flex-row justify-center items-center gap-4 h-14 -translate-y-6 shadow-sm shadow-[#071629]'>
                    <h2 className='font-bold text-sm md:text-md '>{name}</h2>
                    <Link href={link}>
                        <button className="text-sm text-left bg-white text-[#081b33] p-1 border-2 rounded-3xl  px-4 font-bold flex gap-2  items-center justify-center">
                            More Info
                            <FaArrowTrendUp />
                        </button>
                    </Link>
                    <p className="text-sm text-gray-300">{desc}</p>
                </div>
            </div>
        </>
    );
}
export default Card;
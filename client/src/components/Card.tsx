import { CardTypes } from '@/types/cardType'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowTrendUp } from 'react-icons/fa6'



function Card({ name, link, img, desc }: CardTypes) {
    return (
        <div>
            <Image src={img} alt={name} width={400} height={400} className='w-96 h-60 rounded-3xl' />
            <div>
                <h2>{name}</h2>
                <Link href={link}>
                    <button className="mt-4 text-sm text-left bg-white text-[#081b33] p-1 border-2 rounded-3xl  px-4 font-bold flex gap-2  items-center justify-center">
                        Apply
                        <FaArrowTrendUp />
                    </button>
                <p>{desc}</p>
                </Link>
            </div>
        </div>
    )
}

export default Card
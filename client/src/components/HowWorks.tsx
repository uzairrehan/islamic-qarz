import React from 'react';

function HowWorks() {
    return (
        <>
            <h1 className='text-center text-3xl md:text-5xl py-12 font-extrabold'>
                How it works?
            </h1>

            <ol className='p-4 flex w-full justify-center items-center gap-5 flex-wrap'>
                <li className='flex flex-col items-center justify-center mb-6 border-2 rounded-lg h-44 w-[500px] p-6'>
                    <h3 className='text-xl font-semibold mb-2  text-left w-full '>
                        1. Apply Online
                    </h3>
                    <p className='text-lg '>
                        Fill out a quick online application form with basic personal information. It only takes a few minutes.
                    </p>
                </li>
                <li className='flex flex-col items-center justify-center mb-6 border-2 rounded-lg h-44 w-[500px] p-6'>
                    <h3 className='text-xl font-semibold mb-2  text-left w-full '>
                        2. Login
                    </h3>
                    <p className='text-lg '>
                        We’ll review your application and get back to you quickly. You will receive a decision in as little as 24 hours.
                    </p>
                </li>
                <li className='flex flex-col items-center justify-center mb-6 border-2 rounded-lg h-44 w-[500px] p-6'>
                    <h3 className='text-xl font-semibold mb-2  text-left w-full '>
                        3. Receive Funds
                    </h3>
                    <p className='text-lg '>
                        Once approved, funds are transferred to your account directly. Use your loan!
                    </p>
                </li>
            </ol>
        </>
    );
}

export default HowWorks;

import Image from 'next/image'
import React from 'react'
import { BiSend } from 'react-icons/bi'

function Contact() {
  return (
    <>
      <div className='h-16 bg-[#081b33] ' />
      <div className='flex flex-col md:flex-row w-full justify-between items-center'>
        <div className='w-full md:w-1/2 flex justify-center items-center px-4'>
          <div>
            <h1 className='text-start text-2xl md:text-5xl pt-12 font-extrabold '>
              Got a Question?
            </h1>
            <p className=' text-sm text-start text-slate-300 w-2/3 py-8'>We&apos;re here to help! Feel free to reach out to us, and we&apos;ll get back to you via email. <br />Whether you have a question, feedback, or just want to say hello, don&apos;t hesitate to contact us!</p>
            <Image src={'/customer.avif'} alt='contact us image' height={400} width={400} className='rounded-lg' />
          </div>
        </div>

        <div className='flex justify-center items-center flex-col gap-4 w-full md:w-1/2'>
          <div className='md:w-3/4 w-full'>

            <h1 className='text-2xl md:text-3xl pt-16 font-bold w-full p-4 md:pl-0'>Contact Us.</h1>
            <form action="" className='w-full md:p-0 p-4 '>
              <label htmlFor="name">
                <h3 className=' text-lg font-bold mb-1 '>Name :</h3>
                <input type="text" id='name' className=' w-full rounded-lg h-8 mb-4 text-black' />
              </label>
              <label htmlFor="email">
                <h3 className='text-start text-lg font-bold mb-1'>Email :</h3>
                <input type="email" id='email' className=' w-full rounded-lg h-8 mb-4 text-black' />
              </label>
              <label htmlFor="query">
                <h3 className='text-start text-lg font-bold mb-1'>Query :</h3>
                <textarea id='query' className=' w-full rounded-lg h-28 mb-4 text-black' />
              </label>
              <button type="button" className="mt-4 text-sm text-left bg-white text-[#081b33] p-2 border-2 rounded-3xl  px-6 font-bold flex gap-2  items-center justify-center">
                Send
                <BiSend  className='size-4'/>
              </button>

            </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default Contact
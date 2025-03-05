import { FAQ } from '@/constants/FAQs'
function FAQs() {

    return (
        <>
            <h1 className='text-center text-3xl md:text-5xl py-12 font-extrabold'>
                FAQs.
            </h1>
            <div className='flex items-center justify-center flex-col md:w-full gap-1 mx-2' >
                {
                    FAQ.map(({ qst, ans }, index) => (
                        <details key={index} className='bg-[#000c1b]  w-full md:w-3/5 rounded-lg p-2'>
                            <summary className='font-extrabold text-sm md:text-lg hover:cursor-pointer '>
                                {qst}
                            </summary>
                            <p className='pt-2 text-sm'>
                                {ans}
                            </p>
                        </details>
                    ))
                }
            </div>
        </>
    )
}

export default FAQs 
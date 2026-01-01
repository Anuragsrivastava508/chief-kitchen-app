"use client"
import Image from 'next/image';
import Link from 'next/link';


const Hero = () => {

    return (
        <section id="home-section" className='bg-gray-50 dark:bg-gray-700'>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20">
                <div className='grid grid-cols-1 lg:grid-cols-12 items-center'>
                    <div className='col-span-6'>
                        <h1 className="text-4xl lg:text-7xl font-semibold mb-5 text-black dark:text-white md:4px lg:text-start text-center">
                            Cook anything with the experts
                        </h1>
                        <p className='text-black/55 dark:text-white/50 lg:text-lg font-normal mb-10 lg:text-start text-center'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br /> accusantium doloremque laudantium, totam</p>
                        <div className='md:flex align-middle justify-center lg:justify-start'>
                            <Link href='#cook-section' className='text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-primary hover:text-primary lg:px-14 mr-6 border border-primary hover:bg-transparent'>Lets cook</Link>
                            <Link href='#about-section' className='flex border w-full md:w-auto mt-5 md:mt-0 border-primary justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-primary hover:text-white hover:bg-primary'>Explore now</Link>
                        </div>
                    </div>
                    <div className='col-span-6 flex justify-center relative'>
                        <div className='flex bg-white p-2 gap-5 items-center bottom-10 left-10 rounded-xl absolute'>
                            <Image src={'/images/hero/pizza.svg'} alt="pizza-image" width={68} height={68} />
                            <p className='text-lg font-normal'>More than 500+ <br /> recipes.</p>
                        </div>
                        <Image src="/images/hero/banner-image.png" alt="nothing" width={1000} height={805} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;

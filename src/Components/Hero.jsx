import React from 'react'
import { ShoppingCart, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const Navigate = useNavigate()
    return (
        <section className='relative w-full mt-8 h-[250px] md:h-[600px]' >
            <img className='md:w-full w-full  h-full absolute md:h-full inset-0 object-cover' src={'/Images/clone_img.png'} alt='Hero'></img>
            <div className='absolute text-start p-8 md:pl-20 md:pt-16'>
                <h1 className='md:text-6xl text-xl font-bold md:mb-2'>Discover Amazing   </h1>
                <h1 className='md:text-6xl text-xl font-bold mb-2 md:mb-6 '> Products at <span className='text-purple-700 text-2xl md:text-6xl'>ShopPeak</span></h1>
                <p className=' text-sm md:text-xl mb-2 md:mb-10'>
                    Explore the latest trends and find products <br></br>
                    that match your style.
                </p>

                <div className='md:gap-20 flex flex-col'>
                    <button onClick={() => Navigate("/shop")} className='text-sm bg-gradient-to-r border border-transparent from-blue-700 to-purple-600 md:h-12 rounded-3xl md:w-40 justify-center items-center  md:text-xl  transition-all duration-300 hover:border-white shadow-lg hover:shadow-purple-500/40 w-25 h-6 p-2 flex mb-2 '>Shop Now</button>
                    <button onClick={() => Navigate("/categories")} className='text-sm flex bg-gradient-to-r from-blue-700 to-purple-600 md:h-14 rounded-3xl md:w-100 justify-center items-center  md:text-2xl md:gap-4  border border-transparent transition-all duration-300 hover:border-white shadow-lg hover:shadow-purple-500/40 w-45 h-8 p-2 '>Explore More <ArrowRight size={18} className='md:w-[30px] md:h-[30px]' /> <ShoppingCart size={18} className='md:w-7 md:h-7' /></button>

                </div>
            </div>

        </section>
    )
}

export default Hero

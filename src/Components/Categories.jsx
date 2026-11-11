
import React from 'react'
import { NavLink } from 'react-router-dom'

const Categories = () => {
  return (
    <section className='w-full bg-slate-100 flex justify-center py-6 md:py-8'>

      <div className='w-[90%] bg-slate-200 rounded-xl p-4 md:p-6'>

        {/* Heading Section */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-4 mb-8'>

          <div className='text-center md:text-start'>
            <h1 className='text-black font-bold text-2xl md:text-4xl'>
              Shop by Category
            </h1>

            <p className='text-slate-600 text-base md:text-xl'>
              Find what you love, faster
            </p>
          </div>

          <button className='hidden md:flex h-10 px-6 rounded-2xl justify-center items-center bg-purple-800 text-white text-lg'>
            View All Categories →
          </button>

        </div>

        {/* Categories Cards */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-y-8 gap-x-4 justify-items-center'>

          <NavLink to="/shop">
            <div className='flex flex-col items-center w-24 gap-3'>
              <div className='h-24 w-24 flex justify-center items-center rounded-full overflow-hidden bg-white shadow-md'>
                <img className='h-16 w-16 object-cover' src='/Images/categories/mobile.webp' alt='Mobiles' />
              </div>
              <h1 className='text-base font-semibold text-slate-800'>Mobiles</h1>
            </div>
          </NavLink>

          <NavLink to="/shop">
            <div className='flex flex-col items-center w-24 gap-3'>
              <div className='h-24 w-24 flex justify-center items-center rounded-full overflow-hidden bg-white shadow-md'>
                <img className='h-16 w-16 object-cover' src='/Images/categories/dress.avif' alt='Fashion' />
              </div>
              <h1 className='text-base font-semibold text-slate-800'>Dress</h1>
            </div>
          </NavLink>

          <NavLink to="/shop">
            <div className='flex flex-col items-center w-24 gap-3'>
              <div className='h-24 w-24 flex justify-center items-center rounded-full overflow-hidden bg-white shadow-md'>
                <img className='h-20 w-16 object-cover' src='/Images/categories/headphone.webp' alt='Electronics' />
              </div>
              <h1 className='text-base font-semibold text-slate-800'>Electronics</h1>
            </div>
          </NavLink>

          <NavLink to="/shop">
            <div className='flex flex-col items-center w-24 gap-3'>
              <div className='h-24 w-24 flex justify-center items-center rounded-full overflow-hidden bg-white shadow-md'>
                <img className='h-20 w-16 object-cover' src='/Images/categories/watch.webp' alt='Watches' />
              </div>
              <h1 className='text-base font-semibold text-slate-800'>Watches</h1>
            </div>
          </NavLink>

          <NavLink to="/shop">
            <div className='flex flex-col items-center w-24 gap-3'>
              <div className='h-24 w-24 flex justify-center items-center rounded-full overflow-hidden bg-white shadow-md'>
                <img className='h-16 w-16 object-cover' src='/Images/categories/puma.webp' alt='Shoes' />
              </div>
              <h1 className='text-base font-semibold text-slate-800'>Shoes</h1>
            </div>
          </NavLink>

          <NavLink to="/shop">
            <div className='flex flex-col items-center w-24 gap-3'>
              <div className='h-24 w-24 flex justify-center items-center rounded-full overflow-hidden bg-white shadow-md'>
                <img className='h-16 w-16 object-cover' src='/Images/categories/Gaming.webp' alt='Gaming' />
              </div>
              <h1 className='text-base font-semibold text-slate-800'>Gaming</h1>
            </div>
          </NavLink>

          <NavLink to="/shop">
            <div className='flex flex-col items-center w-24 gap-3'>
              <div className='h-24 w-24 flex justify-center items-center rounded-full overflow-hidden bg-white shadow-md'>
                <img className='h-16 w-16 object-cover' src='/Images/categories/handbag.webp' alt='Accessories' />
              </div>
              <h1 className='text-base font-semibold text-slate-800'>Accessories</h1>
            </div>
          </NavLink>

          <NavLink to="/shop">
            <div className='flex flex-col items-center w-24 gap-3'>
              <div className='h-24 w-24 flex justify-center items-center rounded-full overflow-hidden bg-white shadow-md'>
                <img className='h-16 w-16 object-cover' src='/Images/categories/beautyproduct.webp' alt='Beauty' />
              </div>
              <h1 className='text-base font-semibold text-slate-800'>Beauty</h1>
            </div>
          </NavLink>

        </div>

      </div>

    </section>
  )
}

export default Categories

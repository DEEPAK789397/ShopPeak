
import React from 'react'
import { Star, Heart, ShoppingCart } from 'lucide-react'

const TrendingProduct = () => {
  return (
    <section className='w-full bg-slate-100 py-8'>
      <div>
        <h1 className='text-black'>Trending Products</h1>
        <p className='text-black text-slate-500 text-xl'>Top picks for you</p>

      </div>

      <div className='md:flex grid justify-center gap-6  p-4'>


        <div className='w-64 bg-white shadow-lg rounded-xl overflow-hidden'>
          <div className='relative h-52 w-full bg-slate-100 flex justify-center items-center'>
            <img
              className='h-full w-full object-contain p-3'
              src='/Images/categories/trendmobile.webp'
              alt='iPhone 18 Pro'
            />
            <div className='absolute top-3 right-3 flex flex-col gap-3'>
              <button className='bg-white p-2 rounded-full shadow-md'>
                <Heart className='text-black' size={18} />
              </button>
              <p className='text-sm bg-green-500 rounded-xl px-3 py-1 text-white'>
                -20%
              </p>
            </div>
          </div>
          <div className='p-4'>
            <h1 className='text-base font-bold mb-2 text-slate-900'>
              iPhone 18 Pro
            </h1>
            <p className='text-sm flex items-center gap-2 mb-3 text-slate-600'>
              <Star size={18} className='text-yellow-400 fill-yellow-400' />
              <span>4.8</span>
              <span>(12k reviews)</span>
            </p>
            <div className='flex items-center gap-3 mb-3'>
              <h2 className='text-purple-800 font-bold text-xl'>
                ₹1,20,000
              </h2>
              <p className='text-slate-500 line-through text-sm'>
                ₹1,50,000
              </p>
            </div>
            <button className='w-full text-xl flex justify-center items-center gap-2 bg-purple-800 text-white rounded-lg p-2 hover:bg-purple-900 transition'>
              <ShoppingCart size={18} />
              Add to Cart
            </button>

          </div>

        </div>

        <div className='w-64 bg-white shadow-lg rounded-xl overflow-hidden'>
          <div className='relative h-52 w-full bg-slate-100 flex justify-center items-center'>
            <img
              className='h-full w-full object-contain p-3'
              src='/Images/categories/puma.webp'
              alt='iPhone 18 Pro'
            />
            <div className='absolute top-3 right-3 flex flex-col gap-3'>
              <button className='bg-white p-2 rounded-full shadow-md'>
                <Heart className='text-black' size={18} />
              </button>
              <p className='text-sm bg-green-500 rounded-xl px-3 py-1 text-white'>
                -20%
              </p>
            </div>
          </div>
          <div className='p-4'>
            <h1 className='text-base font-bold mb-2 text-slate-900'>
              Puma Nitro
            </h1>
            <p className='text-sm flex items-center gap-2 mb-3 text-slate-600'>
              <Star size={18} className='text-yellow-400 fill-yellow-400' />
              <span>4.8</span>
              <span>(12k reviews)</span>
            </p>
            <div className='flex items-center gap-3 mb-3'>
              <h2 className='text-purple-800 font-bold text-xl'>
                ₹30,000
              </h2>
              <p className='text-slate-500 line-through text-sm'>
                ₹50,0000
              </p>
            </div>
            <button className='w-full text-xl flex justify-center items-center gap-2 bg-purple-800 text-white rounded-lg p-2 hover:bg-purple-900 transition'>
              <ShoppingCart size={18} />
              Add to Cart
            </button>

          </div>

        </div>

        <div className='w-64 bg-white shadow-lg rounded-xl overflow-hidden'>
          <div className='relative h-52 w-full bg-slate-100 flex justify-center items-center'>
            <img
              className='h-full w-full object-contain p-3'
              src='/Images/categories/headphone.jpg'
              alt='iPhone 18 Pro'
            />
            <div className='absolute top-3 right-3 flex flex-col gap-3'>
              <button className='bg-white p-2 rounded-full shadow-md'>
                <Heart className='text-black' size={18} />
              </button>
              <p className='text-sm bg-green-500 rounded-xl px-3 py-1 text-white'>
                -20%
              </p>
            </div>
          </div>
          <div className='p-4'>
            <h1 className='text-base font-bold mb-2 text-slate-900'>
              Apple Headphone
            </h1>
            <p className='text-sm flex items-center gap-2 mb-3 text-slate-600'>
              <Star size={18} className='text-yellow-400 fill-yellow-400' />
              <span>4.8</span>
              <span>(12k reviews)</span>
            </p>
            <div className='flex items-center gap-3 mb-3'>
              <h2 className='text-purple-800 font-bold text-xl'>
                ₹80,000
              </h2>
              <p className='text-slate-500 line-through text-sm'>
                ₹1,00,000
              </p>
            </div>
            <button className='w-full text-xl flex justify-center items-center gap-2 bg-purple-800 text-white rounded-lg p-2 hover:bg-purple-900 transition'>
              <ShoppingCart size={18} />
              Add to Cart
            </button>

          </div>

        </div>

        <div className='w-64 bg-white shadow-lg rounded-xl overflow-hidden'>
          <div className='relative h-52 w-full bg-slate-100 flex justify-center items-center'>
            <img
              className='h-full w-full object-contain p-3'
              src='/Images/categories/skybag.webp'
              alt='iPhone 18 Pro'
            />
            <div className='absolute top-3 right-3 flex flex-col gap-3'>
              <button className='bg-white p-2 rounded-full shadow-md'>
                <Heart className='text-black' size={18} />
              </button>
              <p className='text-sm bg-green-500 rounded-xl px-3 py-1 text-white'>
                -20%
              </p>
            </div>
          </div>
          <div className='p-4'>
            <h1 className='text-base font-bold mb-2 text-slate-900'>
              Sky Bag
            </h1>
            <p className='text-sm flex items-center gap-2 mb-3 text-slate-600'>
              <Star size={18} className='text-yellow-400 fill-yellow-400' />
              <span>4.8</span>
              <span>(12k reviews)</span>
            </p>
            <div className='flex items-center gap-3 mb-3'>
              <h2 className='text-purple-800 font-bold text-xl'>
                ₹6,000
              </h2>
              <p className='text-slate-500 line-through text-sm'>
                ₹4,000
              </p>
            </div>
            <button className='w-full text-xl flex justify-center items-center gap-2 bg-purple-800 text-white rounded-lg p-2 hover:bg-purple-900 transition'>
              <ShoppingCart size={18} />
              Add to Cart
            </button>

          </div>

        </div>
          <div className='w-64 bg-white shadow-lg rounded-xl overflow-hidden'>
          <div className='relative h-52 w-full bg-slate-100 flex justify-center items-center'>
            <img
              className='h-full w-full object-contain p-3'
              src='/Images/categories/firebolt.webp'
              alt='iPhone 18 Pro'
            />
            <div className='absolute top-3 right-3 flex flex-col gap-3'>
              <button className='bg-white p-2 rounded-full shadow-md'>
                <Heart className='text-black' size={18} />
              </button>
              <p className='text-sm bg-green-500 rounded-xl px-3 py-1 text-white'>
                -20%
              </p>
            </div>
          </div>
          <div className='p-4'>
            <h1 className='text-base font-bold mb-2 text-slate-900'>
              Fire Bolt Watch
            </h1>
            <p className='text-sm flex items-center gap-2 mb-3 text-slate-600'>
              <Star size={18} className='text-yellow-400 fill-yellow-400' />
              <span>4.8</span>
              <span>(12k reviews)</span>
            </p>
            <div className='flex items-center gap-3 mb-3'>
              <h2 className='text-purple-800 font-bold text-xl'>
                ₹1800
              </h2>
              <p className='text-slate-500 line-through text-sm'>
                ₹3000
              </p>
            </div>
            <button className='w-full text-xl flex justify-center items-center gap-2 bg-purple-800 text-white rounded-lg p-2 hover:bg-purple-900 transition'>
              <ShoppingCart size={18} />
              Add to Cart
            </button>

          </div>

        </div>

       
      </div>

    </section>
  )
}

export default TrendingProduct

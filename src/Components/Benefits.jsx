import React from 'react'
import { Truck, ShieldCheck, Headset, RefreshCcw } from 'lucide-react'

const Benefits = () => {
  return (
    <section className='bg-slate-50 text-slate-900 w-full py-8'>
      <div className='w-[85%] mx-auto flex flex-col md:flex-row justify-center items-center gap-5 md:gap-8'>
        <div className='w-full md:w-auto flex flex-col items-center text-center gap-3 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300'>          <div>
          <Truck size={45} className='text-purple-600' />
        </div>
          <div>
            <h1 className='font-bold text-xl'>Free Shipping</h1>
            <p className='text-slate-600 text-sm'>On orders over  ₹-999</p>

          </div>
        </div>

        <div className='w-full md:w-auto flex flex-col items-center text-center gap-3 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300'>          <div>
          <ShieldCheck size={45} className='text-purple-600' />
        </div>
          <div>
            <h1 className='font-bold text-xl'>Secure Payment</h1>
            <p className='text-slate-600 text-sm'>100% Secure and Safe</p>

          </div>
        </div>

        <div className='w-full md:w-auto flex flex-col items-center text-center gap-3 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300'>
          <div>
            <Headset size={45} className='text-purple-600' />
          </div>
          <div>
            <h1 className='font-bold text-xl'>24/7 Support</h1>
            <p className='text-slate-600 text-sm'>always here to help</p>

          </div>
        </div>

        <div className='w-full md:w-auto flex flex-col items-center text-center gap-3 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300'>          <div>
          <RefreshCcw size={45} className='text-purple-600' />
        </div>
          <div>
            <h1 className='font-bold text-xl'>Easy-Returns</h1>
            <p className='text-slate-600 text-sm'>Hassle free returns</p>

          </div>
        </div>










      </div>

    </section>
  )
}

export default Benefits

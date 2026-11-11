
import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  ShoppingBag,
  Truck,
  ShieldCheck,
  Headset,
  Share2,
  Globe,
  MessageCircle,
  Mail,
  MapPin,
  Phone
} from 'lucide-react'
const Footer = () => {
  return (
    <footer className='w-full bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 text-white'>

      <div className='w-[90%] mx-auto py-12'>

        {/* Main Footer */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>

          {/* Brand */}
          <div>
            <div className='flex items-center gap-2 mb-5'>
              <ShoppingBag size={35} className='text-purple-500' />
              <h1 className='text-3xl font-bold'>
                Shop<span className='text-purple-500'>Peak</span>
              </h1>
            </div>

            <p className='text-slate-300 leading-7 mb-6'>
              Discover amazing products at the best prices.
              Shop smarter, live better with ShopPeak.
            </p>

            <div className='flex flex-col gap-5'>

              <div className='flex items-center gap-3'>
                <Truck size={25} className='text-purple-400' />
                <div>
                  <h3 className='font-semibold'>Free Shipping</h3>
                  <p className='text-sm text-slate-400'>On selected orders</p>
                </div>
              </div>

              <div className='flex items-center gap-3'>
                <ShieldCheck size={25} className='text-purple-400' />
                <div>
                  <h3 className='font-semibold'>Secure Payments</h3>
                  <p className='text-sm text-slate-400'>Safe and secure checkout</p>
                </div>
              </div>

              <div className='flex items-center gap-3'>
                <Headset size={25} className='text-purple-400' />
                <div>
                  <h3 className='font-semibold'>24/7 Support</h3>
                  <p className='text-sm text-slate-400'>Always here to help</p>
                </div>
              </div>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className='text-xl font-bold mb-6'>Quick Links</h2>

            <ul className='flex flex-col gap-4 text-slate-300'>
              <li><NavLink to="/" className='hover:text-purple-400'>Home</NavLink></li>
              <li><NavLink to="/shop" className='hover:text-purple-400'>Shop</NavLink></li>
              <li><NavLink to="/wishlist" className='hover:text-purple-400'>Wishlist</NavLink></li>
              <li><NavLink to="/cart" className='hover:text-purple-400'>Cart</NavLink></li>
              <li><NavLink to="/about" className='hover:text-purple-400'>About Us</NavLink></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h2 className='text-xl font-bold mb-6'>Categories</h2>

            <ul className='flex flex-col gap-4 text-slate-300'>
              <li><NavLink to="/shop" className='hover:text-purple-400'>Mobiles</NavLink></li>
              <li><NavLink to="/shop" className='hover:text-purple-400'>Fashion</NavLink></li>
              <li><NavLink to="/shop" className='hover:text-purple-400'>Electronics</NavLink></li>
              <li><NavLink to="/shop" className='hover:text-purple-400'>Watches</NavLink></li>
              <li><NavLink to="/shop" className='hover:text-purple-400'>Accessories</NavLink></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h2 className='text-xl font-bold mb-6'>Get In Touch</h2>

            <div className='flex flex-col gap-5 text-slate-300'>

              <div className='flex items-center gap-3'>
                <Mail size={20} className='text-purple-400' />
                <span>support@shoppeak.com</span>
              </div>

              <div className='flex items-center gap-3'>
                <Phone size={20} className='text-purple-400' />
                <span>+91 98765 43210</span>
              </div>

              <div className='flex items-center gap-3'>
                <MapPin size={20} className='text-purple-400' />
                <span>India</span>
              </div>

            </div>

            <h2 className='text-lg font-semibold mt-8 mb-4'>Follow Us</h2>

            <div className='flex gap-3'>
              {[Share2, Globe, MessageCircle].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={`Social media ${index + 1}`}
                  className='h-10 w-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-purple-700 transition duration-300'
                >
                  <Icon size={19} />
                </a>
              ))}
            </div>

          </div>

        </div>

        {/* Bottom Footer */}
        <div className='border-t border-slate-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400'>

          <p>
            © 2026 <span className='text-purple-400 font-bold'>ShopPeak</span>.
            All rights reserved.
          </p>

          <div className='flex gap-5'>
            <a href="#" className='hover:text-purple-400'>Privacy Policy</a>
            <a href="#" className='hover:text-purple-400'>Terms & Conditions</a>
            <a href="#" className='hover:text-purple-400'>Return Policy</a>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer

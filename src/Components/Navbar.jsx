
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
    Heart,
    ShoppingCart,
    User,
    Moon,
    Search as SearchIcon,
    ChevronDown,
    X,
    Menu
} from 'lucide-react'

const Navbar = ({Search,SetSearch}) => {

    const [Categories, SetCategories] = useState(false)
    const [Details, SetDetails] = useState(false)
    const [menu, setMenu] = useState(false)

    return (
        <header className='fixed top-0 left-0 z-50 w-full bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950'>

            <nav className='mx-auto flex w-full flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8 text-white'>

                {/* Logo and Hamburger */}

                <div className='flex w-full items-center justify-between md:w-auto'>

                    <img
                        className='w-36 sm:w-48 md:w-60 h-auto shrink-0'
                        src='/Images/Logo.png'
                        alt="ShopPeak Logo"
                    />

                    <button
                        className='relative md:hidden'
                        onClick={() => setMenu(!menu)}
                    >
                        {menu ? <X size={26} /> : <Menu size={26} />}
                    </button>

                </div>


                {/* Desktop Navigation Links */}

                <div className='hidden md:flex items-center gap-6 lg:gap-10 font-bold'>

                    <NavLink to="/">Home</NavLink>

                    <NavLink to="/shop">Shop</NavLink>

                    {/* Categories Dropdown */}

                    <div className='relative'>

                        <button
                            onClick={() => SetCategories(!Categories)}
                            className='flex items-center justify-center'
                        >
                            Categories
                            <ChevronDown size={24} />
                        </button>

                        {Categories && (

                            <div className='absolute left-0 top-full mt-4 w-64 overflow-hidden rounded-2xl border border-purple-500/30 bg-slate-950 text-white shadow-2xl shadow-purple-950/50'>

                                <div className='bg-gradient-to-r from-purple-900 to-slate-900 p-4'>
                                    <h3 className='text-lg font-bold'>Explore Categories</h3>
                                    <p className='text-sm text-gray-300'>
                                        Find products you love
                                    </p>
                                </div>

                                <div className='flex flex-col p-2'>

                                    <NavLink to="/mobiles" className='rounded-lg px-4 py-3 hover:bg-purple-900/50'>
                                        Mobiles
                                    </NavLink>

                                    <NavLink to="/laptops" className='rounded-lg px-4 py-3 hover:bg-purple-900/50'>
                                        Laptops
                                    </NavLink>

                                    <NavLink to="/fashion" className='rounded-lg px-4 py-3 hover:bg-purple-900/50'>
                                        Fashion
                                    </NavLink>

                                    <NavLink to="/electronics" className='rounded-lg px-4 py-3 hover:bg-purple-900/50'>
                                        Electronics
                                    </NavLink>

                                </div>

                                <div className='border-t border-slate-700 p-3'>

                                    <NavLink
                                        to="/shop"
                                        className='block w-full rounded-lg bg-purple-600 py-2 text-center font-semibold hover:bg-purple-700'
                                    >
                                        View All Products
                                    </NavLink>

                                </div>

                            </div>

                        )}

                    </div>

                    <NavLink to="/about">About</NavLink>

                    <NavLink to="/contact">Contact</NavLink>

                </div>


                {/* Search + User + Dark Mode */}

                <div className='flex w-full items-center gap-3 md:w-auto md:gap-5'>

                    {/* Search Bar */}

                    <div className='flex flex-1 items-center gap-3 rounded-3xl border border-purple-500 bg-slate-600 p-2 text-white transition-all duration-300 hover:border-purple-400 md:w-80 md:flex-none md:p-3'>

                        <SearchIcon size={20} className='shrink-0 text-black' />

                        <input value={Search} onChange={(e)=>SetSearch(e.target.value)}
                            className='w-full bg-transparent outline-none'
                            placeholder='Search products...'
                        />

                    </div>


                    {/* User Dropdown */}

                    <div className='relative shrink-0'>

                        <button
                            onClick={() => SetDetails(!Details)}
                            className='flex items-center'
                        >
                            <User size={24} />
                            <ChevronDown size={20} />
                        </button>

                        {Details && (

                            <div className='absolute right-0 top-full mt-4 w-64 overflow-hidden rounded-2xl border border-purple-500/30 bg-slate-950 text-white shadow-2xl shadow-purple-950/50'>

                                <div className='bg-gradient-to-r from-purple-900 to-slate-900 p-4'>
                                    <h3 className='text-lg font-bold'>
                                        Welcome to ShopPeak
                                    </h3>
                                    <p className='text-sm text-gray-300'>
                                        Manage your account
                                    </p>
                                </div>

                                <div className='flex flex-col p-2'>

                                    <NavLink to="/profile" className='rounded-lg px-4 py-3 hover:bg-purple-900/50'>
                                        My Profile
                                    </NavLink>

                                    <NavLink to="/orders" className='rounded-lg px-4 py-3 hover:bg-purple-900/50'>
                                        My Orders
                                    </NavLink>

                                    <NavLink to="/wishlist" className='rounded-lg px-4 py-3 hover:bg-purple-900/50'>
                                        My Wishlist
                                    </NavLink>

                                    <NavLink to="/settings" className='rounded-lg px-4 py-3 hover:bg-purple-900/50'>
                                        Account Settings
                                    </NavLink>

                                </div>

                                <div className='border-t border-slate-700 p-3'>

                                    <button className='w-full rounded-lg bg-purple-600 py-2 font-semibold hover:bg-purple-700'>
                                        Login / Sign Up
                                    </button>

                                    <button className='mt-2 w-full rounded-lg py-2 text-red-400 hover:bg-red-500/10'>
                                        Logout
                                    </button>

                                </div>

                            </div>

                        )}

                    </div>


                    {/* Dark Mode Button */}

                    <button className='shrink-0 rounded-2xl bg-slate-600 p-2'>
                        <Moon className='text-black' size={24} />
                    </button>

                </div>


                {/* Desktop Wishlist and Cart */}

                <div className='hidden md:flex items-center gap-5'>

                    <NavLink
                        to="/wishlist"
                        className='relative flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 hover:bg-purple-800/50 hover:text-pink-400'
                    >
                        <Heart size={23} />

                        <span className='absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white'>
                            2
                        </span>

                    </NavLink>

                    <NavLink
                        to="/cart"
                        className='relative flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 hover:bg-purple-800/50 hover:text-pink-400'
                    >
                        <ShoppingCart size={24} />

                        <span className='absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white'>
                            2
                        </span>

                    </NavLink>

                </div>

            </nav>


            {/* Mobile Menu */}

            {menu && (

                <div className='absolute left-0 top-full z-50 flex w-full flex-col gap-5 border-t border-purple-500/30 bg-slate-950 p-4 text-white shadow-xl md:hidden'>

                    <NavLink to="/" onClick={() => setMenu(false)}>
                        Home
                    </NavLink>

                    <NavLink to="/shop" onClick={() => setMenu(false)}>
                        Shop
                    </NavLink>

                    <NavLink to="/about" onClick={() => setMenu(false)}>
                        About
                    </NavLink>

                    <NavLink to="/contact" onClick={() => setMenu(false)}>
                        Contact
                    </NavLink>

                    <NavLink
                        to="/wishlist"
                        onClick={() => setMenu(false)}
                        className='flex items-center gap-3'
                    >
                        <Heart size={20} />
                        Wishlist
                        <span className='ml-auto rounded-full bg-red-600 px-2 text-xs'>
                            2
                        </span>
                    </NavLink>

                    <NavLink
                        to="/cart"
                        onClick={() => setMenu(false)}
                        className='flex items-center gap-3'
                    >
                        <ShoppingCart size={20} />
                        Cart
                        <span className='ml-auto rounded-full bg-red-600 px-2 text-xs'>
                            2
                        </span>
                    </NavLink>

                </div>

            )}

        </header>
    )
}

export default Navbar

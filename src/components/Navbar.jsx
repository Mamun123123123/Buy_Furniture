import { CiShoppingCart } from "react-icons/ci";
import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router'
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa6";
import { CartContext } from "../context/CartContex";

const Navbar = () => {

    const [open,setOpen] = useState(false)
    const handleToggle = () =>{
        setOpen(prevState => !prevState)
    }
    const {cartCount} = useContext(CartContext)
    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 transition duration-300 ease-in-out">
                <nav className='flex bg-amber-100 justify-between md:justify-evenly items-center px-4 py-6'>
                    <div>
                        <h3>Mamun_Furniture</h3>
                    </div>
                    <div onClick={handleToggle} className="md:hidden text-xl cursor-pointer ml-auto">
                        {open ? null : <FaBars />}
                    </div>

    
                    <div className="md:hidden">

                        <div 
                            className={`${open ? "fixed" : "hidden"} inset-0 bg-black/30 backdrop-blur-sm z-40`} 
                            onClick={handleToggle}
                        ></div>

    
                        <div className={`
                            ${open ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0 pointer-events-none"}
                            fixed top-5 left-1/2 -translate-x-1/2 w-[90%] 
                            bg-white z-50 rounded-2xl shadow-2xl p-5 
                            transition-all duration-300
                        `}>


                            <div className="flex justify-end mb-4">
                                <ImCross 
                                    onClick={handleToggle}
                                    className="cursor-pointer text-red-500 hover:rotate-90 transition duration-300"
                                />
                            </div>

                            <ul className="flex flex-col gap-3">

                                <li>
                                    <NavLink 
                                        className={({isActive})=> 
                                            isActive 
                                            ? "block text-green-700 font-semibold bg-green-50 px-4 py-2 rounded-xl" 
                                            : "block hover:text-green-500 hover:bg-gray-100 px-4 py-2 rounded-xl transition"
                                        } 
                                        to="/"
                                    >
                                        Home
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink 
                                        className={({isActive})=> 
                                            isActive 
                                            ? "block text-green-700 font-semibold bg-green-50 px-4 py-2 rounded-xl" 
                                            : "block hover:text-green-500 hover:bg-gray-100 px-4 py-2 rounded-xl transition"
                                        } 
                                        to="/about"
                                    >
                                        About
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink 
                                        className={({isActive})=> 
                                            isActive 
                                            ? "block text-green-700 font-semibold bg-green-50 px-4 py-2 rounded-xl" 
                                            : "block hover:text-green-500 hover:bg-gray-100 px-4 py-2 rounded-xl transition"
                                        } 
                                        to="/shop"
                                    >
                                        Shop
                                    </NavLink>
                                </li>
                                 <li>
                                    <NavLink 
                                        className={({isActive})=> 
                                            isActive 
                                            ? "block text-green-700 font-semibold bg-green-50 px-4 py-2 rounded-xl" 
                                            : "block hover:text-green-500 hover:bg-gray-100 px-4 py-2 rounded-xl transition"
                                        } 
                                        to="/cart"
                                    >
                                        Cart({cartCount})
                                    </NavLink>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div>
                        <ul className='hidden md:flex gap-6'>
                            <li><NavLink className={({isActive})=> isActive? "text-green-700 font-semibold":"hover:text-green-500"} to="/">Home</NavLink></li>
                            <li><NavLink className={({isActive})=> isActive? "text-green-700 font-semibold":"hover:text-green-500"} to="/about">About</NavLink></li>
                            <li><NavLink className={({isActive})=> isActive? "text-green-700 font-semibold":"hover:text-green-500"} to="/shop">Shop</NavLink></li>
                            <li><NavLink className={({isActive})=> isActive? "text-green-700 font-semibold":"hover:text-green-500"} to="/cart">Cart({cartCount})</NavLink></li>
                        </ul>
                    </div>
                    <div className='hidden md:block cursor-pointer relative'>
                        <CiShoppingCart className="text-3xl"/>
                        <sup className="absolute top-0 -right-3 bg-amber-500 text-white h-5 w-5 rounded-full flex items-center justify-center text-sm">
                            {cartCount}
                        </sup>
                    </div>

                </nav>
            </header>
        </>
    )
}

export default Navbar
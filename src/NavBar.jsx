import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png'
import cartlogo from './images/cartlogo.png'
import { useShoppingCart } from './context/ShoppingCartContext';
import ShoppingCart from './ShoppingCart';
import loginmen from './images/loginmen.png'

export default function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSideOpen, setIsSideOpen] = useState(false)
    const { cartQuantity } = useShoppingCart()


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSide = () => {
        setIsSideOpen(!isSideOpen)
    }


    return (
        <>
        <div  className='sticky top-0 z-20 '>
            <nav>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-1 flex justify-between py-8 mb-10">
                    <div className="relative z-1 flex items-center gap-16">
                        <Link as={Link} to="/" aria-label="Home">
                            <img alt='logo' src={logo} className='bg-white bg-opacity-80 rounded-full min-w-[80px] h-[80px] lg:w-[150px] lg:min-h-[150px] ml-2' />
                        </Link>
                        
                        {/* Desktop Navigation Links */}
                        
                        <div className="hidden lg:flex lg:gap-10 bg-white bg-opacity-80 rounded-full p-2">
                            <Link as={Link} to="/planthoodie" className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-emerald-50 hover:delay-0">
                                <span className="relative z-1">Plant Products</span>
                            </Link>

                            <Link as={Link} to="/sustainability" className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-emerald-50 hover:delay-0" >
                                <span className="relative z-1">Sustainability</span>
                            </Link>
                            <Link as={Link} to="/contactus" className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-emerald-50 hover:delay-0">
                                <span className="relative z-1">Contact</span>
                            </Link>
                        </div>

                    </div>
                    <div className="flex items-center w-full lg:w-auto">
                        {/* Mobile Menu Toggle Button */}
                        <h1 className="lg:hidden w-11/12 text-center lg:w-auto lg:text-left bg-white bg-opacity-80 rounded-full"></h1>

                        <div className="flex items-center">         
                            
                            <button onClick={toggleSide} className="md:hidden justify-center  py-2 px-2 text-sm font-semibold outline-2 outline-offset-2 transition-colors  text-black hover:bg-emerald-200 flex items-center relative bg-white bg-opacity-80 rounded-full mr-1">
                                {/* Shopping Cart Icon */}
                                <img  className="pr-3 min-h-6 max-h-6 min-w-9 -mr-2 " src={cartlogo}alt='cart'></img>
                                
                            <div className='rounded-full flex justify-center items-center bg-emerald-400 text-white -bottom-2 -left-2' style={{width: '1.5rem', height: '1.5rem', position: 'absolute'}}>{cartQuantity}</div>
                            </button>
                                
                            
                            
                        </div>


                        
                        

                        
                        <div className="lg:hidden bg-white bg-opacity-80 rounded-full ">
                            
                            <button
                                onClick={toggleMenu}
                                className="relative z-1 inline-flex items-center rounded-full stroke-gray-900 p-2 hover:bg-emerald-200"
                                aria-label="Toggle site navigation"
                                type="button"
                                aria-expanded={isMenuOpen}
                            >
                                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
                                    {isMenuOpen ? (
                                        // Close (X) Icon
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        
                                        // Hamburger Icon
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center gap-6">
                            <button className="justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-emerald-50 text-black hover:bg-emerald-200 hidden lg:flex items-center relative ">
                                {/* Shopping Cart Icon */}
                                <img style={{height: '2.5vh'}} className="pr-3" src={loginmen}alt='login'></img>
                                Login
                            
                            </button>
                            {/* <img style={{height: '2.5vh'}} className="pr-3" src={loginmen}alt='cart'></img>login         
                            <Link className=" justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-emerald-50 text-black hover:bg-emerald-200 active:bg-gray-800 active:text-white/80 hidden lg:block" to="/">Login</Link> */}
                            <button onClick={toggleSide} className="justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-emerald-50 text-black hover:bg-emerald-200 hidden lg:flex items-center relative">
                                {/* Shopping Cart Icon */}
                                <img style={{height: '2.5vh'}} className="pr-3" src={cartlogo}alt='cart'></img>
                                Checkout
                            <div className='rounded-full flex justify-center items-center bg-emerald-400 text-white -bottom-2 -left-2' style={{width: '1.5rem', height: '1.5rem', position: 'absolute'}}>{cartQuantity}</div>
                            </button>
                                
                            
                            
                        </div>
                    </div>
                </div>
                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    
                    <div className="-mt-10 lg:hidden bg-white shadow-md mb-20">
                        
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Link onClick={toggleMenu} to="/planthoodie" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-emerald-50 hover:text-black">Plant Products</Link>  
                            <Link onClick={toggleMenu} to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-emerald-50 hover:text-black">Sustainability</Link>
                            <Link onClick={toggleMenu} to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-emerald-50 hover:text-black">Contact</Link>
                            {/* Mobile Login and Checkout Buttons */}
                            <Link to="/planthoodie" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-emerald-50 hover:text-black">Log in</Link>
                            <button  onClick={toggleSide} className="w-full flex items-center px-3 py-2 rounded-md text-base font-semibold text-black bg-emerald-50 hover:bg-emerald-200">
                                {/* Shopping Cart Icon */}
                                <img style={{height: '3vh'}} className="pr-3" src="https://cdn-icons-png.flaticon.com/512/468/468209.png" alt="..." />
                                Checkout
                            </button>
                            
                            
                        </div>
                    </div>
                )}
            </nav>
        </div>
        {!isSideOpen ?
                <></> :

                (
                    <button onClick={toggleSide} className="fixed top-4 right-4 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 focus:outline-none z-40 "
                    aria-label="Close sidebar" type="button">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button> 
            )
        }
        <ShoppingCart isSideOpen={isSideOpen}/>
                    
    </>
    )
}

import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSideOpen, setIsSideOpen] = useState(false)


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSide = () => {
        setIsSideOpen(!isSideOpen)
    }

    function handleCheckout() {
        fetch("http://localhost:3001/create-checkout-session", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                items: [
                    { id: 1, quantity: 3 },
                    { id: 2, quantity: 1 },
                ],
            }),
        })
            .then(res => {
                if (res.ok) return res.json()
                return res.json().then(json => Promise.reject(json))
            })
            .then(({ url }) => {
                window.location = url

            })
            .catch(e => {
                console.error(e.error)
            })

    }

    return (
        <>
        
        <div>
            
            <nav className=''>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-1 flex justify-between py-8 mb-10">
                    <div className="relative z-1 flex items-center gap-16">
                        <Link as={Link} to="/" aria-label="Home">
                            <img alt='logo' src="https://i.imgur.com/VEKlVcj.png" className='w-[80px] h-[80px] lg:w-[150px] lg:h-[150px]' />
                        </Link>
                        {/* Desktop Navigation Links */}
                        <div className="hidden lg:flex lg:gap-10">
                            <Link as={Link} to="/planthoodie" className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-emerald-50 hover:delay-0">
                                <span className="relative z-1">Plant Hoodie</span>
                            </Link>

                            <Link as={Link} to="/sustainability" className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-emerald-50 hover:delay-0" >
                                <span className="relative z-1">Sustainability</span>
                            </Link>
                            <Link as={Link} to="/contactus" className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-emerald-50 hover:delay-0">
                                <span className="relative z-1">Contact</span>
                            </Link>
                        </div>

                    </div>
                    <div className="flex items-center gap-6">
                        {/* Mobile Menu Toggle Button */}
                        <div className="lg:hidden">
                            <button
                                onClick={toggleMenu}
                                className="relative z-1 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 focus:outline-none"
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
                            <a className=" justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-emerald-50 text-black hover:bg-gray-900 active:bg-gray-800 active:text-white/80 hidden lg:block" href="/">Login</a>
                            <button onClick={toggleSide} className="justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-emerald-50 text-black hover:bg-emerald-200 hidden lg:flex items-center">
                                {/* Shopping Cart Icon */}
                                <img style={{height: '2.5vh'}} className="pr-3" src='https://cdn-icons-png.flaticon.com/512/468/468209.png' alt='cart'></img>
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-white shadow-md mb-20">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-emerald-50 hover:text-black">Plant Hoodie</Link>  
                            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-emerald-50 hover:text-black">Sustainability</Link>
                            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-emerald-50 hover:text-black">Contact</Link>
                            {/* Mobile Login and Checkout Buttons */}
                            <Link href="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-emerald-50 hover:text-black">Log in</Link>
                            <button onClick={toggleSide} className="w-full flex items-center px-3 py-2 rounded-md text-base font-semibold text-black bg-emerald-50 hover:bg-emerald-200">
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
                    <button onClick={toggleSide} className="fixed top-4 right-4 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 focus:outline-none z-20 "
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
        <div className={`top-0 right-0 fixed bg-emerald-200 w-[90vw] h-full z-10 p-10 flex sm:w-[90vw] lg:w-[35vw] transition-all duration-300 ease-in-out ${isSideOpen ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300`}>
                        {/* Same X Icon as the mobile menu */}
                        
                        <img style={{ height: '3.5vh' }} className="pr-3" src="https://cdn-icons-png.flaticon.com/512/468/468209.png" alt="..." />
                        <h2 className='text-2xl pr-2'>Checkout</h2>
                        <div className='fixed mt-20 ml-5'>{`Your cart is empty :(`} </div>
                        <button onClick={handleCheckout}>Buy one now</button>
                    </div>
    </>
    )
}

import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

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
    <header>
                <nav>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-50 flex justify-between py-8">
                        <div className="relative z-10 flex items-center gap-16">
                            <Link as={Link} to="/" aria-label="Home">
                                <img alt='logo' src="https://i.imgur.com/VEKlVcj.png" width="150" height="150"/>
                            </Link>
                            {/* Desktop Navigation Links */}
                            <div className="hidden lg:flex lg:gap-10">
                                <Link as={Link} to="/planthoodie" className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-red-500 hover:delay-0">
                                    <span className="relative z-10">Plant Hoodie</span>
                                </Link>
                        
                                <Link as={Link} to="/sustainability" className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-red-500 hover:delay-0" >
                                    <span className="relative z-10">Sustainability</span>
                                </Link>
                                <Link as={Link} to="/contactus" className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-red-500 hover:delay-0">
                                    <span className="relative z-10">Contact</span>
                                </Link>
                            </div>
                            
                        </div>
                        <div className="flex items-center gap-6">
                            {/* Mobile Menu Toggle Button */}
                            <div className="lg:hidden">
                                <button 
                                    onClick={toggleMenu}
                                    className="relative z-10 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 focus:outline-none" 
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
                                <a className="inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80 hidden lg:block" href="/login">Log in</a>
                                <a className="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80 hidden lg:block" href="/">Login</a>
                                <button onClick={handleCheckout} className="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80 hidden lg:flex items-center">
                                    {/* Shopping Cart Icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3" />
                                    </svg>
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Mobile Navigation Menu */}
                    {isMenuOpen && (
                        <div className="lg:hidden bg-white shadow-md">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                <a href="/#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50">Men's Wear</a>
                                <a href="/#reviews" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50">Women's Wear</a>
                                <a href="/#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50">Sustainability</a>
                                <a href="/#faqs" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50">Contact</a>
                                {/* Mobile Login and Checkout Buttons */}
                                <a href="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50">Log in</a>
                                <button onClick={handleCheckout} className="w-full flex items-center px-3 py-2 rounded-md text-base font-semibold text-white bg-gray-800 hover:bg-gray-900">
                                    {/* Shopping Cart Icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3" />
                                    </svg>
                                    Checkout
                                </button>
                            </div>
                        </div>
                    )}
                </nav>
        </header>
  )
}

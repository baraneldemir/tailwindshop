import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import cartlogo from '../images/cartlogo.png';
import { useShoppingCart } from '../context/ShoppingCartContext';
import ShoppingCart from './ShoppingCart';
import loginmen from '../images/loginmen.png';


export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSideOpen, setIsSideOpen] = useState(false);
    const { cartQuantity } = useShoppingCart();
    const [lastScrollPosition, setLastScrollPosition] = useState(0);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Optional: adds smooth scrolling
        });
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSide = () => {
        setIsSideOpen(!isSideOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPosition = window.pageYOffset

            // Close the menu when scrolling down
            if (currentScrollPosition > lastScrollPosition && isMenuOpen) {
                setIsMenuOpen(false);
            }

            // Update the last scroll position
            setLastScrollPosition(currentScrollPosition);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollPosition, isMenuOpen]);

    return (
        <>
            <div className='sticky top-0 z-20'>
                <nav>
                    <div className="relative flex justify-between px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8 z-1">
                        <div className="relative flex items-center gap-16 z-1">
                            <Link to="/" aria-label="Home" onTouchStart={scrollToTop} onClick={() => {scrollToTop();}}>
                                <img alt='logo' src={logo} className='bg-white bg-opacity-80 rounded-full min-w-[80px] h-[80px] lg:w-[150px] lg:min-h-[150px] ml-2' />
                            </Link>

                            {/* Desktop Navigation Links */}
                            <div className="hidden p-2 bg-white rounded-full lg:flex lg:gap-10 bg-opacity-80">
                                <Link to="/planthoodie" className="relative px-3 py-2 text-sm text-gray-700 rounded-lg hover:text-emerald-50 hover:delay-0">
                                    <span className="relative z-1">Plant Products</span>
                                </Link>
                                <Link to="/sustainability" className="relative px-3 py-2 text-sm text-gray-700 rounded-lg hover:text-emerald-50 hover:delay-0">
                                    <span className="relative z-1">Sustainability</span>
                                </Link>
                                <Link to="/contactus" className="relative px-3 py-2 text-sm text-gray-700 rounded-lg hover:text-emerald-50 hover:delay-0">
                                    <span className="relative z-1">Contact</span>
                                </Link>
                                <Link to="/slide" className="relative px-3 py-2 text-sm text-gray-700 rounded-lg hover:text-emerald-50 hover:delay-0">
                                    <span className="relative z-1">Slide</span>
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center w-full lg:w-auto">
                            {/* Mobile Menu Toggle Button */}
                            <div className="w-11/12 text-center lg:hidden lg:w-auto lg:text-left"></div>
                            <div className="flex items-center">
                                
                                <button onClick={toggleSide} className="relative flex items-center justify-center px-2 py-2 mr-1 text-sm font-semibold text-black bg-white rounded-full md:hidden outline-2 outline-offset-2 hover:bg-emerald-200 bg-opacity-80">
                                    <img className="pr-3 -mr-2 min-h-6 max-h-6 min-w-9" src={cartlogo} alt='cart' />
                                    <div className='flex items-center justify-center text-white rounded-full bg-emerald-400 -bottom-2 -left-2' style={{ width: '1.5rem', height: '1.5rem', position: 'absolute' }}>{cartQuantity}</div>
                                </button>
                            </div>

                            <div className="bg-white rounded-full lg:hidden bg-opacity-80 ">
                                <button
                                    onClick={toggleMenu}
                                    className="relative inline-flex items-center p-2 rounded-full z-1 stroke-gray-900 hover:bg-emerald-200"
                                    aria-label="Toggle site navigation"
                                    type="button"
                                    aria-expanded={isMenuOpen}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
                                        {isMenuOpen ? (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        ) : (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                        )}
                                    </svg>
                                </button>
                            </div>
                            <div className="flex items-center gap-6">
                                <button className="relative items-center justify-center hidden px-3 py-2 text-sm font-semibold text-black rounded-lg outline-2 outline-offset-2 bg-emerald-50 hover:bg-emerald-200 lg:flex">
                                    <img style={{ height: '2.5vh' }} className="pr-3" src={loginmen} alt='login' />
                                    Login
                                </button>
                                <button onClick={toggleSide} className="relative items-center justify-center hidden px-3 py-2 text-sm font-semibold text-black transition-colors rounded-lg outline-2 outline-offset-2 bg-emerald-50 hover:bg-emerald-200 lg:flex">
                                    <img style={{ height: '2.5vh' }} className="pr-3" src={cartlogo} alt='cart' />
                                    Checkout
                                    <div className='flex items-center justify-center text-white rounded-full bg-emerald-400 -bottom-2 -left-2' style={{ width: '1.5rem', height: '1.5rem', position: 'absolute' }}>{cartQuantity}</div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Navigation Menu */}
                    <div className={`top-0 fixed w-full lg:hidden h-[90vw] transition-all duration-700 ease-in-out ${isMenuOpen ? 'translate-y-44' : '-translate-y-full'} ease-in-out duration-1000`}>
                        <div className="mb-20 -mt-10 bg-white shadow-md">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                <Link onClick={() => { toggleMenu(); scrollToTop(); }} to="/planthoodie" className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-emerald-50 hover:text-black ">Plant Products</Link>
                                <Link onClick={() => { toggleMenu(); scrollToTop(); }} to="/aboutus" className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-emerald-50 hover:text-black ">About Us</Link>
                                <Link onClick={() => { toggleMenu(); scrollToTop(); }} to="/sustainability" className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-emerald-50 hover:text-black">Sustainability</Link>
                                <Link onClick={() => { toggleMenu(); scrollToTop(); }} to="/contactus" className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-emerald-50 hover:text-black">Contact</Link>
                                <Link to="/planthoodie" onClick={() => { toggleMenu(); scrollToTop(); }} className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-emerald-50 hover:text-black">Log in</Link>
                                <button onClick={() => { toggleMenu(); toggleSide(); scrollToTop(); }} className="flex items-center w-full px-3 py-2 text-base font-semibold text-black rounded-md bg-emerald-50 hover:bg-emerald-200">
                                    <img style={{ height: '3vh' }} className="pr-3" src="https://cdn-icons-png.flaticon.com/512/468/468209.png" alt="..." />
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            {!isSideOpen ? null : (
                <button onClick={toggleSide} className="fixed z-40 inline-flex items-center p-2 rounded-lg top-4 right-4 stroke-gray-900 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 focus:outline-none" aria-label="Close sidebar" type="button">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            )}
            <ShoppingCart toggleSide={toggleSide} setIsSideOpen={setIsSideOpen} isSideOpen={isSideOpen} />
        </>
    );
}

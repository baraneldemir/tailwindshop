import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',  // Optional: adds smooth scrolling
    });
  }

  return (
    <footer className="relative pt-8 pb-6 bg-gray-800">
      <div className="absolute top-0 left-0 right-0 bottom-auto w-full -mt-20 overflow-hidden pointer-events-none" style={{height: "80px"}}>
        <svg className="absolute bottom-0 overflow-hidden"  preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
          <polygon className="text-gray-800 fill-current" points="2560 0 2560 150 0 100">
          </polygon>
        </svg>
      </div>
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full px-4 md:w-6/12">
            <h4 className="text-3xl font-semibold text-white">Let's keep in touch!</h4>
            <h5 className="mt-0 mb-2 text-lg text-white">Find us on any of these platforms, we respond 1-2 business days.</h5>
            <div className="mt-6">
              <a href="https://www.twitter.com/" onClick={scrollToTop}>
                <i className="items-center justify-center inline-block p-3 mr-2 text-center bg-white rounded-full shadow-lg outline-none fab fa-twitter text-lightBlue-400 font-lg align-center focus:outline-none">
                </i>
              </a>
              <a href="https://www.twitter.com" onClick={scrollToTop}>
                <i className="items-center justify-center inline-block p-3 mr-2 text-center text-blue-600 bg-white rounded-full outline-none fab fa-facebook font-lg align-center focus:outline-none">
                </i>
              </a>
              <a href="https://www.twitter.com/" onClick={scrollToTop}>
                <i className="items-center justify-center inline-block p-3 mr-2 text-center text-pink-400 bg-white rounded-full shadow-lg outline-none fab fa-dribbble font-lg align-center focus:outline-none">
                </i>
              </a>
              <a href="https://www.github.com" onClick={scrollToTop} >
                <i className="items-center justify-center inline-block p-3 mr-2 text-center bg-white rounded-full shadow-lg outline-none fab fa-github text-blueGray-800 font-lg align-center focus:outline-none">
                </i>
              </a>
            </div>
            <p className="mt-6 text-sm font-semibold text-white">All rights reserved.</p>
          </div>
          <div className="w-full px-4 md:w-6/12">
            <div className="flex mb-6 items-top">
              <div className="pt-6 md:w-6/12 xl:w-4/12 md:pt-0 md:px-4">
                <span className="mb-2 text-sm font-semibold text-white uppercase ">Useful Links</span>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/sustainability" onTouchStart={scrollToTop} onClick={scrollToTop} className="block pb-2 text-sm font-semibold hover:text-white ">About Us</Link>
                  </li>
                  <li>
                    <Link to="/contactus" onTouchStart={scrollToTop} onClick={scrollToTop} className="block pb-2 text-sm font-semibold hover:text-white ">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/sustainability" onTouchStart={scrollToTop} onClick={scrollToTop} className="block pb-2 text-sm font-semibold hover:text-white ">Shipping Policy</Link>
                  </li>
                  <li>
                    <Link to="/sustainability" onTouchStart={scrollToTop} onClick={scrollToTop} className="block pb-2 text-sm font-semibold hover:text-white">90-Day Money Back Policy</Link>
                  </li>
                </ul>
              </div>
              <div className="pt-6 ml-auto md:w-6/12 xl:w-4/12 md:pt-0 md:px-4">
                <span className="block mb-2 text-sm font-semibold text-white uppercase">Other Resources</span>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/sustainability" onClick={scrollToTop} className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-white">Terms &amp; Conditions</Link>
                  </li>
                  <li>
                    <Link to="/sustainability" onClick={scrollToTop} className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-white">Refund Policy</Link>
                  </li>
                  <li>
                    <Link to="/sustainability" onClick={scrollToTop} className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-white">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/sustainability" onClick={scrollToTop} className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-white">Intellectual Property Rights</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      <hr className="my-6 border-white"></hr> 
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="w-full px-4 mx-auto text-center md:w-4/12">
            <div className="py-1 text-sm font-semibold text-white">
              Copyright © 2024 baraneldemir
            </div>
          </div>
        </div>
      </div>
    </footer> 
  )
}

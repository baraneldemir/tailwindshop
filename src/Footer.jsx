import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="relative bg-gray-800 pt-8 pb-6">
      <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20" style={{height: "80px"}}>
        <svg className="absolute bottom-0 overflow-hidden"  preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
          <polygon className="text-gray-800 fill-current" points="2560 0 2560 150 0 100">
          </polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-white">Let's keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2 text-white">Find us on any of these platforms, we respond 1-2 business days.</h5>
            <div className="mt-6">
              <a href="https://www.twitter.com/" >
                <i className="fab fa-twitter bg-white text-lightBlue-400 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center">
                </i>
              </a>
              <a href="https://www.facebook.com/creativetim" >
                <i className="fab fa-facebook bg-white text-blue-600  font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center">
                </i>
              </a>
              <a href="https://www.dribbble.com/creativetim" >
                <i className="fab fa-dribbble bg-white text-pink-400 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center">
                </i>
              </a>
              <a href="https://www.github.com/creativetimofficial" >
                <i className="fab fa-github bg-white text-blueGray-800 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center">
                </i>
              </a>
            </div>
            <p className="text-sm mt-6 text-white font-semibold">All rights reserved</p>
          </div>
          <div className="w-full md:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full md:w-6/12 xl:w-4/12 pt-6 md:pt-0 md:px-4 ml-auto">
                <span className="block uppercase text-white text-sm font-semibold mb-2">Useful Links</span>
                <ul className="list-unstyled">
                  <li>
                    <Link className="text-blueGray-600 hover:text-white font-semibold block pb-2 text-sm">About Us</Link>
                  </li>
                  <li>
                    <Link className="text-blueGray-600 hover:text-white font-semibold block pb-2 text-sm">Contact Us</Link>
                  </li>
                  <li>
                    <Link className="text-blueGray-600 hover:text-white font-semibold block pb-2 text-sm">Shipping Policy</Link>
                  </li>
                  <li>
                    <Link className="text-blueGray-600 hover:text-white font-semibold block pb-2 text-sm">90-Day Money Back Policy</Link>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-6/12 xl:w-4/12 pt-6 md:pt-0 md:px-4 ml-auto">
                <span className="block uppercase text-white text-sm font-semibold mb-2">Other Resources</span>
                <ul className="list-unstyled">
                  <li>
                    <Link className="text-blueGray-600 hover:text-white font-semibold block pb-2 text-sm">Terms &amp; Conditions</Link>
                  </li>
                  <li>
                    <Link className="text-blueGray-600 hover:text-white font-semibold block pb-2 text-sm">Refund Policy</Link>
                  </li>
                  <li>
                    <Link className="text-blueGray-600 hover:text-white font-semibold block pb-2 text-sm">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link className="text-blueGray-600 hover:text-white font-semibold block pb-2 text-sm">Intellectual Property Rights</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      <hr className="my-6 border-white"></hr> 
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-white font-semibold py-1">
              Copyright © 2024 baraneldemir
            </div>
          </div>
        </div>
      </div>
    </footer> 
  )
}

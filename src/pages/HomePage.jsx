import React from 'react'
import { Link } from 'react-router-dom'
// import men1 from '../images/men1.png'
import women1 from '../images/women1.png'
import ecosia from '../images/ecosia.png'
import ecosia2 from '../images/ecosia2.png'
import ecosia3 from '../images/ecosia3.png'
import ecosia4 from '../images/ecosia4.png'
// import ecosia5 from '../images/ecosia5.png'
import ecosia6 from '../images/ecosia6.png'
// import bej from '../images/bejkiyafet.png'
import bej2 from '../images/beyazkiyafet.png'
import bej3 from '../images/clothes.png'
import bej4 from '../images/girlplant.png'
// import bej5 from '../images/global.png'
// import bej6 from '../images/kiyafet.png'
// import bej7 from '../images/kiyafet3.png'
import bej8 from '../images/mountains.png'
import bej9 from '../images/World.png'
// import bej10 from '../images/worldreal.png'
import Carousel from '../components/Carousel'



export default function HomePage() {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', 
        });
      }
      
    return (
        <> 
            <div className="relative flex-auto bg-emerald-50">
            

                <div className="absolute top-0 left-0 right-0 bottom-auto w-full -mt-20" style={{ height: "80px" }}>
                    <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                        <polygon className="fill-current text-emerald-50" points="2560 0 2560 150 0 100">
                        </polygon>
                    </svg>
                </div>
                <div className="py-5 overflow-hidden shadow-xl sm:py-3 lg:pb-32 xl:pb-36">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
                            <div className="relative max-w-2xl px-4 mx-auto z-1 lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
                                <h1 className="mt-5 text-4xl font-medium text-gray-900">Grow Comfort, Wear Change.</h1>
                                <p className="mt-10 text-sm text-gray-600">At Plant Hoodie, we create comfortable, eco-friendly hoodies made from sustainably sourced materials. With every purchase, you're helping support environmental initiatives like tree planting and waste reduction. Wear something that feels good and does good.</p>
                                {/* <div className="flex flex-wrap mt-8 gap-x-6 gap-y-4">
                                <a aria-label="Download on the App Store" className="text-white transition-colors bg-gray-800 rounded-lg hover:bg-gray-900" href="/">
                                    <svg viewBox="0 0 120 40" aria-hidden="true" className="h-10">
                                        <path fill="currentColor" d="M24.769 20.301a4.947 4.947 0 0 1 2.357-4.152 5.066 5.066 0 0 0-3.992-2.157c-1.679-.177-3.307 1.004-4.163 1.004-.872 0-2.19-.987-3.608-.958a5.315 5.315 0 0 0-4.473 2.728c-1.934 3.349-.491 8.27 1.361 10.976.927 1.326 2.01 2.806 3.428 2.753 1.387-.057 1.905-.884 3.58-.884 1.658 0 2.144.884 3.59.851 1.489-.024 2.426-1.331 3.32-2.669a10.96 10.96 0 0 0 1.52-3.092 4.782 4.782 0 0 1-2.92-4.4ZM22.037 12.211a4.872 4.872 0 0 0 1.115-3.49 4.957 4.957 0 0 0-3.208 1.66 4.635 4.635 0 0 0-1.143 3.36 4.099 4.099 0 0 0 3.236-1.53ZM42.302 27.14H37.57l-1.137 3.356h-2.005l4.484-12.418h2.083l4.483 12.418h-2.039l-1.136-3.356Zm-4.243-1.55h3.752l-1.85-5.446h-.051l-1.85 5.447ZM55.16 25.97c0 2.813-1.506 4.62-3.779 4.62a3.068 3.068 0 0 1-2.848-1.584h-.043v4.485H46.63V21.442h1.8v1.506h.033a3.21 3.21 0 0 1 2.883-1.6c2.298 0 3.813 1.816 3.813 4.622Zm-1.91 0c0-1.833-.948-3.039-2.393-3.039-1.42 0-2.375 1.23-2.375 3.038 0 1.825.955 3.046 2.375 3.046 1.445 0 2.392-1.196 2.392-3.046ZM65.124 25.97c0 2.813-1.505 4.62-3.778 4.62a3.07 3.07 0 0 1-2.848-1.584h-.043v4.485h-1.859V21.442h1.799v1.506h.034a3.21 3.21 0 0 1 2.883-1.6c2.298 0 3.813 1.816 3.813 4.621Zm-1.91 0c0-1.834-.947-3.039-2.392-3.039-1.42 0-2.375 1.23-2.375 3.038 0 1.825.955 3.046 2.375 3.046 1.445 0 2.392-1.196 2.392-3.046ZM71.71 27.036c.138 1.232 1.335 2.04 2.97 2.04 1.566 0 2.693-.808 2.693-1.919 0-.964-.68-1.54-2.29-1.936l-1.609-.388c-2.28-.55-3.339-1.617-3.339-3.348 0-2.142 1.867-3.614 4.519-3.614 2.624 0 4.423 1.472 4.483 3.614h-1.876c-.112-1.239-1.136-1.987-2.634-1.987-1.497 0-2.521.757-2.521 1.858 0 .878.654 1.395 2.255 1.79l1.368.336c2.548.603 3.606 1.626 3.606 3.443 0 2.323-1.85 3.778-4.793 3.778-2.754 0-4.614-1.42-4.734-3.667h1.902ZM83.346 19.3v2.142h1.722v1.472h-1.722v4.991c0 .776.345 1.137 1.102 1.137.204-.004.408-.018.611-.043v1.463c-.34.064-.686.092-1.032.086-1.833 0-2.548-.689-2.548-2.444v-5.19h-1.316v-1.472h1.316V19.3h1.867ZM86.065 25.97c0-2.849 1.678-4.639 4.294-4.639 2.625 0 4.295 1.79 4.295 4.639 0 2.856-1.661 4.638-4.295 4.638-2.633 0-4.294-1.782-4.294-4.638Zm6.695 0c0-1.954-.895-3.108-2.401-3.108-1.506 0-2.4 1.162-2.4 3.108 0 1.962.894 3.106 2.4 3.106 1.506 0 2.401-1.144 2.401-3.106ZM96.186 21.442h1.772v1.541h.043a2.16 2.16 0 0 1 2.178-1.636c.214 0 .428.023.637.07v1.738a2.594 2.594 0 0 0-.835-.112 1.872 1.872 0 0 0-1.937 2.083v5.37h-1.858v-9.054ZM109.384 27.837c-.25 1.643-1.85 2.771-3.898 2.771-2.634 0-4.269-1.764-4.269-4.595 0-2.84 1.644-4.682 4.191-4.682 2.505 0 4.08 1.72 4.08 4.466v.637h-6.395v.112a2.353 2.353 0 0 0 .639 1.832 2.364 2.364 0 0 0 1.797.732 2.045 2.045 0 0 0 2.091-1.273h1.764Zm-6.282-2.702h4.526a2.167 2.167 0 0 0-.608-1.634 2.168 2.168 0 0 0-1.612-.664 2.293 2.293 0 0 0-2.306 2.298ZM37.826 8.731a2.64 2.64 0 0 1 2.808 2.965c0 1.906-1.03 3.002-2.808 3.002h-2.155V8.731h2.155Zm-1.228 5.123h1.125a1.877 1.877 0 0 0 1.967-2.146 1.881 1.881 0 0 0-1.967-2.133h-1.125v4.28ZM41.68 12.445a2.133 2.133 0 1 1 4.248 0 2.132 2.132 0 1 1-4.247 0Zm3.334 0c0-.976-.439-1.547-1.209-1.547-.772 0-1.206.57-1.206 1.547 0 .984.434 1.55 1.207 1.55.769 0 1.208-.57 1.208-1.55ZM51.573 14.697h-.922l-.93-3.316h-.07l-.927 3.316h-.913l-1.242-4.503h.902l.806 3.436h.067l.925-3.436h.853l.926 3.436h.07l.803-3.436h.889l-1.237 4.503ZM53.853 10.195h.856v.715h.066a1.348 1.348 0 0 1 1.344-.802 1.466 1.466 0 0 1 1.559 1.675v2.915h-.889v-2.692c0-.724-.314-1.084-.972-1.084a1.034 1.034 0 0 0-1.075 1.141v2.635h-.889v-4.503ZM59.094 8.437h.888v6.26h-.888v-6.26ZM61.218 12.444a2.133 2.133 0 1 1 4.248 0 2.134 2.134 0 1 1-4.248 0Zm3.333 0c0-.976-.439-1.547-1.208-1.547-.772 0-1.207.57-1.207 1.547 0 .984.435 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55ZM66.4 13.425c0-.81.604-1.278 1.676-1.344l1.22-.07v-.39c0-.475-.315-.744-.922-.744-.497 0-.84.183-.939.5h-.86c.09-.773.818-1.269 1.84-1.269 1.128 0 1.765.562 1.765 1.514v3.076h-.855v-.633h-.07a1.515 1.515 0 0 1-1.353.707 1.36 1.36 0 0 1-1.501-1.347Zm2.895-.385v-.376l-1.1.07c-.62.041-.9.252-.9.65 0 .405.351.64.834.64a1.062 1.062 0 0 0 1.166-.984ZM71.348 12.444c0-1.423.732-2.324 1.87-2.324a1.484 1.484 0 0 1 1.38.79h.067V8.437h.888v6.26h-.851v-.711h-.07a1.563 1.563 0 0 1-1.415.785c-1.145 0-1.869-.9-1.869-2.327Zm.918 0c0 .955.45 1.53 1.203 1.53.75 0 1.212-.583 1.212-1.526 0-.939-.468-1.53-1.212-1.53-.748 0-1.203.579-1.203 1.526ZM79.23 12.445a2.133 2.133 0 1 1 4.247 0 2.132 2.132 0 1 1-4.247 0Zm3.333 0c0-.976-.439-1.547-1.208-1.547-.773 0-1.207.57-1.207 1.547 0 .984.434 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55ZM84.67 10.195h.855v.715h.066a1.349 1.349 0 0 1 1.344-.802 1.466 1.466 0 0 1 1.559 1.675v2.915h-.889v-2.692c0-.724-.315-1.084-.972-1.084a1.034 1.034 0 0 0-1.075 1.141v2.635h-.889v-4.503ZM93.515 9.074v1.142h.976v.748h-.976v2.316c0 .472.195.678.637.678.113 0 .226-.007.339-.02v.74c-.16.028-.322.043-.484.045-.988 0-1.382-.348-1.382-1.216v-2.543h-.714v-.748h.715V9.074h.89ZM95.705 8.437h.88v2.481h.07a1.386 1.386 0 0 1 1.374-.807 1.485 1.485 0 0 1 1.55 1.679v2.907h-.889V12.01c0-.719-.335-1.083-.963-1.083a1.05 1.05 0 0 0-1.134 1.141v2.63h-.888v-6.26ZM104.761 13.482a1.823 1.823 0 0 1-1.951 1.302 2.047 2.047 0 0 1-2.08-2.324 2.093 2.093 0 0 1 .071-.88 2.08 2.08 0 0 1 2.005-1.473c1.253 0 2.009.856 2.009 2.27v.31h-3.18v.05a1.19 1.19 0 0 0 1.2 1.29 1.077 1.077 0 0 0 1.071-.545h.855Zm-3.126-1.452h2.275a1.094 1.094 0 0 0-.667-1.084 1.086 1.086 0 0 0-.442-.082 1.151 1.151 0 0 0-1.166 1.166Z"></path>
                                    </svg>
                                </a>
                                <a className="inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80" variant="outline" color="gray" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-none w-6 h-6">
                                        <circle cx="12" cy="12" r="11.5" stroke="#D4D4D4"></circle>
                                        <path d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z" fill="#A3A3A3" stroke="#A3A3A3"></path>
                                    </svg>
                                    <span className="ml-2.5">Watch the video</span>
                                </a>
                            </div> */}
                            </div>
                            <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 ">
                                <div className='relative'>
                                    <Link to='/'><img alt='women' src={women1} /></Link>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center py-2 text-white">
                                        <span className="text-lg font-bold text-center md:text-2xl">Give yourself a new look</span>
                                        <button onClick={scrollToTop} className="px-5 py-2 text-2xl font-bold duration-500 bg-black bg-opacity-50 border-2 md:text-2xl md:mt-2 rounded-xl hover:bg-emerald-200 "><Link to="/planthoodie" >Shop Now!</Link></button>
                                    </div>
                                    
                                </div>

                            </div>
                            <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
                                {/* <p className="text-sm font-semibold text-center text-gray-900 lg:text-left">Partners</p> */}
                                <ul className="flex flex-wrap justify-center max-w-xl mx-auto mt-8 gap-x-7 gap-y-8 lg:mx-0 lg:justify-start">

                                    <li className="flex">
                                        <img alt="TechCrunch" className="h-16" src={ecosia} />
                                    </li>
                                    <li className="flex">
                                        <img alt="Wired" loading="lazy" className="h-16" src={ecosia2} />
                                    </li>
                                    {/* <li className="flex xl:block">
                                    <img alt="CNN" loading="lazy" width="68" height="32" decoding="async" data-nimg="1" className="h-8" style={{ color:"transparent"}} src="https://i.imgur.com/3K4nUGl.png"/>
                                </li>
                                <li className="flex">
                                    <img alt="BBC" loading="lazy" width="83" height="32" decoding="async" data-nimg="1" className="h-8" style={{ color:"transparent"}} src="https://i.imgur.com/3K4nUGl.png"/>
                                </li> */}
                                    <li className="flex">
                                        <img alt="CBS" loading="lazy" className="h-16" src={ecosia3} />
                                    </li>
                                    <li className="flex">
                                        <img alt="Fast Company" className="h-16" src={ecosia4} />
                                    </li>
                                    {/* <li className="flex">
                                        <img alt="HuffPost" loading="lazy" width="142" height="32" src={ecosia5} />
                                    </li> */}
                                    <li className="flex">
                                        <img alt="Fast Company" loading="lazy" width="124" height="32" src={ecosia6} />
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="absolute bottom-0 left-0 right-0 top-auto w-full -mb-21" style={{height:"80px"}}>
                <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                    <polygon className="text-white fill-current "  points="2560 0 2560 150 0 100">
                    </polygon>
                </svg>
            </div> */}

            </div>

            {/* <div>
                <h1>Messages</h1>
                        <ul>
                            {persons.length === 0 ? (
                                <li>No messages available</li>
                            ) : (
                                persons.map((person, index) => (
                                    <li key={index}>{person.message}</li>
                                ))
                            )}
                        </ul>
                    </div> */}
            <section className="relative pb-5 mt-40 bg-gray-100">
                <div className="absolute top-0 left-0 right-0 bottom-auto w-full -mt-20" style={{ height: "80px" }}>
                    <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                        <polygon className="text-gray-100 fill-current " points="2560 0 2560 150 0 100">
                        </polygon>
                    </svg>
                </div>
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="-mt-32 w-12/12 md:ml-auto md:mr-auto md:w-6/12 lg:w-4/12 md:px-4">
                            <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-green-100 rounded-lg shadow-2xl">
                                <img alt="..." src={bej8} className="w-full align-middle rounded-t-lg" />
                                <blockquote className="relative p-8 mb-4">
                                    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute left-0 block w-full" style={{ height: "95px", top: "-94px" }}>
                                        <polygon points="-30,95 583,95 583,65" className="text-green-100 fill-current">
                                        </polygon>
                                    </svg>
                                    <h4 className="text-2xl font-bold text-black">Perfect for Your Sustainable Wardrobe</h4>
                                    <p className="mt-2 text-sm font-light text-black">Creating your eco-friendly wardrobe has never been easier. Mix and match from our thoughtfully designed collections. From casual styles to cozy essentials, you can easily find and customize your perfect hoodie for any occasion.</p>
                                    {/* <button className="flex-auto"><Link to="/planthoodie" >Shop Now!</Link></button> */}
                                </blockquote>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12">
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-6/12">
                                    {/* First Box */}
                                    <div className="relative flex flex-col mt-4 min-h-[300px]">
                                        <div className="flex-auto px-4 py-5">
                                        <div className="w-auto h-full mb-10 bg-white md:w-40 md:h-full lg:w-56 lg:h-full">
                                                <img src={bej4} alt="..." />
                                            </div>
                                            <hr className="my-6 border-4 rounded-full border-emerald-300"></hr> 
                                            <h6 className="mb-1 text-2xl font-semibold">Eco-Friendly Materials</h6>
                                            <p className="mb-4 text-sm text-blueGray-500">Our hoodies are crafted from sustainably sourced, plant-based fibers, ensuring comfort and environmental responsibility.</p>
                                        </div>
                                    </div>

                                    {/* Second Box */}
                                    <div className="relative flex flex-col min-w-0 min-h-[300px]">
                                        <div className="flex-auto px-4 py-5">
                                        <div className="w-auto h-full mb-10 bg-white md:w-40 md:h-full lg:w-56 lg:h-full">
                                                <img src={bej3} alt="..." />
                                            </div>
                                            <hr className="my-6 border-4 rounded-full border-emerald-300"></hr> 
                                            <h6 className="mb-1 text-2xl font-semibold">Innovative Designs</h6>
                                            <p className="mb-4 text-sm text-blueGray-500">Discover our collection of stylish and functional hoodies that feature eco-conscious designs perfect for any occasion.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full md:w-6/12">
                                    {/* Third Box */}
                                    <div className="relative flex flex-col min-w-0 mt-4 min-h-[300px]">
                                        <div className="flex-auto px-4 py-5">
                                            <div className="w-auto h-full mb-10 bg-white md:w-40 md:h-full lg:w-56 lg:h-full">
                                                <img src={bej2} alt="..." />
                                            </div>
                                            <hr className="my-6 border-4 rounded-full border-emerald-300"></hr> 
                                            <Link to="/planthoodie" className='hover:underline' onClick={scrollToTop}><h6 className="mb-1 text-2xl font-semibold">Shop Our Collection</h6></Link>
                                            <p className="mb-4 text-sm text-blueGray-500">Explore our fully curated collection with detailed descriptions, so you can find the perfect hoodie that aligns with your values.</p>
                                        </div>
                                    </div>

                                    {/* Fourth Box */}
                                    <div className="relative flex flex-col min-w-0 min-h-[300px]">
                                        <div className="flex-auto px-4 py-5 ">
                                            <div className="w-auto h-full mb-10 bg-white md:w-40 md:h-full lg:w-56 lg:h-full">
                                                <img src={bej9} alt="..." />
                                            </div>
                                            <hr className="my-6 border-4 rounded-full border-emerald-300"></hr> 
                                            <h6 className="mb-1 text-2xl font-semibold">Sustainability Promise</h6>
                                            <p className="mb-4 text-sm text-blueGray-500">Designed by eco-conscious innovators for nature lovers. You'll love how easy it is to embrace sustainability with our plant-based hoodie collection.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section >
            <Carousel/>
        </>
    )
}

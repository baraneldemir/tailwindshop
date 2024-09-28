
import { useState } from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'
import FormatCurrency from '../utilities/FormatCurrency'
import './StoreItem.css'
import useAnimateOnScroll from '../hooks/AnimateOnScroll'

export default function StoreItem({ id, name, price, imgUrl }) {

    const { increaseCartQuantity} = useShoppingCart()
    // const quantity = getItemQuantity(id)
    const [selectedSize, setSelectedSize] = useState("")
    useAnimateOnScroll()

    function handleSizeSelection(size){
        setSelectedSize(size)
    }

    




    return (
        <div  className="relative m-1 mx-1 overflow-hidden ">
            <div className="overflow-hidden rounded ">
            <button className="absolute top-2 right-2  inline-flex items-center justify-center gap-2 rounded-lg   p-2.5 text-sm font-medium text-white ">
                    <svg className="w-8 h-8 hover:fill-emerald-300 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"></path>
                    </svg>
                </button>
                <img className="relative z-0 transition-all duration-300 rounded-lg notLeftAnimated hover:scale-125 min-h-52 min-w-52 lg:min-h-96 lg:min-w-96 dark:hidden" src={imgUrl} alt="hoodie"  />
            </div>
            
                <div>
                <p className="text-sm font-semibold text-gray-900 hover:underline dark:text-white">{name}</p>

                <div className='flex flex-row py-1 '>
                    {["XS","S","M","L","XL"].map(size => (
                        <button
                            key={size}
                            className={`w-1/5 p-1 px-2 border border-black hover:bg-emerald-50 ${selectedSize === size ? 'bg-emerald-300' : '' }`}
                            onClick={()=> handleSizeSelection(size)}
                            >
                            {size}
                        </button>
                    ))}

                </div>
                    {/* display selection */}
                    {selectedSize && (
                        <>
                        <p className='mt-2 text-sm text-emerald-400'>Selected size: {selectedSize}</p>
                        <p onClick={() => handleSizeSelection("")} className='text-sm text-red-500 hover:underline hover:cursor-pointer '>Clear Selection</p>
                        </>
                    )}
                    
                <p className="text-xs text-gray-500 ">Carefully made</p>
                <p className="text-xs text-gray-900 dark:text-white">
                    <span className="line-through">{FormatCurrency(69.99)}</span>
                </p>
                <div className='flex flex-row'>
                <p className="text-lg text-black-600">{FormatCurrency(price)}</p>
                
                <button onClick={() => increaseCartQuantity(id)} className="inline-flex items-center justify-center px-5 ml-2 text-sm font-medium text-black border-2 rounded-lg bg-primary-700 hover:bg-emerald-50 " disabled={!selectedSize}>
                    <img className="h-5 pr-2" src="https://cdn-icons-png.flaticon.com/512/468/468209.png" alt="..." />
                    Add to cart
                </button>
                </div>
                </div>
            
            <div className="mt-6 flex items-center gap-2.5">
                
                
                
            </div>
        </div>



    )
}

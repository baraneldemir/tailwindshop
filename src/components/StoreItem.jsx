import { useState, useRef } from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'
import FormatCurrency from '../utilities/FormatCurrency'
import './StoreItem.css'
import useAnimateOnScroll from '../hooks/AnimateOnScroll'
import { RxBookmarkFilled } from 'react-icons/rx'

export default function StoreItem({ id, name, price, imgUrl }) {
    const { increaseCartQuantity } = useShoppingCart()
    const [selectedSize, setSelectedSize] = useState("")
    const [animating, setAnimating] = useState(false)
    const [cloneStyle, setCloneStyle] = useState({})
    const [buttonText, setButtonText] = useState("Add to Cart") // To track button text
    const [buttonDisabled, setButtonDisabled] = useState(false) // To prevent spamming the button
    const imgRef = useRef(null)
    const [isShowSaved, setIsShowSaved] = useState(false);
    useAnimateOnScroll()

    function handleSizeSelection(size) {
        setSelectedSize(size)
    }
    function handleSaveText() {
        setIsShowSaved(true)
        setTimeout(() => setIsShowSaved(false), 1500)
    }

    function addToCart() {
        if (!imgRef.current) return

        // Disable the button temporarily and change the text
        setButtonText("Added!")
        setButtonDisabled(true)

        const img = imgRef.current
        const imgRect = img.getBoundingClientRect()

        // Clone the image and apply initial style
        const cloneStyle = {
            position: 'fixed',
            top: imgRect.top,
            left: imgRect.left,
            width: imgRect.width,
            height: imgRect.height,
            opacity: 0.8,
            zIndex: 1000,
            transition: 'all 1s ease-in-out',
        }

        


        setCloneStyle(cloneStyle)
        setAnimating(true)

        const topRightX = window.innerWidth - 50 // Adjust as per your cart icon
        const topRightY = 50

        setTimeout(() => {
            setCloneStyle({
                ...cloneStyle,
                top: topRightY,
                left: topRightX,
                width: '50px',
                height: '50px',
                opacity: 0,
                zIndex: 1000,
            })
        }, 0)

        setTimeout(() => {
            setAnimating(false)
            increaseCartQuantity(id, selectedSize)
            handleSizeSelection("")

            // Reset the button after 2 seconds
            setTimeout(() => {
                setButtonText("Add to Cart")
                setButtonDisabled(false)
            }, 2000) // Change this duration if you want a shorter/longer delay
        }, 1000)
    }

    return (
        <div className="relative overflow-hidden">
            <div className="mt-1 overflow-hidden">
                <button onClick={handleSaveText} className="absolute  left-0 inline-flex items-center justify-center gap-2  p-2.5 text-sm font-medium text-green-800">
                    
                    <RxBookmarkFilled className="z-10 w-6 h-6 hover:text-green-600"/>
                    <span className='z-10 bg-white rounded-lg opacity-80'>
                    {isShowSaved ? "Item Saved!" : ""}
                    </span>
                </button>
                <img ref={imgRef} className="relative z-0 transition-all duration-300 notLeftAnimated hover:scale-125 min-h-52 min-w-40 lg:min-h-96 lg:min-w-96 dark:hidden" src={imgUrl} alt="hoodie" />
            </div>

            <div>
                <p className="mt-2 text-sm hover:underline dark:text-white">{name}</p>

                <div className='flex-row py-1 text-xs '>
                    {["XS", "S", "M", "L", "XL"].map(size => (
                        <button
                            key={size}
                            className={`w-7 p-1   border rounded-full mr-1 border-slate-400 hover:bg-slate-400 hover:text-white ${selectedSize === size ? 'bg-slate-700 text-white' : ''}`}
                            onClick={() => handleSizeSelection(size)}
                        >
                            {size}
                        </button>
                    ))}
                </div>

                {selectedSize && (
                    <>
                        <p className='text-sm text-black '>Selected size: {selectedSize}</p>
                        <p onClick={() => handleSizeSelection("")} className='text-sm text-red-500 hover:underline hover:cursor-pointer'>Clear Selection</p>
                    </>
                )}
                
                {/* <p className="text-xs text-gray-500">Carefully made</p> */}
                
                <p className="text-sm text-gray-900 line-through dark:text-white">
                        {FormatCurrency(69.99)}
                    </p>
                    
                <div className='relative flex flex-row mb-2'>
                    
                    <p className="ml-3 text-sm text-red-500 text-black-600">{FormatCurrency(price)}</p>
                    <button
                        onClick={addToCart}
                        className={` absolute inline-flex items-center border-slate-400 justify-center p-1 text-sm  text-black border rounded-lg right-3 -bottom-2 bg-primary-700  transition-all duration-300 ${buttonDisabled || !selectedSize ? 'opacity-50 ' : 'hover:text-white  hover:bg-slate-400 cursor-pointer'}`}
                        disabled={buttonDisabled || !selectedSize}
                    >
                        <img className="h-4 pr-2" src="https://cdn-icons-png.flaticon.com/512/468/468209.png" alt="cart icon" />
                        {buttonText}
                    </button>
                </div>
            </div>

            {/* Clone for animation */}
            {animating && (
                <img src={imgUrl} alt="animated clone" style={cloneStyle} className="cloned-image" />
            )}
        </div>
    )
}

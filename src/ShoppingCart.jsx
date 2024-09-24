import React from 'react'
import { useShoppingCart } from './context/ShoppingCartContext'
import CartItem from './CartItem'
import storeItems from "./data/data.json"
import FormatCurrency from './utilities/FormatCurrency'

export default function ShoppingCart({ isSideOpen }) {

    const { cartItems } = useShoppingCart()

    const items = cartItems.map(cartItem => {
        const item = storeItems.find(i => i.id === cartItem.id)
        return item ? { id: cartItem.id, quantity: cartItem.quantity } : null
    }).filter(item => item !== null)

    function handleCheckout() {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/create-checkout-session`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                items: items,
            }),
        })
        .then(res => {
            if (!res.ok) {
                return res.json().then(json => {
                    throw new Error(json.error || "Failed to create checkout session");
                });
            }
            return res.json();
        })
        .then(({ url }) => {
            if (url) {
                window.location = url;
            } else {
                throw new Error("URL not provided by Stripe.");
            }
        })
        .catch(e => {
            console.error("Checkout error:", e);
            alert(e.message || "An error occurred during checkout.");
        });
    }
    
    return (
        <>
        <div className={`top-0 right-0 fixed bg-emerald-400 w-[90vw] h-full z-30 p-10 flex flex-col sm:w-[90vw] lg:w-[35vw] transition-all duration-300 ease-in-out ${isSideOpen ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300`}>
            <div className="flex items-center mb-10 justify-center">
                <img style={{ height: '3.5vh' }} className="pr-3" src="https://cdn-icons-png.flaticon.com/512/468/468209.png" alt="..." />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>
            </div>

            {cartItems.length === 0 ? (
                <div className="flex justify-center items-center  ">
                    <div className="mb-96 text-lg font-semibold text-gray-700">Your cart is empty</div>
                </div>
            ) : (
                <>
                    <div className="overflow-y-auto">
                        {cartItems.map(item => (
                            <div key={item.id}>
                                <CartItem {...item} />
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-between items-center mt-4">
                        <div className="ml-auto font-bold text-sm">
                            Total{" "} 
                            {FormatCurrency(cartItems.reduce((total, cartItem) => {
                                const item = storeItems.find(i => i.id === cartItem.id)
                                return total + (item?.price || 0) * cartItem.quantity
                            }, 0))}
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center flex-grow mt-6">
                        <button onClick={handleCheckout} className='border-2 border-white px-4 py-2'>
                            Go to Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
        </>
    )
}

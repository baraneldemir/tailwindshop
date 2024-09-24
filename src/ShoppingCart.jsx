import React from 'react'
import { useShoppingCart } from './context/ShoppingCartContext'
import CartItem from './CartItem'
import storeItems from "./data/data.json"

export default function ShoppingCart({ isSideOpen}) {

    const { cartItems } = useShoppingCart()

    const items = cartItems.map(cartItem => {
        const item = storeItems.find(i => i.id === cartItem.id)
        return item ? { id: cartItem.id, quantity: cartItem.quantity } : null
    }).filter(item => item !== null)

    // const item = storeItems.find(i => i.id === id)
    // if ( item == null) return null

    // const items = cartItems.map(item => ({
    //     id: id,
    //     quantity: quantity
    // }));
    

    function handleCheckout() {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/create-checkout-session`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                items: items,  // Ensure `items` is properly defined
            }),
        })
        .then(res => {
            // Ensure the fetch response is checked correctly
            if (!res.ok) {
                return res.json().then(json => {
                    throw new Error(json.error || "Failed to create checkout session");
                });
            }
            return res.json();  // Ensure a valid JSON response
        })
        .then(({ url }) => {
            if (url) {
                window.location = url;  // Redirect to the Stripe checkout page
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
        <div className={`top-0 right-0 fixed bg-emerald-200 w-[90vw] h-full z-10 p-10 flex flex-col sm:w-[90vw] lg:w-[35vw] transition-all duration-300 ease-in-out ${isSideOpen ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300`}>
            <div className="flex items-center mb-10">
                <img style={{ height: '3.5vh' }} className="pr-3" src="https://cdn-icons-png.flaticon.com/512/468/468209.png" alt="..." />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>
            </div>

            

            
            
            


            <div >
                <div >
                    {cartItems.map(item => (
                <div>
                    <CartItem key={item.id} {...item}/>
                </div>
                ))}
                </div>
            </div>

            <div className='flex flex-col justify-center items-center flex-grow'>
                <div className='mb-10'>
                    {/* {`Your cart is empty :(`} */}
                </div>
                <button onClick={handleCheckout}  className='border-2 border-white px-4 py-2'>Go to Checkout</button>
            </div>


        </div>
            
        </>

    )
}

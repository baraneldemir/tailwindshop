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
        {/* Overlay */}
        {isSideOpen && (
            <div className="fixed inset-0 z-20 bg-black opacity-50 " />
        )}
        <div className={`top-0 right-0 fixed bg-white w-[90vw] h-full z-30 p-10 flex flex-col sm:w-[90vw] lg:w-[35vw] transition-all duration-300 ease-in-out ${isSideOpen ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300`}>
            <div className="flex items-center justify-center mb-10">
                <img style={{ height: '3.5vh' }} className="pr-3" src="https://cdn-icons-png.flaticon.com/512/468/468209.png" alt="..." />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>
            </div>

            {cartItems.length === 0 ? (
                <div className="flex items-center justify-center ">
                    <div className="text-lg font-semibold text-gray-700 mb-96">Your cart is empty</div>
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

                    <div className="flex items-center justify-between mt-4">
                        <div className="ml-auto text-sm font-bold">
                            Total{" "} 
                            {FormatCurrency(cartItems.reduce((total, cartItem) => {
                                const item = storeItems.find(i => i.id === cartItem.id)
                                return total + (item?.price || 0) * cartItem.quantity
                            }, 0))}
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center flex-grow mt-6">
                        <button onClick={handleCheckout} className='px-4 py-2 border-2 border-gray-100 rounded-lg bg-gray-50 hover:bg-slate-500'>
                            Go to Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
        </>
    )
}

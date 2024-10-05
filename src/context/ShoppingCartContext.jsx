import { useContext, createContext } from "react"

import useLocalStorage from "../hooks/useLocalStorage"

const ShoppingCartContext = createContext()

export function useShoppingCart() {
    return useContext (ShoppingCartContext)
}

export function ShoppingCartProvider ({children}) {
    const [cartItems, setCartItems]= useLocalStorage("Shopping Cart", [])

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
    )

    function getItemQuantity(id) {
        return cartItems.find(item => item.id ===id)?.quantity || 0
    }

    function increaseCartQuantity(id, selectedSize) {
        setCartItems(currItems => {
            const existingItem = currItems.find(item => item.id === id && item.size === selectedSize);
            
            if (existingItem == null) {
                return [...currItems, { id, quantity: 1, size: selectedSize }];
            } else {
                return currItems.map(item => {
                    if (item.id === id && item.size === selectedSize) {
                        return { ...item, quantity: item.quantity + 1, size: selectedSize };
                    } else {
                        return item;
                    }
                });
            }
        });
    }
    

    function decreaseCartQuantity(id) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1 ) {
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id, selectedSize) {
        setCartItems(currItems => {
        return (
            console.log(id, selectedSize),
            currItems.filter(item => item.id !== id || item.size !== selectedSize)
        )

    })
    }

    return (
        <ShoppingCartContext.Provider value={{
            getItemQuantity, 
            increaseCartQuantity, 
            decreaseCartQuantity, 
            removeFromCart,
            cartItems,
            cartQuantity
            }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
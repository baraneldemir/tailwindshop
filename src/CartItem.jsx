import React from 'react'
import { useShoppingCart } from './context/ShoppingCartContext'
import storeItems from "./data/data.json"
import FormatCurrency from './utilities/FormatCurrency'

export default function CartItem({id, quantity}) {

    const { removeFromCart, increaseCartQuantity, decreaseCartQuantity} = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if ( item == null) return null

    
  return (
    <>
        {/* <div className='row'>
            <ul>
                <li>
                    <img src={item.imgUrl} style={{width: "125px", height: "75px", objectFit:"cover"}} alt='...'></img>
                   
                </li>
            </ul>
        </div> */}
    
    
    <div class="mx-auto  px-4 2xl:px-0">
    
    <div class="mt-6 sm:mt-8 md:gap-6 flex lg:items-start xl:gap-8">
      <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
        <div class="space-y-6">
    <div class="rounded-lg border h-40 border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
            <div class="space-y-4 flex items-center md:justify-between md:gap-6 md:space-y-0">
              
                <img class="h-20 w-20 dark:hidden" src={item.imgUrl} alt="..." />
                

              
              

              <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
              <p class="ml-5">{item.name}</p>

                <div class="flex items-center ">
                  {/* <button type="button" class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                    <svg class="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                    </svg>
                    Add to Favorites
                  </button> */}
                  

                  <button onClick={()=> removeFromCart(item.id)} class="inline-flex items-center text-sm ml-4 text-red-600 hover:underline ">
                    <svg class="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                    </svg>
                    Remove
                  </button>
                  
                </div>
                <div class="flex items-center justify-between order-3 ">
                <div class="flex items-center space-x-2 ml-4">
                  <button onClick={() => decreaseCartQuantity(item.id)} id="decrement-button" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                  <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                    </svg>
                  </button>
                  <p>x{quantity}</p>
                  <button onClick={() => increaseCartQuantity(item.id)} id="increment-button" data-input-counter-increment="counter-input" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                    </svg>
                  </button>
                </div>
                <div class="text-end md:order-4 md:w-32">
                  <p class="text-base font-bold text-gray-900 dark:text-white">{FormatCurrency(item.price * quantity)}</p>
                </div>
              </div>
              </div>
            </div>
          </div>


          </div>
            </div>
          </div>
          </div>
          
          </>
  )
}

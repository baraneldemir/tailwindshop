
import { useShoppingCart } from './context/ShoppingCartContext'

export default function StoreItem({ id, name, price, imgUrl }) {

    const { getItemQuantity, increaseCartQuantity} = useShoppingCart()
    // const quantity = getItemQuantity(id)

    return (
        <div class="mx-1 m-1 overflow-hidden">
            <a href="/" class="overflow-hidden rounded">
                <img class=" min-h-52 min-w-52 lg:min-h-96 lg:min-w-96  dark:hidden" src={imgUrl} alt="hoodie" />
            </a>
            <div>
                <a href="/" class="text-sm font-semibold  text-gray-900 hover:underline dark:text-white">{name}</a>
                <p class="text-xs text-gray-500 ">Carefully made</p>
                <p class="text-xs  text-gray-900 dark:text-white">
                    <span class="line-through">69.99£</span>
                </p>
                <p class="text-lg   text-black-600">{price}£</p>
            </div>
            <div class="mt-6 flex items-center gap-2.5">
                <button class="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                    <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"></path>
                    </svg>
                </button>
                <div class=" invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-black opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                    Add to favourites
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button onClick={() => increaseCartQuantity(id)} className="inline-flex  items-center justify-center rounded-lg bg-primary-700 border-2 px-5 py-2.5 text-sm font-medium  text-black hover:bg-emerald-50 ">
                    <img className="h-5 pr-2" src="https://cdn-icons-png.flaticon.com/512/468/468209.png" alt="..." />
                    Add to cart
                </button>
            </div>
        </div>



    )
}

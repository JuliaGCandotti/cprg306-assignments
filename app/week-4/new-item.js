"use client";

import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1); //initializing with quantity of 1 as we cannot add 0 to the cart.

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
        
    return (
        <div>
            <button onClick={decrement} disabled={quantity <= 1} className={`m-2 p-2 font-bold text-2xl text-black rounded transition-all
                    ${quantity <= 1 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-400 hover:bg-blue-500 active:bg-blue-600"}`}>-</button>
            {quantity}
            <button onClick={increment} disabled={quantity >= 20} className={`m-2 p-2 font-bold text-2xl text-black rounded transition-all 
                    ${quantity >= 20 ? "bg-gray-400 cursor-not-allowed" : "bg-orange-400 hover:bg-orange-500 active:bg-orange-600"}`}>+</button>
        </div>
    )
}
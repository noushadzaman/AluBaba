'use client'

import { CartContext } from "@/context";
import { useState } from "react";

const CartProvider = ({ children, dbCart }) => {
    const [cart, setCart] = useState(dbCart || []);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
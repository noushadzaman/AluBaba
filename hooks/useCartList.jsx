'use client'

import { CartContext } from "@/context";
import { useContext } from "react";

const useCartList = () => {
    const { cart, setCart } = useContext(CartContext)
    return { cart, setCart };
};

export default useCartList;
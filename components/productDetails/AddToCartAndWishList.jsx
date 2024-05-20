"use client";

import { updateUserCart, updateUserWishList } from "@/app/actions";
import Link from "next/link";
import { useState } from "react";

const AddToCartAndWishList = ({ productId, userEmail }) => {
    const [items, setItems] = useState(1);

    async function updateWishlist() {
        await updateUserWishList({ userEmail, productId });
    }

    async function updateCart() {
        await updateUserCart({ userEmail, productId, items });
    }

    function decreaseItem() {
        if (items <= 0) {
            return;
        }
        setItems(items - 1);
    }

    function increaseItem() {
        setItems(items + 1);
    }

    return (
        <>
            <div class="mt-4">
                <h3 class="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
                <div class="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                    <button
                        onClick={decreaseItem}
                        class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                        -
                    </button>
                    <div class="h-8 w-8 text-base flex items-center justify-center">
                        {items}
                    </div>
                    <button
                        onClick={increaseItem}
                        class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                        +
                    </button>
                </div>
            </div>

            <div class="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
                <Link
                    onClick={updateCart}
                    href="/cart"
                    class="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
                >
                    <i class="fa-solid fa-bag-shopping"></i> Add to cart
                </Link>
                <Link
                    onClick={updateWishlist}
                    href="/wishlist"
                    class="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition"
                >
                    <i class="fa-solid fa-heart"></i> Wishlist
                </Link>
            </div>
        </>
    );
};

export default AddToCartAndWishList;
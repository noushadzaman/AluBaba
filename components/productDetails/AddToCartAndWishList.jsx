"use client";

import { updateUserCart, updateUserWishList } from "@/app/actions";
import useCartList from "@/hooks/useCartList";
import useWishList from "@/hooks/useWishList";
import { calculatePrice } from "@/utils";
import Link from "next/link";
import { useState } from "react";

const AddToCartAndWishList = ({ product, userEmail }) => {
    const { wishlist, setWishlist } = useWishList();
    const { cart, setCart } = useCartList();
    const productId = product?.id;
    const foundInCart = cart.find(cartItem => cartItem.productId === productId);
    const foundInWishlist = wishlist.find((wish) => wish === productId);
    const [items, setItems] = useState(foundInCart?.number || 1);

    async function updateWishlist() {
        await updateUserWishList({ userEmail, productId });
        if (foundInWishlist) {
            const newWishes = wishlist.filter((wish) => wish !== productId);
            setWishlist([
                ...newWishes
            ])
        } else {
            setWishlist([
                ...wishlist,
                productId
            ])
        }
    }

    async function updateCart() {
        await updateUserCart({ userEmail, productId, items });
        if (foundInCart) {
            const newCart = cart.filter(cartItem => cartItem.productId !== productId);
            const deletedItem = cart.find(cartItem => cartItem.productId === productId);
            if (deletedItem?.number === items) {
                setCart([
                    ...newCart,
                ])
            } else {
                setCart([
                    ...newCart,
                    { productId, number: deletedItem.number - items }
                ])
            }
        }
        else {
            setCart([
                ...cart,
                { productId, number: items }
            ])
        }
    }

    function decreaseItem() {
        if (items <= 1) {
            return;
        }
        setItems(items - 1);
    }

    function increaseItem() {
        if (foundInCart && items === foundInCart?.number) {
            return
        }
        setItems(items + 1);
    }



    return (
        <>
            <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
                <p className="text-xl text-primary font-semibold">$
                    {
                        calculatePrice(product?.discount, product?.price, items)
                    }
                </p>
                {
                    product?.discount &&
                    <p className="text-base text-gray-400 line-through">
                        {(product?.price) * items}
                    </p>
                }
            </div>
            <p className="mt-4 text-gray-600">
                {product?.description?.short_description}
            </p>
            <div className="mt-4">
                <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
                <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                    <button
                        onClick={decreaseItem}
                        className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                        -
                    </button>
                    <div className="h-8 w-8 text-base flex items-center justify-center">
                        {items}
                    </div>
                    <button
                        onClick={increaseItem}
                        className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                        +
                    </button>
                </div>
            </div>
            <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
                <Link
                    onClick={updateCart}
                    href="/cart"
                    className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
                >
                    <i className="fa-solid fa-bag-shopping"></i>
                    {foundInCart ? "Remove from cart" : "Add to cart"}
                </Link>
                <Link
                    onClick={updateWishlist}
                    href="/wishlist"
                    className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition"
                >
                    <i className="fa-solid fa-heart"></i>
                    {foundInWishlist ? "Remove from wishlist" : "Add to wishlist"}
                </Link>
            </div>
        </>
    );
};

export default AddToCartAndWishList;
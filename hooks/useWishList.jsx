'use client'
import { WishListContext } from "@/context";
import { useContext } from "react";

const useWishList = () => {
    const { wishlist, setWishlist } = useContext(WishListContext)
    return { wishlist, setWishlist };
};

export default useWishList;
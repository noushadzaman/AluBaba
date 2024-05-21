'use client'
import { WishListContext } from "@/context";
import { useState } from "react";

const WishlistProvider = ({ children, dbWishList }) => {
    const [wishlist, setWishlist] = useState(dbWishList || []);

    return (
        <WishListContext.Provider value={{ wishlist, setWishlist }}>
            {children}
        </WishListContext.Provider>
    );
};

export default WishlistProvider;
'use client';

import ProductCardTwo from "../ProductCardTwo";
import useWishList from "@/hooks/useWishList";

const Wishlist = ({ dict }) => {
    const { wishlist } = useWishList();

    return (
        <div className="mx-auto space-y-4 max-w-6xl">
            {wishlist &&
                wishlist.map((itemId) => (
                    <ProductCardTwo key={itemId} itemId={itemId} dict={dict} />
                ))}
            {!wishlist && <p>No items in the wishlist</p>}
        </div>
    );
};

export default Wishlist;
'use client'
import useCartList from "@/hooks/useCartList";
import ProductCardTwo from "../ProductCardTwo";

const CartList = ({ dict }) => {
    const { cart } = useCartList();

    return (
        <div className="mx-auto space-y-4 max-w-6xl">
            {cart &&
                cart.map((item) => <ProductCardTwo key={item} item={item} dict={dict} />)}
            {cart.length === 0 && <p>No items in the cart</p>}
        </div>
    );
};

export default CartList;
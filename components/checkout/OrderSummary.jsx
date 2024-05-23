'use client'

import useCartList from "@/hooks/useCartList";
import SingleOrder from "./singleOrder";
import { useState } from "react";
import { orderProduct } from "@/app/actions";
import { pdfDownload } from "@/utils/pdf-utils";


const OrderSummary = ({ userData, acceptTerms, setAcceptTerms }) => {
    const [subTotal, setSubTotal] = useState(0);
    const [products, setProducts] = useState([]);
    const { cart } = useCartList();

    function handlePlaceOrder(event) {
        event.preventDefault()
        if (!acceptTerms) {
            return;
        }
        async function fetchOrder() {
            const orderData =
            {
                ...userData,
                products
            }
            try {
                await pdfDownload(orderData);
                // await orderProduct(orderData);
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchOrder();
    }

    return (
        <form
            onSubmit={handlePlaceOrder}
            className="col-span-4 border border-gray-200 p-4 rounded"
        >
            <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
                order summary
            </h4>
            <div className="space-y-2">
                {
                    cart.length > 0 ?
                        cart.map(item => <SingleOrder
                            key={item.productId}
                            productId={item.productId}
                            item={item}
                            number={item?.number}
                            subTotal={subTotal} setSubTotal={setSubTotal}
                            products={products} setProducts={setProducts}
                        />)
                        : <p>No item added in cart yet</p>
                }
            </div>
            <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
                <p>subtotal</p>
                <p>${subTotal}</p>
            </div>
            <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
                <p>shipping</p>
                <p>Free</p>
            </div>
            <div className="flex justify-between text-gray-800 font-medium py-3 uppercas">
                <p className="font-semibold">Total</p>
                <p>${subTotal}</p>
            </div>
            <div className="flex items-center mb-4 mt-2">
                <input
                    onChange={(event) => setAcceptTerms(event.target.checked)}
                    type="checkbox"
                    name="aggrement"
                    id="aggrement"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
                />
                <label
                    htmlFor="aggrement"
                    className="text-gray-600 ml-3 cursor-pointer text-sm"
                >
                    I agree to the{" "}
                    <a href="#" className="text-primary">
                        terms & conditions
                    </a>
                </label>
            </div>
            <button
                // onClick={handlePlaceOrder}
                type="submit"
                // href="#"
                className="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium"
            >
                Place order
            </button>
        </form>
    );
};

export default OrderSummary;
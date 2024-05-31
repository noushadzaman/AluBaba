'use client'

import useCartList from "@/hooks/useCartList";
import SingleOrder from "./SingleOrder.jsx";
import { useState } from "react";
import { orderProduct } from "@/app/actions";
import { createPdf } from "@/utils/pdf-utils";
import useUser from "@/hooks/useUser";


const OrderSummary = ({ userData, acceptTerms, setAcceptTerms, dict }) => {
    const { user } = useUser();
    const [subTotal, setSubTotal] = useState(0);
    const [products, setProducts] = useState([]);
    const [downloadUrl, setDownloadUrl] = useState();
    const { cart, setCart } = useCartList();

    function handlePlaceOrder(event) {
        event.preventDefault()
        if (!acceptTerms) {
            return;
        }
        async function fetchOrder() {
            const orderData =
            {
                ...userData,
                products,
                subTotal: subTotal,
                date: new Date(),
            }
            try {
                // setTimeout(() => {
                // URL.revokeObjectURL(url);
                // }, 0);
                const { url } = await createPdf(orderData);
                setDownloadUrl(url);
                await orderProduct(orderData, user?.email);
            }
            catch (error) {
                console.log(error);
            }
            finally {
                setCart([]);
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
                {dict.order_summary}
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
                <p>{dict.subtotal}</p>
                <p>${subTotal}</p>
            </div>
            <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
                <p>{dict.shipping}</p>
                <p>Free</p>
            </div>
            <div className="flex justify-between text-gray-800 font-medium py-3 uppercas">
                <p className="font-semibold">{dict.total}</p>
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
                    <a href="#" className="text-primary">
                        {dict.terms_conditions}
                    </a>
                </label>
            </div>
            {
                downloadUrl ?
                    <div className="flex gap-5 justify-center items-center">
                        <a
                            target="_blank"
                            href={downloadUrl}
                            className="block w-[45%] py-3 px-4 text-center text-white bg-[purple] border border-[purple] rounded-md  hover:text-[plum] font-medium"
                        >
                            See
                        </a>
                        <a
                            target="_blank"
                            href={downloadUrl}
                            className="block w-[45%] py-3 px-4 text-center text-white bg-[purple] border border-[purple] rounded-md  hover:text-[plum] font-medium"
                            download={"Invoice.pdf"}
                        >
                            Download
                        </a>
                    </div>
                    : <button
                        type="submit"
                        className="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium"
                    >
                        Place order
                    </button>
            }
        </form>
    );
};

export default OrderSummary;
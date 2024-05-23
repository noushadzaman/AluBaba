'use client'

import { calculatePrice } from "@/utils";
import { useEffect, useState } from "react";

const SingleOrder = ({ productId, number, subTotal, setSubTotal, products, setProducts }) => {
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        async function fetchProduct() {
            const response = await fetch(`/api/product/${productId}`)
                .then(res => res.json());
            setProduct(response);
            setLoading(false);
        }
        fetchProduct();
    }, [productId]);

    useEffect(() => {
        if (product) {
            const exist = products.find(singleProduct => singleProduct.productId == product._id);
            if (!exist) {
                const newTotal = Number(subTotal) + Number(calculatePrice(product?.discount, product?.price, number))
                setSubTotal(!isNaN(newTotal) && newTotal);
                setProducts([
                    ...products,
                    {
                        productId: product._id,
                        name: product.name,
                        price: calculatePrice(product?.discount, product?.price, number),
                        items: Number(number),
                    }
                ])
            }
        }
    }, [product]);

    if (loading) {
        return <p>loading...</p>
    }

    return (
        <div className="flex justify-between">
            <div>
                <h5 className="text-gray-800 font-medium">{product?.name}</h5>
                {
                    product?.size && <p className="text-sm text-gray-600">{product?.size}</p>
                }
            </div>
            <p className="text-gray-600">${number}</p>
            <p className="text-gray-800 font-medium">
                ${calculatePrice(product?.discount, product?.price, number)}
            </p>
        </div>
    );
};

export default SingleOrder; 
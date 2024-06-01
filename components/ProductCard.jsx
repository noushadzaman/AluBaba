"use client";

import { BiCartAdd } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { updateUserCart, increaseClickCount } from "@/app/actions";
import useCartList from "@/hooks/useCartList";
import useUser from "@/hooks/useUser";
import { calculatePrice } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({ product, dict }) => {
    const { cart, setCart } = useCartList();
    const { user } = useUser();
    const foundInCart = cart.find(cartItem => cartItem.productId === product?.id);

    async function clickCount() {
        // console.log(product?.id);
        await increaseClickCount(product?.id);
    }

    async function updateCart() {
        if (foundInCart) {
            toast.error("Already available!");
            return;
        }
        await updateUserCart({ userEmail: user?.email, productId: product?.id, items: 1 });
        setCart([
            ...cart,
            { productId: product?.id, number: 1 }
        ])
        toast.success("Added to cart!");
    }

    return (
        <duv className="bg-white shadow rounded overflow-hidden group relative">
            <div className="relative">
                <Image
                    width={400}
                    height={400}
                    src={product?.thumbnail}
                    alt="product 1"
                    className="w-full p-6 object-contain h-[200px]"
                />
                <div
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                        justify-center gap-2 opacity-0 group-hover:opacity-100 transition rounded"
                >
                    <a
                        href="#"
                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                        title="view product"
                    >
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </a>
                    <a
                        href="#"
                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                        title="add to wishlist"
                    >
                        <i className="fa-solid fa-heart"></i>
                    </a>
                </div>
            </div>
            <div className="flex items-center justify-between mb-2">
                <div className="pt-4 pb-10 px-4">
                    <Link
                        onClick={clickCount}
                        href={`/productDetails/${product?.id}`}
                    >
                        <h4 className="uppercase text-nowrap font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                            {product?.name}
                        </h4>
                    </Link>
                    <div className="flex items-baseline mb-1 space-x-2">
                        <p className="text-xl text-primary font-semibold">
                            {
                                calculatePrice(product?.discount, product?.price, 1)
                            }
                        </p>
                        <p className="text-sm text-gray-400 line-through">
                            {
                                product?.price * 1
                            }
                        </p>
                    </div>
                    <div className="flex items-center">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span>
                                <i className="fa-solid fa-star"><FaStar /></i>
                            </span>
                            <span>
                                <i className="fa-solid fa-star"><FaStar /></i>
                            </span>
                            <span>
                                <i className="fa-solid fa-star"><FaStar /></i>
                            </span>
                            <span>
                                <i className="fa-solid fa-star"><FaStar /></i>
                            </span>
                            <span>
                                <i className="fa-solid fa-star"><FaStar /></i>
                            </span>
                        </div>
                        <div className="text-xs text-gray-500 ml-3">(150)</div>
                    </div>
                </div>
                {
                    !foundInCart && <Link
                        href={foundInCart ? "" : "/cart"}
                        onClick={updateCart}
                    >
                        <BiCartAdd className={"text-primary text-2xl cursor-pointer mr-5"} />
                    </Link>
                }
            </div>
            <Link
                href={`/productDetails/${product?.id}`}
                className={`block w-full py-1 text-center border rounded-b   transition bottom-0 absolute  hover:bg-transparent border-primary hover:text-primary text-white bg-primary`}
            >
                {dict.details}
            </Link>
        </duv>
    );
};

export default ProductCard;
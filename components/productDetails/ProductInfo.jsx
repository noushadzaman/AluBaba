import { auth } from "@/auth";
import AddToCartAndWishList from "./AddToCartAndWishList";
import SocialShare from "./SocialShare";

const ProductInfo = async ({ product, dict }) => {
    const session = await auth();

    return (
        <div>
            <h2 className="text-3xl font-medium uppercase mb-2">
                {product?.name}
            </h2>
            {/* <div className="flex items-center mb-4">
                <div className="flex gap-1 text-sm text-yellow-400">
                    <span>
                        <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                        <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                        <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                        <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                        <i className="fa-solid fa-star"></i>
                    </span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
            </div> */}
            <div className="space-y-2">
                <p className="text-gray-800 font-semibold space-x-2">
                    <span>{dict.availability}: </span>
                    {
                        product?.name ?
                            <span className="text-green-600">In Stock</span>
                            : <span className="text-red-600">Out of stock</span>
                    }
                </p>
                <p className="space-x-2">
                    <span className="text-gray-800 font-semibold">{dict.brand}: </span>
                    <span className="text-gray-600">{product?.brand}</span>
                </p>
                <p className="space-x-2">
                    <span className="text-gray-800 font-semibold">{dict.category}: </span>
                    <span className="text-gray-600">{product?.category}</span>
                </p>
                <p className="space-x-2">
                    <span className="text-gray-800 font-semibold">{dict.sku}: </span>
                    <span className="text-gray-600">{product?.sku}</span>
                </p>
            </div>
            <AddToCartAndWishList
                dict={dict}
                product={product}
                userEmail={session?.user?.email}
            />
            <SocialShare id={product?.id} dict={dict} />
        </div>
    );
};

export default ProductInfo;
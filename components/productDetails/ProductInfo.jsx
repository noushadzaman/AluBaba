import { auth } from "@/auth";
import AddToCartAndWishList from "./AddToCartAndWishList";
import SocialShare from "./SocialShare";

const ProductInfo = async ({ product }) => {
    const session = await auth();

    return (
        <div>
            <h2 class="text-3xl font-medium uppercase mb-2">
                {product?.name}
            </h2>
            {/* <div class="flex items-center mb-4">
                <div class="flex gap-1 text-sm text-yellow-400">
                    <span>
                        <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                        <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                        <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                        <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                        <i class="fa-solid fa-star"></i>
                    </span>
                </div>
                <div class="text-xs text-gray-500 ml-3">(150 Reviews)</div>
            </div> */}
            <div class="space-y-2">
                <p class="text-gray-800 font-semibold space-x-2">
                    <span>Availability: </span>
                    {
                        product?.name ?
                            <span class="text-green-600">In Stock</span>
                            : <span class="text-red-600">Out of stock</span>
                    }
                </p>
                <p class="space-x-2">
                    <span class="text-gray-800 font-semibold">Brand: </span>
                    <span class="text-gray-600">{product?.brand}</span>
                </p>
                <p class="space-x-2">
                    <span class="text-gray-800 font-semibold">Category: </span>
                    <span class="text-gray-600">{product?.category}</span>
                </p>
                <p class="space-x-2">
                    <span class="text-gray-800 font-semibold">SKU: </span>
                    <span class="text-gray-600">{product?.sku}</span>
                </p>
            </div>
            <div class="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
                <p class="text-xl text-primary font-semibold">$
                    {
                        product?.discount ?
                            product?.price - (product?.price * product.discount / 100)
                            : product?.price
                    }
                </p>
                {
                    product?.discount && <p class="text-base text-gray-400 line-through">{product?.price}</p>
                }
            </div>
            <p class="mt-4 text-gray-600">
                {product?.short_description}
            </p>
            <AddToCartAndWishList
                productId={product?.id}
                userEmail={session?.user?.email}
            />
            <SocialShare id={product?.id} />

        </div>
    );
};

export default ProductInfo;
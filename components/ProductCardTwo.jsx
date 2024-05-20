import { getProductByIdForCard } from "@/database/queries";
import Image from "next/image";


const ProductCardTwo = async ({ item, itemId }) => {
    const product = await getProductByIdForCard(itemId || item?.productId);

    return (
        <div class="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
            <div class="w-28">
                <Image
                    width={300}
                    height={300}
                    src="/assets/images/products/product6.jpg"
                    alt="product 6"
                    class="w-full"
                />
            </div>
            <div class="w-1/3">
                <h2 class="text-gray-800 text-xl font-medium uppercase">
                    {product?.name}
                </h2>
                <p class="text-gray-500 text-sm">
                    Availability: <span class="text-green-600">{product?.availability ? "In Stock" : "Out of stock"}</span>
                </p>
            </div>
            <div class="text-primary text-lg font-semibold">
                {`$`}{
                    product?.discount ?
                        product?.price - (product?.price * product.discount / 100)
                        : product?.price
                }
            </div>
            {
                item?.number &&
                <div class="text-primary text-lg font-semibold">
                    {`x${item?.number}`}
                </div>
            }
            <a
                href="#"
                class="px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
            >
                add to cart
            </a>

            <div class="text-gray-600 cursor-pointer hover:text-primary">
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
    );
};

export default ProductCardTwo;
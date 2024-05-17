import WishlistCard from "@/components/wishlist/wishlistCard";
import Image from "next/image";
import React from "react";

export default function WishListPage() {
  return (
    <div class="container gap-6 pt-4 pb-16">
      <div class="mx-auto space-y-4 max-w-6xl">
        <WishlistCard />
        <div class="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
          <div class="w-28">
            <Image
              width={300}
              height={300}
              src="/assets/images/products/product10.jpg"
              alt="product 6"
              class="w-full"
            />
          </div>
          <div class="w-1/3">
            <h2 class="text-gray-800 text-xl font-medium uppercase">Sofa</h2>
            <p class="text-gray-500 text-sm">
              Availability: <span class="text-red-600">Out of Stock</span>
            </p>
          </div>
          <div class="text-primary text-lg font-semibold">$320.00</div>
          <a
            href="#"
            class="cursor-not-allowed px-6 py-2 text-center text-sm text-white bg-red-400 border border-red-400 rounded transition uppercase font-roboto font-medium"
          >
            add to cart
          </a>

          <div class="text-gray-600 cursor-pointer hover:text-primary">
            <i class="fa-solid fa-trash"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

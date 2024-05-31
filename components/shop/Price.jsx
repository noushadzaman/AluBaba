'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Price = ({ dict }) => {
    const [priceRange, setPriceRange] = useState({
        minPrice: 0,
        maxPrice: 0
    });
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const { replace } = useRouter();

    useEffect(() => {
        if (priceRange.minPrice > 0 && priceRange.maxPrice > 0) {
            if (Number(priceRange.minPrice) < Number(priceRange.maxPrice)) {

                params.set("min_price", priceRange.minPrice);
                params.set("max_price", priceRange.maxPrice);
            }
            else {
                params.delete("min_price");
                params.delete("max_price");
            }
            replace(`${pathname}?${params}`);
        }
    }, [priceRange])


    return (
        <div className="pt-4">
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                {dict.price}
            </h3>
            <div className="mt-4 flex items-center">
                <input
                    onChange={
                        (event) => {
                            setPriceRange({
                                ...priceRange,
                                minPrice: event.target.value
                            })
                        }
                    }
                    type="number"
                    name="min"
                    id="min"
                    className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                    placeholder="min"
                />
                <span className="mx-3 text-gray-500">-</span>
                <input
                    onChange={
                        (event) => {
                            setPriceRange({
                                ...priceRange,
                                maxPrice: event.target.value
                            })
                        }
                    }
                    type="number"
                    name="max"
                    id="max"
                    className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                    placeholder="max"
                />
            </div>
        </div>
    );
};

export default Price;
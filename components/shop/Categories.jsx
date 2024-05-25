'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Categories = ({ categoryExist }) => {
    const [category, setCategory] = useState(categoryExist || []);
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const { replace } = useRouter();
    const pathname = usePathname();

    function onChange(event) {
        const newCat = event.target.value;

        const exist = category.find(cat => cat === newCat);
        if (exist) {
            setCategory(
                category.filter(cat => cat !== newCat)
            )
        } else {
            setCategory([
                ...category,
                newCat
            ])
        }
    }

    useEffect(() => {
        if (category.length > 0) {
            params.set('category', encodeURI(category.join('|')));
        } else {
            params.delete("category")
        }
        replace(`${pathname}?${params.toString()}`)
    }, [category])

    return (
        <div>
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Categories
            </h3>
            <form className="space-y-2">
                <div className="flex items-center">
                    <input
                        onChange={onChange}
                        checked={category.find(cat => cat === "furniture")}
                        value="furniture"
                        type="checkbox"
                        name="cat-1"
                        id="cat-1"
                        className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                    />
                    <label htmlFor="cat-1" className="text-gray-600 ml-3 cusror-pointer">
                        Furniture
                    </label>
                    <div className="ml-auto text-gray-600 text-sm">(15)</div>
                </div>
                <div className="flex items-center">
                    <input
                        onChange={onChange}
                        checked={category.find(cat => cat === "clothing")}
                        value="clothing"
                        type="checkbox"
                        name="cat-4"
                        id="cat-4"
                        className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                    />
                    <label htmlFor="cat-4" className="text-gray-600 ml-3 cusror-pointer">
                        Clothing
                    </label>
                    <div className="ml-auto text-gray-600 text-sm">(10)</div>
                </div>
                <div className="flex items-center">
                    <input
                        onChange={onChange}
                        checked={category.find(cat => cat === "kitchen-appliance")}
                        value="kitchen-appliance"
                        type="checkbox"
                        name="cat-2"
                        id="cat-2"
                        className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                    />
                    <label htmlFor="cat-2" className="text-gray-600 ml-3 cusror-pointer">
                        kitchen appliance
                    </label>
                    <div className="ml-auto text-gray-600 text-sm">(9)</div>
                </div>
                <div className="flex items-center">
                    <input
                        onChange={onChange}
                        checked={category.find(cat => cat === "home-electronics")}
                        value="home-electronics"
                        type="checkbox"
                        name="cat-3"
                        id="cat-3"
                        className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                    />
                    <label htmlFor="cat-3" className="text-gray-600 ml-3 cusror-pointer">
                        Home Electronics
                    </label>
                    <div className="ml-auto text-gray-600 text-sm">(21)</div>
                </div>
                <div className="flex items-center">
                    <input
                        onChange={onChange}
                        checked={category.find(cat => cat === "phone-and-tablets")}
                        value="phone-and-tablets"
                        type="checkbox"
                        name="cat-4"
                        id="cat-4"
                        className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                    />
                    <label htmlFor="cat-4" className="text-gray-600 ml-3 cusror-pointer">
                        Phone & tablets
                    </label>
                    <div className="ml-auto text-gray-600 text-sm">(10)</div>
                </div>
                <div className="flex items-center">
                    <input
                        onChange={onChange}
                        checked={category.find(cat => cat === "pc-and-components")}
                        value="pc-and-components"
                        type="checkbox"
                        name="cat-4"
                        id="cat-4"
                        className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                    />
                    <label htmlFor="cat-4" className="text-gray-600 ml-3 cusror-pointer">
                        PC & components
                    </label>
                    <div className="ml-auto text-gray-600 text-sm">(10)</div>
                </div>
            </form>
        </div>
    );
};

export default Categories;
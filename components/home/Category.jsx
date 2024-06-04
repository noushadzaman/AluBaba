"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

const Category = ({ img, name, category }) => {
    const { router } = useRouter();
    const handleLink = () => {
        router.push(`/shop?category=${category}`)
    }

    return (
        <>
            <div
                onClick={handleLink}
                className="relative rounded-sm overflow-hidden group">
                <Image
                    width={300}
                    height={300}
                    src={img}
                    alt="category 1"
                    className="w-full h-full"
                />
                <a href="#"
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">{name}</a>
            </div>
        </>
    );
};

export default Category;
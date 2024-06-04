'use client';

import Image from "next/image";
import { useState } from "react";

const ProductGallery = ({ gallery }) => {
    const [mainImg, setMainImg] = useState(0);

    return (
        <div>
            <Image
                height={800}
                width={800}
                src={gallery[mainImg]}
                alt="product"
                className="w-full"
            />
            <div className="grid grid-cols-5 gap-4 mt-4">
                {
                    gallery.map((img, idx) => <Image
                        onClick={() => setMainImg(idx)}
                        key={idx}
                        height={800}
                        width={800}
                        src={`${img}`}
                        alt="product2"
                        className="w-full cursor-pointer border border-primary"
                    />)
                }
            </div>
        </div>
    );
};

export default ProductGallery;
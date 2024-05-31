"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Size = ({ dict }) => {
    const [size, setSize] = useState('');
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const pathname = usePathname();
    const { replace } = useRouter();

    function onChange(event) {
        setSize(event.target.id);
        if (size === event.target.id) {
            setSize('');
        }
    }

    useEffect(() => {
        if (size.length > 0) {
            params.set("size", size);
        }
        else {
            params.delete("size");
        }
        replace(`${pathname}?${params}`);
    }, [size]);

    return (
        <div className="pt-4">
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                {dict.size}
            </h3>
            <div className="flex items-center gap-2">
                <div className={size === "size-xs" && "size-selector"}>
                    <input
                        onClick={onChange}
                        type="radio" name="size" id="size-xs" className="hidden" />
                    <label
                        htmlFor="size-xs"
                        className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                    >
                        XS
                    </label>
                </div>
                <div className={size === "size-s" && "size-selector"}>
                    <input
                        onClick={onChange}
                        type="radio" name="size" id="size-s" className="hidden" />
                    <label
                        htmlFor="size-sm"
                        className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                    >
                        S
                    </label>
                </div>
                <div className={size === "size-m" && "size-selector"}>
                    <input
                        onClick={onChange}
                        type="radio" name="size" id="size-m" className="hidden" />
                    <label
                        htmlFor="size-m"
                        className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                    >
                        M
                    </label>
                </div>
                <div className={size === "size-l" && "size-selector"}>
                    <input
                        onClick={onChange}
                        type="radio" name="size" id="size-l" className="hidden" />
                    <label
                        htmlFor="size-l"
                        className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                    >
                        L
                    </label>
                </div>
                <div className={size === "size-xl" && "size-selector"}>
                    <input
                        onClick={onChange}
                        type="radio" name="size" id="size-xl" className="hidden" />
                    <label
                        htmlFor="size-xl"
                        className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                    >
                        XL
                    </label>
                </div>
            </div>
        </div >
    );
};

export default Size;
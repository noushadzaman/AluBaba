'use client'

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const handleInputs = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
    }

    const doSearch = (event) => {
        const params = new URLSearchParams(searchParams);
        params.set("product", searchTerm);
        replace(`shop?${params.toString()}`);
    }

    return (
        <div className="w-full max-w-xl relative flex">
            <span className="absolute left-4 top-3 text-lg text-gray-400">
                <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
                onChange={handleInputs}
                type="text" name="search" id="search"
                className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none hidden md:flex"
                placeholder="search"
            />
            <button
                onClick={doSearch}
                className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary pt-[11px] transition hidden md:flex"
            >Search</button>
        </div>
    );
};

export default Search;
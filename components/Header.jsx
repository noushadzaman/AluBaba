'use client';
import useCartList from "@/hooks/useCartList";
import useWishList from "@/hooks/useWishList";
import Image from "next/image";
import Link from "next/link";
import Search from "./Search";

const Header = () => {
    const { cart } = useCartList();
    const { wishlist } = useWishList()

    return (
        <header className="py-4 shadow-sm bg-white">
            <div className="container flex items-center justify-between">
                <Link href="/">
                    <Image
                        height={250}
                        width={250}
                        src="/assets/images/logo.svg"
                        alt="Logo"
                        className="w-32"
                    />
                </Link>
                <Search />
                <div className="flex items-center space-x-4">
                    <Link href="/wishlist" className="text-center text-gray-700 hover:text-primary transition relative">
                        <div className="text-2xl">
                            <i className="fa-regular fa-heart"></i>
                        </div>
                        <div className="text-xs leading-3">Wishlist</div>
                        {
                            wishlist?.length > 0 &&
                            <div
                                className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                                {wishlist.length}
                            </div>
                        }
                    </Link>
                    <Link href="/cart" className="text-center text-gray-700 hover:text-primary transition relative">
                        <div className="text-2xl">
                            <i className="fa-solid fa-bag-shopping"></i>
                        </div>
                        <div className="text-xs leading-3">Cart</div>
                        {
                            cart?.length > 0 &&
                            <div
                                className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                                {cart.length}
                            </div>
                        }
                    </Link>
                    <Link href="/account" className="text-center text-gray-700 hover:text-primary transition relative">
                        <div className="text-2xl">
                            <i className="fa-regular fa-user"></i>
                        </div>
                        <div className="text-xs leading-3">Account</div>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
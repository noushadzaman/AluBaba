import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import Logout from "./auth/Logout";

const Nav = async () => {
    const session = await auth();

    return (
        <nav class="bg-gray-800">
            <div class="container flex">

                <div class="px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group hidden">
                    <span class="text-white">
                        <i class="fa-solid fa-bars"></i>
                    </span>
                    <span class="capitalize ml-2 text-white hidden">All Categories</span>
                    <div class="absolute left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible w-[600px]"
                        style={{ width: "300px" }}>
                        <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <Image
                                height={50}
                                width={50}
                                src="assets/images/icons/sofa.svg"
                                alt="sofa"
                                class="w-5 h-5 object-contain"
                            />
                            <span class="ml-6 text-gray-600 text-sm">Sofa</span>
                        </a>
                        <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <Image
                                height={50}
                                width={50}
                                src="assets/images/icons/terrace.svg"
                                alt="terrace"
                                class="w-5 h-5 object-contain"
                            />
                            <span class="ml-6 text-gray-600 text-sm">Living Room</span>
                        </a>
                        <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <Image
                                height={50}
                                width={50}
                                src="assets/images/icons/bed.svg"
                                alt="bed"
                                class="w-5 h-5 object-contain"
                            />
                            <span class="ml-6 text-gray-600 text-sm">Bedroom</span>
                        </a>
                        <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <Image
                                height={50}
                                width={50}
                                src="assets/images/icons/office.svg"
                                alt="Outdoor"
                                class="w-5 h-5 object-contain"
                            />
                            <span class="ml-6 text-gray-600 text-sm">Outdoor</span>
                        </a>
                        <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <Image
                                height={50}
                                width={50}
                                src="assets/images/icons/outdoor-cafe.svg"
                                alt="outdoor"
                                class="w-5 h-5 object-contain"
                            />
                            <span class="ml-6 text-gray-600 text-sm">Outdoor</span>
                        </a>
                        <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <Image
                                height={50}
                                width={50}
                                src="assets/images/icons/bed-2.svg"
                                alt="Mattress"
                                class="w-5 h-5 object-contain"
                            />
                            <span class="ml-6 text-gray-600 text-sm">Mattress</span>
                        </a>
                    </div>
                </div>

                <div class="flex items-center justify-between flex-grow md:pl-12 py-5">
                    <div class="flex items-center space-x-6 capitalize">
                        <Link href="/" class="text-gray-200 hover:text-white transition">Home</Link>
                        <Link href="/shop" class="text-gray-200 hover:text-white transition">Shop</Link>
                        <Link href="/about" class="text-gray-200 hover:text-white transition">About us</Link>
                        <Link href="/contact" class="text-gray-200 hover:text-white transition">Contact us</Link>
                    </div>
                    {
                        session?.user ?
                            <Logout />
                            : <Link
                                href="/login"
                                class="text-gray-200 hover:text-white transition"
                            >Login</Link>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Nav;
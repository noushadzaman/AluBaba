'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const RegisterForm = () => {
    const [error, setError] = useState("");
    const [agrement, setAgrement] = useState(false);
    const router = useRouter();

    const onSubmit = async (event) => {
        event.preventDefault();
        if (!agrement) {
            setError("Please agree terms and conditions");
            return;
        }
        try {
            const formData = new FormData(event.currentTarget);
            const name = formData.get('name');
            const email = formData.get('email');
            const password = formData.get('password');
            const confirm = formData.get('confirm');
            if (password !== confirm) {
                setError("Password didn't matched");
                return;
            }
            const res = await fetch('/api/auth/register', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    name, email, password
                })
            })

            res.status === 201 && router.push("/login");
        }
        catch (error) {
            setError(error.message);
        }
    }

    return (
        <>
            <div class="text-xl text-red-500 text-center">{error && error}</div>
            <form onSubmit={onSubmit}  >
                <div class="space-y-2">
                    <div>
                        <label for="name" class="text-gray-600 mb-2 block">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="fulan fulana"
                        />
                    </div>
                    <div>
                        <label for="email" class="text-gray-600 mb-2 block">
                            Email address
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="youremail.@domain.com"
                        />
                    </div>
                    <div>
                        <label for="password" class="text-gray-600 mb-2 block">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="*******"
                        />
                    </div>
                    <div>
                        <label for="confirm" class="text-gray-600 mb-2 block">
                            Confirm password
                        </label>
                        <input
                            type="password"
                            name="confirm"
                            id="confirm"
                            class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="*******"
                        />
                    </div>
                </div>
                <div class="mt-6">
                    <div class="flex items-center">
                        <input
                            onChange={() => setAgrement(!agrement)}
                            type="checkbox"
                            name="agrement"
                            id="agrement"
                            class="text-primary focus:ring-0 rounded-sm cursor-pointer"
                        />
                        <label for="aggrement" class="text-gray-600 ml-3 cursor-pointer">
                            I have read and agree to the{" "}
                            <Link href="" class="text-primary">
                                terms & conditions
                            </Link>
                        </label>
                    </div>
                </div>
                <div class="mt-4">
                    <button
                        type="submit"
                        class="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
                    >
                        create account
                    </button>
                </div>
            </form>
        </>
    );
};

export default RegisterForm;
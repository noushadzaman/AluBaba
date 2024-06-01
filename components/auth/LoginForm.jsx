'use client'

import { login } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
    const [error, setError] = useState('');
    const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    async function onSubmit(data) {
        try {
            const response = await login(data);
            if (response.error) {
                setError(response.error.message);
            }
            else {
                router.push('/wishlist');
            }
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <>
            {
                error && <div className="text-xl text-red-400 text-center">{error}</div>
            }
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-2">
                    <div>
                        <label htmlFor="email" className="text-gray-600 mb-2 block">
                            Email address
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="youremail.@domain.com"
                            {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && <span className="text-red-400">This field is required</span>}
                    </div>
                    <div>
                        <label htmlFor="password" className="text-gray-600 mb-2 block">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="*******"
                            {...register("password", {
                                required: "password is required", minLength: {
                                    value: 8,
                                    message: "password must contain at least 8 characters"
                                }
                            })}
                        />
                        {errors.password && <span className="text-red-400">{errors.password?.message}</span>}
                    </div>
                </div>
                <div className="flex items-center justify-between mt-6">
                    <div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="accept"
                                id="accept"
                                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                                {...register("accept", { required: "Terms and conditions must be accepted" })}
                            />
                            <label htmlFor="accept" className="text-gray-600 ml-3 cursor-pointer">
                                Accept terms and conditions
                            </label>
                        </div>
                        {errors.accept && <span className="text-red-400">{errors.accept?.message}</span>}
                    </div>
                    {/* <a href="#" className="text-primary">
                        Forgot password
                    </a> */}
                </div>
                <div className="mt-4">
                    <button
                        type="submit"
                        className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
                    >
                        Login
                    </button>
                </div>
            </form>
        </>
    );
};

export default LoginForm;
'use client';

import { signIn } from "next-auth/react";
import Link from "next/link";

const AuthActions = ({ isLogin }) => {
    const handleAuthGoogle = (event) => {
        signIn("google", { callbackUrl: 'https://alu-baba.vercel.app/wishlist' });
    }
    const handleAuthFaceBook = (event) => {
        signIn("facebook", { callbackUrl: 'https://alu-baba.vercel.app/wishlist' });
    }

    return (
        <>
            <div className="mt-6 flex justify-center relative">
                <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">
                    Or {isLogin ? 'login' : 'register'} with
                </div>
                <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
            </div>
            <div className="mt-4 flex gap-4">
                <button
                    onClick={handleAuthFaceBook}

                    className="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700"
                >
                    facebook
                </button>
                <button
                    onClick={handleAuthGoogle}
                    className="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500"
                >
                    google
                </button>
            </div>

            <p className="mt-4 text-center text-gray-600">
                {isLogin ? `${`Don't have account?`}` : "Have an account?"}{" "}
                <Link href={isLogin ? "/register" : "/login"} className="text-primary">
                    {isLogin ? 'Register' : "Login"} now
                </Link>
            </p>

        </>
    );
};

export default AuthActions;
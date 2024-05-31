'use client';

import { signOut } from "next-auth/react";

const Logout = ({ logout }) => {
    async function handleLogOut() {
        await signOut();
    }

    return (
        <button
            onClick={handleLogOut}
            className="text-gray-200 hover:text-white transition btn "
        >{logout}</button>
    );
};

export default Logout;
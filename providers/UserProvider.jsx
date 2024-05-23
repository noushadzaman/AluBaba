'use client';

import { UserContext } from "@/context";
import { useState } from "react";

const UserProvider = ({ children, dbUser }) => {
    const [user, setUser] = useState(dbUser || []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
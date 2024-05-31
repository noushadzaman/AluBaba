'use client'

import { LanguageContext } from "@/context";
import { useState } from "react";

const LanguageProvider = ({ children, lang }) => {
    const [language, setLanguage] = useState(lang);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );

};

export default LanguageProvider;
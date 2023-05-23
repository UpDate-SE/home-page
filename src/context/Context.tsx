import React, { PropsWithChildren, useState } from "react";
import { LanguagesDict, UserContextType, UserLanguage } from "@types";

export const UserContext = React.createContext<UserContextType | null>(null);

export const UserContextProvider = ({children}: PropsWithChildren): JSX.Element => {
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [currentLang, setCurrentLang] = useState<UserLanguage>(Languages['ESP']);
    const [langOption, setLangOption] = useState<UserLanguage>(Languages['ENG']);

    const toggleLanguage = () => {
        if(currentLang.language === 'ESP') {
            setCurrentLang(Languages['ENG']);
            setLangOption(Languages['ESP']);
        }else {
            setCurrentLang(Languages['ESP']);
            setLangOption(Languages['ENG']);
        }
    };

    const provider = {
        darkMode,
        currentLang,
        langOption,
        toggleLanguage
    }

    return (
        <UserContext.Provider value={provider}>
            {children}
        </UserContext.Provider>
    )
}

const Languages: LanguagesDict = {
    ESP: {
        language: 'ESP',
        flag: 'fi fi-mx'
    },
    ENG: {
        language: 'ENG',
        flag: 'fi fi-us'
    }
}
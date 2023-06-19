import React, { PropsWithChildren, useState } from "react";
import Cookies from "universal-cookie";

import { LanguagesDict, UserContextType, UserLanguage } from "@types";

const cookies = new Cookies();

export const UserContext = React.createContext<UserContextType | null>(null);

export const UserContextProvider = ({children}: PropsWithChildren): JSX.Element => {
    const [darkMode, setDarkMode] = useState<boolean>(() => getDarkModePreference());
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

    const toggleDarkMode = () => {
        cookies.set('dark-mode', !darkMode, {path: '/', sameSite: 'strict'});
        setDarkMode(!darkMode);
    }

    const provider = {
        darkMode,
        currentLang,
        langOption,
        toggleDarkMode,
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

const getDarkModePreference = (): boolean => {
    let darkMode = cookies.get('dark-mode') as boolean | undefined;
    if(typeof darkMode === 'string') {
        darkMode = darkMode === 'true';
    }
    if(darkMode === undefined) {
        darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return darkMode;
}
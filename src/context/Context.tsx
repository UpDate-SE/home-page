import React, { PropsWithChildren, useState } from "react";
import Cookies from "universal-cookie";

import { LanguagesDict, UserContextType, UserLanguage } from "@types";

const cookies = new Cookies();

export const UserContext = React.createContext<UserContextType | null>(null);

export const UserContextProvider = ({children}: PropsWithChildren): JSX.Element => {
    const [darkMode, setDarkMode] = useState<boolean>(() => getDarkModePreference());
    const [currentLang, setCurrentLang] = useState<UserLanguage>(() => getLanguagePreference());
    const [langOption, setLangOption] = useState<UserLanguage>(() => getOppositeLang(currentLang));

    const toggleLanguage = () => {
        const newLang = getOppositeLang(currentLang); 
        cookies.set('language', newLang.language, {path: '/', sameSite: 'strict'});
        setCurrentLang(newLang);
        setLangOption(currentLang);
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

const getLanguagePreference = (): UserLanguage => {
    let languagePref = cookies.get('language') as string | undefined;
    if(!languagePref) {
        return Languages['ESP'];
    }
    return Languages[languagePref];
}

const getOppositeLang = (lang: UserLanguage): UserLanguage => (
    lang.language === 'ESP' ?  Languages['ENG'] : Languages['ESP']
)
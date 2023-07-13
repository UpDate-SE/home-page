import React, { PropsWithChildren, useState } from "react";

import axios, { AxiosRequestConfig } from "axios";

import { LanguagesDict, LoginCredentials, UserContextType, UserLanguage } from "@types";

export const UserContext = React.createContext<UserContextType | null>(null);

export const UserContextProvider = ({children}: PropsWithChildren): JSX.Element => {
    const [darkMode, setDarkMode] = useState<boolean>(() => getDarkModePreference());
    const [currentLang, setCurrentLang] = useState<UserLanguage>(() => getLanguagePreference());
    const [langOption, setLangOption] = useState<UserLanguage>(() => getOppositeLang(currentLang));

    const toggleLanguage = () => {
        const newLang = getOppositeLang(currentLang);
        localStorage.setItem('language', newLang.language);
        setCurrentLang(newLang);
        setLangOption(currentLang);
    };

    const toggleDarkMode = () => {
        localStorage.setItem('dark-mode', JSON.stringify(!darkMode));
        setDarkMode(!darkMode);
    }

    const login = async (credentials: LoginCredentials): Promise<boolean> => {
        const apiUrl = process.env.REACT_APP_API_URL;

        const config: AxiosRequestConfig = {
            url: `${apiUrl}/login`,
            method: 'POST',
            data: credentials
        }

        const reqToken = await axios(config)
            .then(res => res.data)
            .catch(err => console.error(err.data));
        
        if(reqToken) sessionStorage.setItem('token', reqToken);
        console.log(reqToken);

        return reqToken !== undefined;
    }

    const createBusinessCard = async (card: FormData): Promise<boolean> => {
        const apiUrl = process.env.REACT_APP_API_URL;

        const config: AxiosRequestConfig = {
            url: `${apiUrl}/create-business-card`,
            method: 'POST',
            data: card,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        const result = await axios(config)
            .then(res => res.data !== undefined)
            .catch(err => {console.error(err.message); return false;});

        return result;    
    }

    const provider = {
        darkMode,
        currentLang,
        langOption,
        toggleDarkMode,
        toggleLanguage,
        login,
        createBusinessCard,
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
    const darkMode = localStorage.getItem('dark-mode');
    if(!darkMode) return window.matchMedia('(prefers-color-scheme: dark)').matches;

    return darkMode === 'true';
}

const getLanguagePreference = (): UserLanguage => {
    const languagePref = localStorage.getItem('language');
    if(!languagePref) return Languages['ESP'];

    return Languages[languagePref];
}

const getOppositeLang = (lang: UserLanguage): UserLanguage => (
    lang.language === 'ESP' ?  Languages['ENG'] : Languages['ESP']
)
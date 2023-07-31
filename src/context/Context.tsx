import React, { PropsWithChildren, useState } from "react";

import axios, { AxiosRequestConfig } from "axios";

import { BusinesCardInDB, LanguagesDict, LoginCredentials, UserContextType, UserLanguage } from "@types";
import useToken from "hooks/useToken";

export const UserContext = React.createContext<UserContextType | null>(null);

export const UserContextProvider = ({children}: PropsWithChildren): JSX.Element => {
    const [darkMode, setDarkMode] = useState<boolean>(() => getDarkModePreference());
    const [currentLang, setCurrentLang] = useState<UserLanguage>(() => getLanguagePreference());
    const [langOption, setLangOption] = useState<UserLanguage>(() => getOppositeLang(currentLang));    
    const {token, setToken} = useToken();

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
        
        if(!reqToken) return false;
        setToken(reqToken);

        return true;
    }

    const createBusinessCard = async (card: FormData): Promise<boolean> => {
        const apiUrl = process.env.REACT_APP_API_URL;

        const config: AxiosRequestConfig = {
            url: `${apiUrl}/create-business-card`,
            method: 'POST',
            data: card,
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `bearer ${token}`
            }
        }

        const result = await axios(config)
            .then(res => res.data !== undefined)
            .catch(err => {console.error(err.message); return false;});

        return result;    
    }

    const getAllCards = async(): Promise<BusinesCardInDB[]> => {
        const apiUrl = process.env.REACT_APP_API_URL;

        const config: AxiosRequestConfig = {
            url: `${apiUrl}/get-all-cards`,
            method: 'POST',
            headers: {
                'Authorization': `bearer ${token}`
            }
        }

        const res = await axios(config)
            .then(res => res.data as BusinesCardInDB[] | null)
            .catch(_ => null);
        
        if(!res) return [];
        return res;
    }

    const getBusinessCardWithID = async(cardID: string): Promise<BusinesCardInDB | null> => {
        const apiUrl = process.env.REACT_APP_API_URL;

        const data = {
            _id: cardID 
        }

        const config: AxiosRequestConfig = {
            url: `${apiUrl}/get-business-card-id`,
            method: 'POST',
            data: data
        }

        const res = await axios(config)
            .then(res => res.data as BusinesCardInDB)
            .catch(_ => null);

        return res;
    }

    const getBusinessCard = async (company: string, name: string): Promise<BusinesCardInDB | null> => {
        const apiUrl = process.env.REACT_APP_API_URL;

        const data = {
            companyName: company,
            name: name
        }

        const config: AxiosRequestConfig = {
            url: `${apiUrl}/get-business-card`,
            method: 'POST',
            data: data
        }

        const res = await axios(config)
            .then(res => res.data as BusinesCardInDB)
            .catch(_ => null);

        return res;
    }

    const provider = {
        token,
        darkMode,
        currentLang,
        langOption,
        toggleDarkMode,
        toggleLanguage,
        login,
        createBusinessCard,
        getAllCards,
        getBusinessCard,
        getBusinessCardWithID
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
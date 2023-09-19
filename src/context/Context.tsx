import React, { PropsWithChildren, useState } from "react";

import axios, { AxiosRequestConfig } from "axios";
import { useSessionStorage } from "usehooks-ts";

import { BusinesCardInDB, LanguagesDict, LoginCredentials, UserContextType, UserDoc, UserLanguage } from "@types";

export const UserContext = React.createContext<UserContextType | null>(null);

export const UserContextProvider = ({children}: PropsWithChildren): JSX.Element => {
    const [currentLang, setCurrentLang] = useState<UserLanguage>(() => getLanguagePreference());
    const [darkMode, setDarkMode] = useState<boolean>(() => getDarkModePreference());
    const [langOption, setLangOption] = useState<UserLanguage>(() => getOppositeLang(currentLang));
    
    const [userDoc, setUserDoc] = useSessionStorage<UserDoc | null>("user-doc", null);
    const [token, setToken] = useSessionStorage<string | null>("token", null);

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

        const { userDoc, token } = await axios(config)
            .then(res => res.data)
            .catch(err => {
                console.error(err);
                return {
                    userDoc: null, 
                    token: null
                }
            });
            
        setToken(token);
        setUserDoc(userDoc);    
        if(!token || !userDoc) return false;

        return true;
    }

    const authenticate = async (): Promise<boolean> => {
        const apiUrl = process.env.REACT_APP_API_URL;

        console.log('auth, ', userDoc);

        if(!userDoc) return false;

        const config: AxiosRequestConfig = {
            url: `${apiUrl}/authenticate`,
            method: 'GET',
            data: {
                _id: userDoc._id
            },
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `bearer ${token}`
            }
        }

        const auth = await axios(config)
            .then(res => {console.log(res.status); return res.status === 200})
            .catch((err) => {console.error(err); return false})

        return auth;    
    }

    const createBusinessCard = async (card: FormData): Promise<BusinesCardInDB | null> => {
        const apiUrl = process.env.REACT_APP_API_URL;

        const config: AxiosRequestConfig = {
            url: `${apiUrl}/create-card`,
            method: 'POST',
            data: card,
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `bearer ${token}`
            }
        }

        const result = await axios(config)
            .then(res => res.data)
            .catch(err => {console.error(err.message); return null;});

        return result;
    }

    const editCard = async (card: FormData): Promise<BusinesCardInDB | null> => {
        const apiUrl = process.env.REACT_APP_API_URL;

        const config: AxiosRequestConfig = {
            url: `${apiUrl}/edit-card`,
            method: 'POST',
            data: card,
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `bearer ${token}`
            }
        }

        const result = await axios(config)
            .then(res => res.data as BusinesCardInDB)
            .catch(err => {console.error(err.message); return null});

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
            url: `${apiUrl}/get-card`,
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
            url: `${apiUrl}/find-card`,
            method: 'POST',
            data: data
        }

        const res = await axios(config)
            .then(res => res.data as BusinesCardInDB)
            .catch(_ => null);

        return res;
    }

    const provider = {
        darkMode,
        currentLang,
        langOption,
        toggleDarkMode,
        toggleLanguage,

        authenticate,
        login,
        token,

        createBusinessCard,
        editCard,
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
export interface UserLanguage {
    language: string;
    flag: string;
}

export interface LanguagesDict {
    [country: string]: UserLanguage;
}

export interface WindowDimensions {
    width: number
    height: number
}

export interface UserContextType {
    darkMode: boolean;
    currentLang: UserLanguage;
    langOption: UserLanguage;
    toggleDarkMode: () => void;
    toggleLanguage: () => void;
    login: (credentials: LoginCredentials) => Promise<boolean>;
}

export type MarketingPlanType = {
    image: string;
    perks: Array<string>;
    price: string;
}

export type LoginCredentials = {
    username: string;
    password: string;
}
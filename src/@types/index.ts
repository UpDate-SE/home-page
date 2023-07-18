import { BusinessCard, LoginCredentials, PhotoIsString } from './businessCard';

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
    token: string | null;
    darkMode: boolean;
    currentLang: UserLanguage;
    langOption: UserLanguage;
    toggleDarkMode: () => void;
    toggleLanguage: () => void;
    login: (credentials: LoginCredentials) => Promise<boolean>;
    createBusinessCard: (card: FormData) => Promise<boolean>;
    getBusinessCard: (company: string, name: string) => Promise<WithId<PhotoIsString<BusinessCard>> | null>;
}

export type MarketingPlanType = {
    image: string;
    perks: Array<string>;
    price: string;
}

export type WithId<Type> = {[Property in keyof Type]: Type[Property]} & {_id: string}

export * from './conditionalRouter';
export * from './businessCard';
export * from './businessCardForm';
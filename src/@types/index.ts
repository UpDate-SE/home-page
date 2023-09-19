import { BusinesCardInDB } from './businessCard';
import { LoginCredentials } from './users';

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

    token: string | null;
    authenticate: () => Promise<boolean>;
    login: (credentials: LoginCredentials) => Promise<boolean>;
    
    getAllCards: () => Promise<BusinesCardInDB[]>;
    createBusinessCard: (card: FormData) => Promise<BusinesCardInDB | null>;
    editCard: (card: FormData) => Promise<BusinesCardInDB | null>;
    getBusinessCard: (company: string, name: string) => Promise<BusinesCardInDB | null>;
    getBusinessCardWithID: (cardID: string) => Promise<BusinesCardInDB | null>;
}

export type MarketingPlanType = {
    image: string;
    perks: Array<string>;
    price: string;
}

export type WithId<Type> = {[Property in keyof Type]: Type[Property]} & {_id: string}

export type PhotoIsString<Type> = {
    [Property in keyof Type as Exclude<Property, "photo">]: Type[Property]
} & {
    photo: string;
}

export * from './conditionalRouter';
export * from './businessCard';
export * from './businessCardForm';
export * from './socialMedia';
export * from './users';
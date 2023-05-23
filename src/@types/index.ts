export interface UserLanguage {
    language: string;
    flag: string;
}

export interface LanguagesDict {
    [country: string]: UserLanguage;
}

export interface UserContextType {
    darkMode: boolean;
    currentLang: UserLanguage;
    langOption: UserLanguage;
    toggleLanguage: () => void;
}
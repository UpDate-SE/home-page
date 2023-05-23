export enum Language {
    ESP = 'ESP',
    ENG = 'ENG'
}

export interface UserContextType {
    darkMode: boolean;
    lang: Language;
}
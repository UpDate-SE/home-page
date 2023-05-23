import React, { PropsWithChildren } from "react";
import { Language, UserContextType } from "@types";

export const UserContext = React.createContext<UserContextType | null>(null);

export const UserContextProvider = ({children}: PropsWithChildren): JSX.Element => {
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const lang = Language.ESP;

    const provider = {
        darkMode,
        lang
    }

    return (
        <UserContext.Provider value={provider}>
            {children}
        </UserContext.Provider>
    )
}
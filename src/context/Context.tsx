import React from "react";

export interface ContextType {
    darkMode: boolean;
}

export const Context = React.createContext<ContextType | null>(null);

type Props = {
    children: React.ReactNode
}

export const ContextProvider = ({children}: Props): JSX.Element => {
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const provider = {
        darkMode
    }

    return (
        <Context.Provider value={provider}>
            {children}
        </Context.Provider>
    )
}
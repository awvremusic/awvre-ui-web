import React from "react";
import { AWVREThemeProperties } from "../../types";
import { AWVREProviderProps } from "./AWVREProvider.types";
import { AWVRELightTheme } from "../../Constants";
import { usePrefersColorScheme } from "../../hooks";

type AWVREThemeContextProperties = {
    theme: AWVREThemeProperties;
    mode: "light" | "dark" | "system";
}

type AWVREThemeContextFunctions = {
    setThemeMode: (mode: "light" | "dark" | "system") => void;
}

const awvreThemeContext = React.createContext<(AWVREThemeContextProperties & AWVREThemeContextFunctions) | undefined>(undefined);

export const AWVREProvider: React.FC<AWVREProviderProps> = ({
    children,
    customTheme,
    initialThemeMode = "system",
}) => {
    const userPreferredColorScheme = usePrefersColorScheme();
    const [themeMode, setThemeMode] = React.useState<"light" | "dark" | "system">(initialThemeMode === "system" ? userPreferredColorScheme : initialThemeMode);

    const lightTheme = customTheme?.light ?? AWVRELightTheme;
    const darkTheme = customTheme?.dark ?? AWVRELightTheme;

    const theme = themeMode === "light" ? lightTheme : darkTheme;

    return (
        <awvreThemeContext.Provider value={{
            theme,
            mode: themeMode,
            setThemeMode,
        }}>
            {children}
        </awvreThemeContext.Provider>
    )
}

export function useAWVRETheme() {
    const context = React.useContext(awvreThemeContext);
    if (context === undefined) {
        throw new Error('This component must be used within an AWVREProvider');
    }
    
    return context;
}


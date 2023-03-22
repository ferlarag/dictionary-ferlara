import { createContext, useContext, useState} from "react";

const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(true)
    
    return(
        <ThemeContext.Provider
            value={{
                theme,
                updateTheme: () => setTheme(!theme)
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)
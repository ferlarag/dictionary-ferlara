import { createContext, useContext, useState } from "react"

const FontContext = createContext('sans-serif')

export const FontProvider = ({ children }) => {
    const [font, setFont] = useState('sans-serif')

    return(
        <FontContext.Provider
            value={{
                font,
                changeFont: e => setFont(e)
            }}
        >
            {children}
        </FontContext.Provider>
    )
}

export const useFont = () => (useContext(FontContext))
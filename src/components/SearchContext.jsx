import { createContext, useContext,useState } from "react";

const SearchContext = createContext(null)

export const SearchProvider = ({ children }) => {
    const [word, setWord] = useState({word: ""})
    
    return(
        <SearchContext.Provider
            value={{
                word,
                updateWord: e => setWord(e),
            }}
        >
            {children}
        </SearchContext.Provider>
    )
}

export const useSearch = () => (useContext(SearchContext))

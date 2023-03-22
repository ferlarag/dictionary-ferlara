import { useRef, useEffect, useState } from "react"
import { useSearch } from "./SearchContext"
import searchIcon from "../assets/icon-search.svg"
import { useTheme } from "./ThemeContext"

function SearchBar(){

    const { word, updateWord } = useSearch()
    const inputRef = useRef("")
    const [isEmpty, setIsEmpty] = useState({
        value: true,
        changeValue: () => setIsEmpty(!isEmpty)
    })
    const {theme} = useTheme()

    const handleSubmit = e => {
        e.preventDefault()

        inputRef.current.value !== ""
        ? setIsEmpty(true)
        : setIsEmpty(false)

        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputRef.current.value}`)
            .then(response => response.json())
            .then(data => updateWord(data[0])).catch(error => {
                console.log(error)
                setError(error.message)
            })
        
    }

    const showError = () => {
        if (!isEmpty) {
        return (
            <p className="text-error text-lg mt-3">Whoops, can’t be empty…</p>
        )
        } else {
        return null
        }
    }

    useEffect(() => {
        console.log(word)
    }, [word])

    return(
        <div className="mt-4">
            <form
                onSubmit={handleSubmit}
                className="relative"
            >
                <input 
                    className={`${
                        theme 
                        ? "h-12 w-full pl-6 pr-14 rounded-2xl text-black bg-neutral-100 text-lg font-bold outline-none border-0 focus:border-prim focus:border-2" 
                        : "h-12 w-full pl-6 pr-14 rounded-2xl text-white bg-dark-semi-black text-lg font-bold outline-none border-0 focus:border-prim focus:border-2"
                    }`}
                    type="text" 
                    ref={inputRef}
                />
                <button type="submit" className="absolute right-6 top-4"><img src={searchIcon} alt="Search icon" /></button>
            </form>
            {showError()}
        </div>
    )
}

export default SearchBar

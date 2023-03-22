import { useSearch } from "./SearchContext"
import iconNewWindow from "../assets/icon-new-window.svg"
import Error from "./Error"
import Welcome from "./Welcome"
import Word from "./Word"
import { useTheme } from "./ThemeContext"

const Definition = () => {
    const { word } = useSearch()
    const { theme } = useTheme()

    if (!word) {
        return <Error />
    } else if (word.word == ""){
        return <Welcome />
    }

    const meanings = word.meanings?.map((mean) => {
        return (
            <div className={`${theme ? "text-black" : "text-white"}`}>
                {/* render the type: noun, verb, etc */}
                <div className="flex flex-row items-center mt-8">
                    <h1 className="font-bold italic">{mean.partOfSpeech}</h1>
                    <div className="h-px w-full bg-neutral-200 ml-4"></div>
                </div>

                {/* render meaning */}
                <div>
                    <h1 className="mt-8 text-neutral-500">Meaning</h1>
                    <ul className="mt-4">
                        {mean.definitions.map(def => {
                            return(
                                <li className="mt-3.5 flex">
                                    <div className="w-1.5 h-1.5 rounded-full bg-prim mt-2.5 mr-4 flex-shrink-0"></div>
                                    <div>
                                        <p>{def.definition}</p>
                                        {def.example && <p className="text-neutral-500 mt-3">{`"${def.example}"`}</p>}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>


                {/* render synonyms */}
                {mean.synonyms.length > 0 ? (
                    <div className="flex gap-6 mt-6">
                        <h1 className="text-neutral-400">Synonyms</h1>
                        <p className="font-bold text-prim">{mean.synonyms.join(', ')}</p>
                    </div>
                    )
                : null}
            </div>
        )
    })

    const footerLink = () => {
        if(word.word == ""){
            return(<Welcome />)
        } else {
            return(
                <div className="mt-8">
                    <div className="h-px w-full bg-neutral-200"></div>
                    <p className="mt-6 text-neutral-500">Source</p>
                    <a className={`${theme ? "break-all underline text-black" : "break-all underline text-white"}`} href={`https://en.wiktionary.org/wiki/${word.word}`} target="_blank" rel="noopener noreferrer">https://en.wiktionary.org/wiki/{word.word} <img className="w-4 ml-3 inline" src={iconNewWindow} alt="new window icon" /></a>
                </div>
            )
        }
    }

    return(
        <div className="mt-8 pb-20">
            <Word />
            {meanings}
            {footerLink()}
        </div>
    )
}

export default Definition

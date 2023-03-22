import { useState, useRef } from "react"
import { useSearch } from "./SearchContext"
import playIcon from "../assets/icon-play.svg"
import playIconHover from "../assets/icon-play-hover.svg"
import { useTheme } from "./ThemeContext"

function Word(){
    const { word } = useSearch()
    const sound = useRef(null)
    const [isHovered, setIsHovered] = useState(false)
    const {theme} = useTheme()

    const handleClick = () => {
        sound.current.play()
    }

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    return(
        <div className="mt-4 flex flex-row">
            <div>
                <h1 className={`${theme ? "text-black font-bold text-4xl font-inter" : "text-white font-bold text-4xl font-inter"}`}>{word.word}</h1>
                {word.phonetics && <p className="text-lg mt-2 text-prim">{word.phonetics[0].text}</p>}
            </div>
            <button className="ml-auto" onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img className="w-12" src={isHovered ? playIconHover : playIcon} alt="Play Icon" />
            </button>
            {word.phonetics && word.phonetics.length > 0 &&
                <audio ref={sound} src={word.phonetics[0].audio} />
            }
        </div>
    )
}

export default Word
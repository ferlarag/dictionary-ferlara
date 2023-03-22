import iconArrowDown from "../assets/icon-arrow-down.svg"
import { useTheme } from "./ThemeContext"

const Welcome = () => {
    const {theme} = useTheme()
    return(
        <div className={`${
            theme
            ? "text-black flex items-start gap-4 justify-center mt-56 h-screen"
            : "text-white flex items-start gap-4 justify-center mt-56 h-screen"
        }`}>
            {/* <img className="rotate-180 w-10" src={iconArrowDown} alt="arrowIcon" /> */}
            <h2 className="text-2xl font-bold">Search any word ☝🏽</h2>
        </div>
    )
}

export default Welcome
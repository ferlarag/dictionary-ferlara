import { useTheme } from "./ThemeContext"

function Toggle(){
    const {theme, updateTheme} = useTheme()

    const handleClick = () => {
        updateTheme()
    }

    return(
        <button 
            onClick={handleClick} 
            className={`${
                theme
                ? "flex w-10 h-5 bg-neutral-500 rounded-full relative"
                : "flex w-10 h-5 bg-prim rounded-full relative"
            }`}
        >
            <div 
                className={`${
                    theme
                    ? "bg-white w-4 h-4 rounded-full absolute top-0.5 left-0.5 transition-all duration-500 ease-in-out"
                    : "bg-white w-4 h-4 rounded-full absolute top-0.5 right-0.5 transition-all duration-500 ease-in-out"
            }`}>
            </div>
        </button>
    )
}

export default Toggle
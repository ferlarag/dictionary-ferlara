import {useTheme} from "./ThemeContext"

function Error(){
    const {theme} = useTheme()
    return(
        <div className={`${
            theme 
            ? "text-black mt-36 flex gap-6 flex-col items-center h-screen"
            : "text-white mt-36 flex gap-6 flex-col items-center h-screen"
        }`}>
            <h1 className="text-3xl">😕</h1>
            <h1 className="text-xl font-bold">No Definitions Found</h1>
            <p className="text-lg text-center">Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
        </div>
    )
}

export default Error
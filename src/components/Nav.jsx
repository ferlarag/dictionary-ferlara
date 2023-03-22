import logo from "../assets/logo.svg"
import arrow from "../assets/icon-arrow-down.svg"
import moon from "../assets/icon-moon.svg"
import Toggle from "./Toggle"
import { useTheme } from "./ThemeContext"

function Nav(){
    const { theme } = useTheme()
    return(
        <nav className={`${theme ? "text-black" : "text-white"}`}>
            <ul className="flex gap-5 items-center">
                <li className="mr-auto"><img src={logo} alt="logo" /></li>
                <li className="flex">Serif <img className="w-3 ml-3" src={arrow} alt="arrow down" /></li>
                <li><div className="w-px h-5 bg-neutral-400"></div></li>
                <li><Toggle /></li>
                <li><img className="w-5" src={moon} alt="moon icon" /></li>
            </ul>
        </nav>
    )
}

export default Nav
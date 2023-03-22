import Definition from './components/Definition'
import Nav from './components/Nav'
import SearchBar from './components/SearchBar'
import { useTheme } from './components/ThemeContext'

function App() {
  const { theme } = useTheme()

  return (
    <div className={`${theme ? "bg-white" : "bg-dark-black"}`}>
      <div className="mx-auto max-w-3xl pt-6 px-6">
        <Nav />
        <SearchBar />
        <Definition />
      </div>
    </div>
  )
}

export default App

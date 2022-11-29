import { useEffect } from "react"
import { useState } from "react"
import Moon from "./icons/IconMoon"
import IconSun from "./icons/IconSun"



const inicialStatedarkMode = localStorage.getItem("theme") === "dark"

const Header = () => {


  const [darkMode, setDarkMode] = useState(inicialStatedarkMode)

  useEffect(() => {
      if(darkMode){
        document.documentElement.classList.add("dark")
        localStorage.setItem("theme", "dark")
      } else{
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme", "light")
      }
  },[darkMode])
  return (
    <header className="md:max-w-xl container mx-auto px-4 pt-8">
        <div className="flex justify-between align-middle">
          <h1 className="text-2xl font-semibold uppercase tracking-[0.5em] text-white">
            Todo
          </h1>
          <button onClick={() => setDarkMode(!darkMode)}>
            {
              darkMode ? <IconSun/> : <Moon/>
            }
          </button>
        </div>
      </header>
  )
}

export default Header
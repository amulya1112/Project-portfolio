import { useContext, createContext, useEffect, useState } from "react";

const AppContext = createContext()

const AppProvider = ({children}) => {
    const [colorTheme, setColorTheme] = useState("dark-mode")
    const [isTemplateOpen, setIsTemplateOpen] = useState(false)
    const [changeTemp, setChangeTemp] = useState('template-1')

    useEffect(() => {
        const currentTheme = localStorage.getItem("theme")
        setColorTheme(currentTheme)
    }, [])

    const handleTheme = (theme) => {
        setColorTheme(theme)
        localStorage.setItem('theme', theme)
    }
    
    useEffect(() => {
        const currentTheme = localStorage.getItem("temp")
        setChangeTemp(currentTheme)
    }, [])
    const handleTemp = (theme) => {
        setChangeTemp(theme)
        localStorage.setItem("temp", theme)

    }

    const openTemplate = () => {
        setIsTemplateOpen(true)
    }

    const closeTemplate = () => {
        setIsTemplateOpen(false)
    }
    return (
        <AppContext.Provider value={{openTemplate,closeTemplate,handleTemp, handleTheme, setIsTemplateOpen, colorTheme, changeTemp, isTemplateOpen }}>
            <div className={`wrapper ${colorTheme === "dark-mode" ?  "light-mode" : "dark-mode"

            }`}> id={`${changeTemp}`}
            {children}
            </div>
            
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {useGlobalContext , AppProvider}

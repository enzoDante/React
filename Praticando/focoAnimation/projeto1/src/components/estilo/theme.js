import {createContext, useState} from 'react'

export const lightTheme = {
    backgroundBase: '#f9f9f9',
    background1: 'white', // #EBF4F8
    textDefault: '#2C2738',
    textNavHover: '#B3B5F5',
    textNavHover2: '#026773',
    backgroundNav: '#2C2738'
}

export const darkTheme = {
    backgroundBase: '#181818',
    background1: '#1C2025',
    textDefault: '#D6E1DF',
    textNavHover: '#024959',
    textNavHover2: '#75BDDF',
    backgroundNav: 'white'
}

export const ThemeContexto = createContext({
    mode: false,
    setMode: () => {}
})

export default function ThemeProvider({children}){
    const [mode, setMode] = useState(false)

    const ContextValue = {
        mode: mode,
        setMode: setMode
    }
    return(
        <ThemeContexto.Provider value={ContextValue}>
            {children}
        </ThemeContexto.Provider>
    )
}

/**
 * light: {
        backgroundBase: "#f9f9f9",
        backgroundLevel1: "#ffffff",
        backgroundLevel2: "#f0f0f0",
        borderBase: "#e5e5e5",
        textColorBase: "#222222",
    },
    dark: {
        backgroundBase: "#181818",
        backgroundLevel1: "#202020",
        backgroundLevel2: "#313131",
        borderBase: "#383838",
        textColorBase: "#FFFFFF",
    }
 */
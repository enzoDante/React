import { createContext, useState } from "react"


export const lightTheme = {
    backgroundBase: '#f9f9f9',
    background1: '#DBF2F9', // #EBF4F8
    background2: '#f0f0f0',
    textDefault: '#2C2738',
    textNavHover: '#B3B5F5',
    textNavHover2: '#026773',
    backgroundNav: '#2C2738',
    backgroundForm: '#F0F0E8',
    backgroundForm2: "#E0E0DA",
    backgroundTitulo: '#4678E8'
}
export const darkTheme = {
    backgroundBase: '#181818',
    background1: '#1C2025',
    background2: '#313131',
    textDefault: '#D6E1DF',
    textNavHover: '#024959',
    textNavHover2: '#75BDDF',
    backgroundNav: 'white',
    backgroundForm: '#202020',
    backgroundForm2: "#333333",
    backgroundTitulo: '#112838'
}

export const ThemeContext = createContext({
    mode: false,
    setMode: () => {}
})

export default function ProviderTheme({children}){
    const [mode, setMode] = useState(false)
    const alterarTema = {
        mode: mode,
        setMode: setMode
    }

    return(
        <ThemeContext.Provider value={alterarTema}>
            {children}
        </ThemeContext.Provider>
    )
}
import {useState, createContext} from 'react'

export const lightTheme = {
    backgroundBase: '#f9f9f9',
    background1: '#DBF2F9', // #EBF4F8
    background2: '#f0f0f0',
    textDefault: '#2C2738',
    textNavHover: '#B3B5F5',
    textNavHover2: '#026773',
    backgroundNav: '#2C2738',
    backgroundForm: '#F0F0E8',
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
    backgroundTitulo: '#112838'
}

export const ThemeContext = createContext({
    mode: false,
    setMode: () => {}
})

export default function ProviderTheme({children}){
    const [mode, setMode] = useState(true)
    const alterarTheme = {
        mode: mode,
        setMode: setMode
    }


    return(
        <ThemeContext.Provider value={alterarTheme}>
            {children}
        </ThemeContext.Provider>
    )
}
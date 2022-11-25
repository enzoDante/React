import {createContext, useState} from 'react'

export const Context = createContext({
    mode: '',
    setMode: () => {}
})

export default function ContextoProvider({children}){
    const [mode, setMode] = useState('legal')
    const mudarContexto = {
        mode: mode,
        setMode: setMode
    }

    return(
        <Context.Provider value={mudarContexto}>
            {children}
        </Context.Provider>
    )
}
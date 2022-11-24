import { createContext, useState } from "react";

export const CorContext = createContext({
    mode: false,
    setMode: (e) => {}
})

export default function CorProvider({children}){
    const [mode, setMode] = useState(false)
    const contextValue = {
        mode: mode,
        setMode: setMode
    }

    return(
        <CorContext.Provider value={contextValue}>
            {children}
        </CorContext.Provider>
    )
}
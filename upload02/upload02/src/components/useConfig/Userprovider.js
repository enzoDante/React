import { createContext, useState } from "react"



export const UserContext = createContext({
    id: '',
    nome: '',
    email: '',
    imagem: '',
    setUser: () => {}
})

export default function UserProvider({children}){
    const [usu, setUsu] = useState({
        id: '',
        nome: '',
        email: '',
        imagem: ''
    })
    const alterarDados = {
        usu: usu,
        setUsu: setUsu
    }

    return(
        <UserContext.Provider value={alterarDados}>
            {children}
        </UserContext.Provider>
    )
}
import { createContext, useState } from "react";

export const UserContext = createContext({
    id: '',
    nome: '',
    img: '',
    setUser: () => {}
})

export default function UserProvider({children}){
    const [user, setUser] = useState({
        id: '',
        nome: 'Enzo Dante',
        img: 'profile.jpg'
    })

    const alterUser = {
        user: user,
        setUser: setUser
    }


    return(
        <UserContext.Provider value={alterUser}>
            {children}
        </UserContext.Provider>
    )
}
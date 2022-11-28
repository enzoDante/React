import { createContext, useState } from "react";

export const UserContext = createContext({
    id: '',
    nome: '',
    img: '',
    setUser: () => {}
})
//profile.jpg
export default function UserProvider({children}){
    const [user, setUser] = useState({
        id: '',
        nome: '',
        img: ''
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
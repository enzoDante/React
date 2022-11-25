import { useContext } from "react"
import { Context } from "./ContextoTeste"

export default function C2(){
    const {mode, setMode} = useContext(Context)
    return(
        <>
            <h1>Componente 2</h1>
            <button onClick={() => {
                if(mode === 'legal')
                    setMode('mudou')
                else
                    setMode('legal')
            }}>Mudar texto</button>
        </>
    )
}

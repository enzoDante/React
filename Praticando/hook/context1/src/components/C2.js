import {  useContext, useEffect } from "react"
import { CorContext } from "./Cor"


export default function C2(){
    const corcc = useContext(CorContext)
    // const [mode, setMode] = useState('false')
    const {mode, setMode} = corcc

    useEffect(() => {
        console.log(corcc)
        console.log(mode)
    })

    return(
        <>
            <h2>aaaaaaaaaaaaa</h2>
            <button onClick={(e) =>{
                setMode(status => !status)
            }}>cccc</button>
        </>
    )
}
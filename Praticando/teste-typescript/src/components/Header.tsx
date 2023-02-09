import React, { useState } from "react"

export default function Header(){

    const [a, seta] = useState({
        text: 'texto',
        aaa: 'asd'
    })
    const [va, setVa] = useState({
        nome: ''
    })

    // function tt(e){
    //     e.preventDefault()
    //     console.log('teste')
    //     const aaaa = 'text'
    //     seta({...a, [aaaa]: 'mudar texto'})

    // }

    const t = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(e.currentTarget) //target
        console.log('teste')
        const aaaa = 'text'
        seta({...a, [aaaa]: 'mudar texto'})
    }

    const aa = (e: React.FormEvent<HTMLInputElement>) => {
        console.log(e.currentTarget)
        console.log(e.currentTarget.value)
        const asd = 'nome'
        setVa({...va, [asd]: e.currentTarget.value})
    }

    return(
        <div>
            <button onClick={t} className="teste">aqqqq</button>
            teste
            <input type="text" name="teste" id="teste" onChange={aa} value={va.nome}/>
            {a.text}
            e
            {a.aaa}
        </div>
    )
}
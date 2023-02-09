import React, { useState } from "react"

export default function Header(){

    const [count, setCount] = useState<number>(9)

    const [a, seta] = useState({
        text: 'texto',
        aaa: 'asd'
    })
    const [va, setVa] = useState({
        nome: ''
    })
    

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

    const Testeexemp = () => {

        return (
            <>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatem dolorem fugit nihil neque tenetur asperiores deserunt repudiandae id atque, rerum fugiat iusto omnis nesciunt sequi, maiores reiciendis numquam impedit.</p>
                a
            </>
        )
    }

    type Title = {
        text: string;
        size?: "small" | "large";
    }
    const Exepa = ({text, size = 'large'} : Title) =>{
        return (
            <div
            style={{
                fontSize: size === "small" ? "1.2em" : "3em"
            }}>
                {text}
            </div>
        )
    }

    const user = {
        id: 2,
        nome: 'um nome',
        adm: false,
        niver: new Date('2005-09-20')
    }
    type useratt = typeof user
    // recebe os valores de user (number, string, boolean, date...)

    const outro: useratt = {
        id: 1,
        nome: "as",
        niver: new Date(''),
        adm: true,
    }

    return(
        <div>
            <button onClick={t} className="teste">aqqqq</button>
            teste
            <input type="text" name="teste" id="teste" onChange={aa} value={va.nome}/>
            {a.text}
            e
            {a.aaa}
            <img src="/images/tecnologia.jpg" alt="" />
            <Testeexemp />
            <Exepa size="small" text="adasd" />
        </div>
    )
}
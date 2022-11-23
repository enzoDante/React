import React, { useEffect, useState } from "react"

export default function FormUsu(){
    const [user, setUser] = React.useState({nome: '', email: '', senha: ''})
    const [validar, setValidar] = useState({nomep: '', emailp: '', senhap: ''})

    const valueInput = e => {
        //...user -> o resto q n seja o e.target.name
        //e.target.name -> é o name do input (passado no evento 'e')
        //também serve o e.target.id - é a msm coisa, no caso usa o id
        //e.target.value -> valor digitado pelo usuario no input
        setUser({...user, [e.target.name]: e.target.value})
        // console.log("teste")
        // console.log(e.target.name)

        let msg = ``
        if(e.target.value.length < 3)
            msg = `Digite ${e.target.name} corretamente`
        setValidar({...validar, [e.target.id]: msg})
        //e.target.id -- é o id do input!!!
        //ou seja, irá mudar onde e.target.id é = {?email:?} por exemplo.
        // alterarText(e)
    }

    // const alterarText = e => {
        
    //     setValidar({...validar, [e.target.id]: `Digite ${e.target.name} corretamente `})
    // }

    useEffect(() => {
        console.log(user)
        // console.log("separa")
    })

    return(
        <>
            <form action="" method="post">
                <div>
                    <input type="text" onChange={valueInput} value={user.nome} name="nome" id="nomep" />
                    <p>{validar.nomep}</p>
                </div>
                <div>
                    <input type="password" onChange={valueInput} value={user.senha} name="senha" id="senhap" />
                    <p>{validar.senhap}</p>
                </div>
                <div>
                    <input type="email" onChange={valueInput} value={user.email} name="email" id="emailp" />
                    <p>{validar.emailp}</p>
                </div>
                <button onClick={(e) =>{
                    e.preventDefault()
                    setUser({nome: '', email: '', senha: ''})
                }}>Enviar teste limpa</button>
            </form>
        </>
    )
}
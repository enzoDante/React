import { useState } from "react"

export default function Form(){
    function cadastrar(e){
        e.preventDefault()
        console.log(nome)
        console.log(senha)
    }

    const [nome, setNome] = useState("Dante")
    const [senha, setSenha] = useState()
    return(
        <div>
            <h1>cadastro</h1>
            <form onSubmit={cadastrar}>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" onChange={(e) => {
                        setNome(e.target.value)
                    }} value={nome} id="nome" name="nome" placeholder="Digite Nome:" />
                </div>
                <div>
                    <label htmlFor="senha">Senha</label>
                    <input onChange={(e) => {
                        setSenha(e.target.value)
                    }} type="password" id="senha" name="senha" placeholder="Digite Senha:" />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
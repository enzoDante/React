import { useState } from "react";
import { Link } from "react-router-dom";
import { StyledCont } from "./StyledCont";

export default function Login(){

    const [formData, setFormData] = useState({nome: '', senha: ''})
    // const [valido, setValido] = useState({nome: '', senha: ''})

    const setValues = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
        
    }

    return(
        <StyledCont>
            <form action="" method="post">
                <div>
                    <input type="text" onChange={setValues} name="nome" id="nome" placeholder="Nome:" />
                    <p></p>
                </div>
                <div>
                    <input type="password" onChange={setValues} name="senha" id="senha" placeholder="Senha:" />
                    <p></p>
                </div>
                <button type="submit" onClick={(e) => {
                    e.preventDefault()

                }}>Logar</button>
                <Link to='/Cadastro'>Criar conta</Link>
            </form>
        </StyledCont>
    )
}
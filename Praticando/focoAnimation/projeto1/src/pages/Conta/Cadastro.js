import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { StyledDiv } from './StyledCad'


export default function Cadastro(){
    const [user, setUser] = useState({nome: '', email: '', senha: '', csenha: ''})
    const [valido, setValido] = useState({nome: '', email: '', senha: '', csenha: ''})

    const valueInput = e => {
        setUser({...user, [e.target.name]: e.target.value})

        let msg = ` `
        if(e.target.value.length < 3)
            msg = `Preenche com mais de 3 caracteres!`
        
        if(e.target.name === 'email' && (e.target.value.indexOf('@') < 0|| e.target.value.indexOf('.com') < 0 || e.target.value.indexOf('@.com') > 0))
            msg = 'Digite um e-mail válido!'
        
        if(e.target.name === 'csenha' && e.target.value !== user.senha)
            msg = 'As senhas são diferentes'
        
        setValido({...valido, [e.target.name]: msg})
    }
    useEffect(() => {
        // console.log(user)
    })

    return(
        <StyledDiv>
            <form action="" method="post" autoComplete='off'>
                <div>
                    <label className='lab' htmlFor="nome">Nome</label>
                    <input type="text" onChange={valueInput} value={user.nome} name="nome" id="nome" />
                    <p>{valido.nome}</p>
                </div>
                <div>
                    <label className='lab' htmlFor="email">Email:</label>
                    <input type="text" onChange={valueInput} value={user.email} name="email" id="email" />
                    <p>{valido.email}</p>
                </div>
                <div>
                    <label className='lab' htmlFor="senha">Senha</label>
                    <input type="text" onChange={valueInput} value={user.senha} name="senha" id="senha" />
                    <p>{valido.senha}</p>
                </div>
                <div>
                    <label className='lab' htmlFor="csenha">Confirmar Senha</label>
                    <input type="text" onChange={valueInput} value={user.csenha} name="csenha" id="csenha" />
                    <p>{valido.csenha}</p>
                </div>
                <button type="submit" onClick={(e) => {
                    e.preventDefault()
                    if(valido.nome === ' ' && valido.email === ' ' && valido.senha === ' ' && valido.csenha === ' '){
                        console.log('enviado com sucesso')
                    }

                }}>Cadastrar</button>
                <label htmlFor="login"><Link to='/Logar'>Logar</Link></label>
            </form>
        </StyledDiv>
    )
}
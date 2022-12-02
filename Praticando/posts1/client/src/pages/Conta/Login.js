import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Services } from "../../components/userConfig/GetValues";
import { UserContext } from "../../components/userConfig/user";
import { StyledCont } from "./StyledCont";

export default function Login(){

    const [formData, setFormData] = useState({nome: '', senha: ''})
    const [valido, setValido] = useState({nome: '', senha: ''})

    const setValues = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
        
    }

    const {user, setUser} = useContext(UserContext)
    const service = Services()
    const botao = e => {
        e.preventDefault()
        
        if(formData.nome !== '' && formData.senha !== ''){
            service.GetLogin(formData.nome, formData.senha).then((e) => {
                if(e.data.length > 0){
                    console.log(e.data)
                    let valordouser = null
                    e.data.forEach((el) => {
                        console.log(el)
                        valordouser = {
                            id: el.id_usuario,
                            img: el.imagem,
                            nome: el.nome,
                            user: el.user
                        }
                    })
                    localStorage.setItem("userRedeSocial1", JSON.stringify({
                        id: valordouser.id,
                        nome: valordouser.nome,
                        user: valordouser.user,
                        img: valordouser.img
                    }))
                    setUser({
                        id: valordouser.id,
                        nome: valordouser.nome,
                        user: valordouser.user,
                        img: valordouser.img
                    })
                    window.location.href = 'http://localhost:3000/perfil?user='+valordouser.user
                }else{
                    console.log('aqui')
                    service.GetNome(formData.nome).then((e) => {
                        console.log(e)
                        if(e.data.length <= 0){
                            const n = 'nome'
                            setValido({...valido, [n]: 'Nome inexistente!'})
                        }else{
                            setValido({nome: '', senha: 'Senha inválida!'})
                        }
                    })
                }
            })
        }
    }

    return(
        <StyledCont>
            {user.id === '' && (
                <form action="" method="post">
                    <div>
                        <input type="text" onChange={setValues} name="nome" id="nome" placeholder="Nome:" />
                        <p>{valido.nome}</p>
                    </div>
                    <div>
                        <input type="password" onChange={setValues} name="senha" id="senha" placeholder="Senha:" />
                        <p>{valido.senha}</p>
                    </div>
                    <button type="submit" onClick={botao}>Logar</button>
                    <Link to='/Cadastro'>Criar conta</Link>
                </form>
            )}
        </StyledCont>
    )
}
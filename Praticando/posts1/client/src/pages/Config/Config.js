import { useContext, useRef, useState } from "react";
import { UserContext } from "../../components/userConfig/user";
import { StyledConfig } from "./StyledConfig";

export default function Config(){
    //setUser
    const {user} = useContext(UserContext)
    const [formData, setFormData] = useState({nome: user.nome, senha: '', nsenha: ''})
    const [validar, setValidar] = useState({nome: '', senha: '', nsenha: ''})

    const setValues = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
        let msg = ''
        if(e.target.value.length < 5)
            msg = 'Insira pelo menos 5 caracteres!'
        setValidar({...validar, [e.target.name]: msg})
    }

    //========= imagem ===========
    const [img, setImg] = useState(user.img)
    const imgRef = useRef()

    const imgValue = e => {
        setImg(URL.createObjectURL(e.target.files[0]))
    }

    return(
        <StyledConfig>
            <form action="" method="post" autoComplete="off">
                <div>
                    <input type="file" ref={imgRef} onChange={imgValue} name="foto" id="foto" />
                    <label htmlFor="foto" id="limg">Imagem de perfil <img src="/images/image.png" alt="" /></label>
                </div>
                <div id="profPic">
                    <img src={img !== user.img ? img : "/images/"+img} alt="" />
                </div>

                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" onChange={setValues} name="nome" id="nome" value={formData.nome} />
                    <p>{validar.nome}</p>
                </div>
                <div>
                    <label htmlFor="senha">Senha antiga</label>
                    <input type="password" onChange={setValues} name="senha" id="senha" />
                    <p>{validar.senha}</p>
                    <label htmlFor="nsenha">Nova senha</label>
                    <input type="password" onChange={setValues} name="nsenha" id="nsenha" />
                    <p>{validar.nsenha}</p>
                </div>
                <button type="submit" onClick={(e) => {
                    e.preventDefault()
                    console.log(imgRef)

                }}>Atualizar</button>
            </form>
        </StyledConfig>
    )
}
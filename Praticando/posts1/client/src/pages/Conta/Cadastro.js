import { useEffect, useRef, useState } from "react";
import { StyledCont } from "./StyledCont";
import { Link } from "react-router-dom";
import Axios from 'axios'

export default function Cadastro(){

    const [formData, setFormData] = useState({nome: '', senha: '', csenha: ''})
    const [valido, setValido] = useState({nome: '', senha: '', csenha: ''})

    const setValues = e =>{
        setFormData({...formData, [e.target.name]: e.target.value})
        let msg = ' '

        if(e.target.value.length < 5)
            msg = 'Digite pelo menos 5 caracteres!'
        setValido({...valido, [e.target.name]: msg})

        if((e.target.name === 'csenha' && formData.senha !== e.target.value)){
            msg = 'As senhas precisam ser iguais!'
            let targt = 'csenha'
            setValido({...valido, [targt]: msg})
        }
    }

    // ============ set image ==============
    const [img, setImg] = useState('')
    const fileInput = useRef()

    const setProfile = e => {
        setImg(URL.createObjectURL(e.target.files[0]))
    }

    const removerImg = () => {
        setImg('')
        fileInput.current.value = ''
    }
    // =====================================
    const butao = e => {
        e.preventDefault()
        if(valido.nome === ' ' && valido.senha === ' ' && valido.csenha === ' '){
            alert('sucesos')

            Axios.post('http://localhost:3001/api/Cadastrar', {
                nome: formData.nome,
                senha: formData.senha,
                img: 'teste'
            }).then((e) => {
                alert('foi?')
                console.log(e)
            })
        }
    }
    //==================================
    useEffect(() => {
        // console.log(valido)
    })

    return(
        <StyledCont>
            <form action="" method="post" autoComplete="off">
                <div>
                    <input type="file" onChange={setProfile} ref={fileInput} accept='image/*' name="foto" id="foto" />
                    <label id="lfoto" htmlFor="foto">Imagem de perfil <img src="/images/image.png" alt="" /></label>
                </div>
                {img !== '' && (
                    <>
                       <span onClick={removerImg}>Deletar</span>
                        <div id="imagemPerfil">
                            <img src={img} alt="" />
                        </div>
                    </>
                )}
                <div>
                    <input type="text" onChange={setValues} name="nome" id="nome" placeholder="Nome:"
                        className={(valido.nome !== '' && valido.nome !== ' ') ? 'invalido' : undefined}
                    />
                    <p>{valido.nome}</p>
                </div>
                <div>
                    <input type="password" onChange={setValues} name="senha" id="senha" placeholder="Senha:" 
                        className={(valido.senha !== '' && valido.senha !== ' ')? "invalido":undefined}
                    />
                    <p>{valido.senha}</p>
                </div>
                <div>
                    <input type="password" onChange={setValues} name="csenha" id="csenha" placeholder="Confirmar senha:"
                        className={(valido.csenha !== '' && valido.csenha !== ' ')? "invalido":undefined}
                    />
                    <p>{valido.csenha}</p>
                </div>
                <button type="submit" onClick={butao}>Cadastrar</button>

                <Link to='/Login'>Login</Link>
            </form>
        </StyledCont>
    )
}
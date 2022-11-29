import { useEffect, useRef, useState } from "react";
import { StyledCont } from "./StyledCont";
import { Link } from "react-router-dom";
import Axios from 'axios'

export default function Cadastro(){

    const [formDataa, setFormData] = useState({nome: '', senha: '', csenha: ''})
    const [valido, setValido] = useState({nome: '', senha: '', csenha: ''})

    const setValues = e =>{
        setFormData({...formDataa, [e.target.name]: e.target.value})
        let msg = ' '

        if(e.target.value.length < 5)
            msg = 'Digite pelo menos 5 caracteres!'
        setValido({...valido, [e.target.name]: msg})

        if((e.target.name === 'csenha' && formDataa.senha !== e.target.value)){
            msg = 'As senhas precisam ser iguais!'
            let targt = 'csenha'
            setValido({...valido, [targt]: msg})
        }
    }

    // ============ set image ==============
    const [img, setImg] = useState('')
    const [fileImg, setFileImg] = useState(null)
    const fileInput = useRef()

    const setProfile = e => {
        setImg(URL.createObjectURL(e.target.files[0]))
        setFileImg(e.target.files)
    }

    const removerImg = () => {
        setImg('')
        setFileImg(null)
        fileInput.current.value = ''
    }
    // =====================================
    const butao = e => {
        e.preventDefault()
        if(valido.nome === ' ' && valido.senha === ' ' && valido.csenha === ' '){
            alert('sucesos')

            let dados = new FormData()
            dados.append("nome", formDataa.nome)
            dados.append("senha", formDataa.senha)
            dados.append("img", fileImg)

            Axios.post('http://localhost:3001/api/Cadastrar', {
                nome: formDataa.nome,
                senha: formDataa.senha,
                img: fileImg,
                headers: {
                    "Content-Type": `multipart/form-data`
                }
            }
            ).then((e) => {
                alert('foi?')
                console.log(e)
            })
        }
    }
    //==================================
    useEffect(() => {
        // console.log(valido)
        console.log(fileImg)
    })

    return(
        <StyledCont>
            <form action="" method="post" encType="multipart/form-data" autoComplete="off">
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
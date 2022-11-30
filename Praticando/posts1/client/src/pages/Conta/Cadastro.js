import { useEffect, useRef, useState } from "react";
import { StyledCont } from "./StyledCont";
import { Link } from "react-router-dom";
import Axios from 'axios'
import { supabase } from "../../components/userConfig/bdConfig";


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
    const [nomeimg, setNomeImg] = useState('')

    const setProfile = e => {
        setImg(URL.createObjectURL(e.target.files[0]))
        setFileImg(e.target.files[0])
        setNomeImg(e.target.files[0].name.split('.').pop())
    }

    const removerImg = () => {
        setImg('')
        setFileImg(null)
        fileInput.current.value = ''
    }
    // =====================================
    const butao = async e => {
        e.preventDefault()
        if(valido.nome === ' ' && valido.senha === ' ' && valido.csenha === ' '){
            alert('sucesos')

            let nomedaimagem = ''
            if(img !== ''){
                await supabase.storage.from("imagens").upload('public/'+formDataa.nome.replace(/ /g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, "")+"."+nomeimg, fileImg) //+fileImg?.name

                nomedaimagem = 'https://xdcauufxptlfaznnkmlt.supabase.co/storage/v1/object/public/imagens/public/'+formDataa.nome.replace(/ /g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, "")+"."+nomeimg
            }
            //img!== '' ? 'public/'+formDataa.nome+"."+nomeimg : ''
            const dados = new FormData()
            dados.append("img", nomedaimagem) //fileImg
            dados.append("nome", formDataa.nome)
            dados.append("senha", formDataa.senha)
            //multipart/form-data;  boundary=${dados._boundary}
            const headers = {
                'headers': {
                    'Content-Type': 'application/json'
                }
            }
            

            await Axios.post('http://localhost:3001/api/Cadastrar', dados, headers).then((e) => {
                alert('foi?')
                console.log(e)
            })
        }
    }
    //==================================
    useEffect(() => {
        // console.log(valido)
        console.log(fileImg)
        console.log(fileImg?.name)
        console.log('ue')
        console.log(nomeimg)
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
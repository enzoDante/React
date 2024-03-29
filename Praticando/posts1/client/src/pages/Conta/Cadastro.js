import { useEffect, useRef, useState, useContext } from "react";
import { StyledCont } from "./StyledCont";
import { Link } from "react-router-dom";
import { supabase } from "../../components/userConfig/bdConfig";
import { Services } from "../../components/userConfig/GetValues";
import { UserContext } from "../../components/userConfig/user";


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
    const {user, setUser} = useContext(UserContext)
    const service = Services()
    const butao = async e => {
        e.preventDefault()
        let nomevalido = ''
        service.GetNome(formData.nome).then( async(dado) => {
            
            const nomevalor = 'nome'
            if(dado.data.length > 0){
                setValido({...valido, [nomevalor]: 'Nome existente!'})
                nomevalido = 'Nome existente!'
            }
            //window.location.reload()
            //cadastro-==========================================================
            if(nomevalido === '' && valido.nome === ' ' && valido.senha === ' ' && valido.csenha === ' '){
                alert('sucesos')
    
                let nomedaimagem = ''
                let urs = formData.nome.replace(/ /g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, "")
                if(img !== ''){
                    await supabase.storage.from("imagens").upload('public/'+formData.nome.replace(/ /g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, "")+"."+nomeimg, fileImg) //+fileImg?.name
    
                    nomedaimagem = 'https://xdcauufxptlfaznnkmlt.supabase.co/storage/v1/object/public/imagens/public/'+formData.nome.replace(/ /g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, "")+"."+nomeimg
                }

                //serve p pegar a url da imagem q ta online mt útil
                // const {data} = supabase.storage.from('imagens').getPublicUrl('public/agora-sim-ultimo-teste.jpeg')
                // console.log(data.publicUrl)

                await supabase.from('usuarios').insert({
                    nome: formData.nome,
                    user: urs,
                    senha: formData.senha,
                    imagem: nomedaimagem
                }).then(() => {

                    service.GetUserId(formData.nome).then((e) => {
                        let valordoId = null
                        e.data.forEach((el) => {
                            valordoId = el.id_usuario                            
                        })
                        localStorage.setItem("userRedeSocial1", JSON.stringify({
                            id: valordoId,
                            nome: formData.nome,
                            user: urs,
                            img: nomedaimagem
                        }))
                        setUser({
                            id: valordoId,
                            nome: formData.nome,
                            user: urs,
                            img: nomedaimagem
                        })
                        window.location.href = 'http://localhost:3000/perfil?user='+urs

                    })
                })
            }
        })
    }
    //==================================
    useEffect(() => {
        // console.log(valido)
        // console.log(fileImg)
        // console.log(fileImg?.name)
        // console.log('ue')
        // console.log(nomeimg)
    })

    return(
        <StyledCont>
            {user.id === '' && (
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
            )}
        </StyledCont>
    )
}
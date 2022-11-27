import { useEffect, useRef, useState } from "react";
import { StyledPublicar } from "./StyledPublicar";


export default function Publicar(){
    const [post, setPost] = useState({titulo: '', texto: ''})
    const [validar, setValidar] = useState({titulo: '', texto: ''})

    const setValues = e => {
        setPost({...post, [e.target.name]: e.target.value})
        let msg = ' '
        if(e.target.value.length < 3)
            msg='Preenche o campo corretamente!'

        setValidar({...validar, [e.target.name]: msg})
    }

    const [img, setImg] = useState([])
    const [imgTarget, setImgTarget] = useState([]) //enviar ao back-end p upload
    // https://sharklabs.com.br/reactjs-nodejs-tutorial-sobre-file-upload/

    const ref = useRef() //tenho q estudar isso
    const [imgMax, setImgMax] = useState('')
    
    const criarImagem = (e) => {
        if(img.length < 4){
            setImg([...img, URL.createObjectURL(e.target.files[0])])
            setImgTarget([...imgTarget, e.target.files])
            setImgMax(' ')
        }
        else setImgMax('Você atingiu o limite de 4 imagens!')
        setTimeout(() => {
            setImgMax(' ')
        }, 6000);
    }
    
    const limparInputFile = id => {
        const s = img.filter((foto, index) => index !== id)
        const s2 = imgTarget.filter((t, index) => index !== id)
        setImg(s)
        setImgTarget(s2)
    }
    // const limparInputFile = () => {
    //     ref.current.value = ""
    // }
    useEffect(() => {
        // console.log('aa')
        // console.log(img)
        // console.log("separa")
        // console.log(imgTarget)
        // console.log(i)
    })

    return(
        <StyledPublicar>
            <form action="" method="post" autoComplete="off">
                <div>
                    <input type="text" className={(validar.titulo !== ' ' && validar.titulo !== '') ? "invalido" : undefined} name="titulo" id="titulo" onChange={setValues} placeholder="Título" />
                    <p>{validar.titulo}</p>
                </div>
                <div>
                    <input type="file" name="img" id="img" accept="image/*" ref={ref} onChange={criarImagem} />
                    <label htmlFor="img" id="img">inserir imagem <img src="/images/image.png" alt="" /></label>
                    <p>{imgMax}</p>
                </div>
                <div id="divImagens">
                    {img.length > 0 && img.map((foto, index) => {
                    
                        return(                            
                            <div key={foto} className={(img.length === 1 || (index===2 && img.length === 3)) ? "imagemUnica bloco" : "vimgs bloco"}>
                                <span type="" className="removerimg" onClick={() => {
                                    limparInputFile(index)
                                }}>Remover</span>

                                <div id="imgpost" className={(img.length === 1 || (index===2 && img.length === 3)) ? "imagemUnica" : "vimgs"}>
                                
                                    <img onClick={() => {
                                        limparInputFile(index)
                                    }} src={foto} alt="" />
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <textarea name="texto" className={(validar.texto !== ' ' && validar.texto !== '') ? "invalido" : undefined} onChange={setValues} id="texto"></textarea>
                    <p>{validar.texto}</p>
                </div>

                <button type="submit" onClick={(e) => {
                    e.preventDefault()
                    if(validar.titulo === ' ' && validar.texto === ' '){
                        alert('sucesso')
                        console.log("upload")
                        console.log(img)
                    }
                }}>Publicar</button>
            </form>
        </StyledPublicar>
    )
}
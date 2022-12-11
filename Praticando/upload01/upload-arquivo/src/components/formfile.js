import {useRef, useState} from 'react'
import axios from 'axios'

export default function FormFile(){
    const [img, setImg] = useState({
        preview: '',
        file: ''
    })
    const file = useRef()

    const mudar = (e) => {

        setImg({
            preview: URL.createObjectURL(e.target.files[0]),
            file: e.target.files[0]
        })
    }
    const remover = (e) => {
        setImg({preview: '', file: ''})
        file.current.value = ''
    }

    const enviar = (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('file', img.file)

        axios.post("http://localhost:8081/upload", data, {}).then((e) => {
            console.log('teste')
            console.log(e)
        })
    }

    return(
        <div>
            <form action="" method="post">
                <input type="file" accept='image/*' name="" onChange={mudar} ref={file} id="" />
                <button type='submit' onClick={enviar}>Enviar</button>
            </form>
            <div>
                {img.preview !== '' ? (
                    <>
                        <div>
                            <button onClick={remover}>deletar</button>
                        </div>
                        <div>
                            <img src={img.preview} alt="" />
                        </div>
                    </>
                    
                ) : null}
            </div>
        </div>
    )
}
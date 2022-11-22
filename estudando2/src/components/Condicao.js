import {useState} from 'react';

export default function Condicao(){
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault();
        setUserEmail(email)
    }

    return(
        <div>
            <form action="" method="post">
                <input onChange={(e) => setEmail(e.target.value) } type="email" name="email" id="email" />
                <button onClick={enviarEmail}>Enviar</button>
                {userEmail} qd aperta botão
                <br/>
                enquanto digita:== 
                {email}
                <br/>
                <p>condição abaixo</p>
                <br/>
                {userEmail && (
                    <div>
                        <p>email foi preenchido</p>
                        <button onClick={() => {
                            setUserEmail('')
                        }}>Limpar email</button>
                    </div>
                )}
            </form>
        </div>
    )
}
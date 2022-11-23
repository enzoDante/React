import { useState } from "react";
import { StyledPerfil } from "./StyledPerfil";
import {Link} from 'react-router-dom'


export default function Perfil(){
    const [perfilAtivado, setPerfilAtivado] = useState(false)

    return(
        <StyledPerfil>
            <div className="profile" onClick={(e) => {
                setPerfilAtivado(status => !status)
            }}>
                <img src="/images/profile.jpg" alt="foto de perfil" />
            </div>

            <div className={perfilAtivado ? "menu active" : "menu"}>
                <ul>
                    <li><img src="/images/user.png" alt="" /><Link to="/perfil">Perfil</Link></li>
                    <li><img src="/images/settings.png" alt="" /><Link to="/config">Configs</Link></li>
                    <li><img src="/images/question.png" alt="" /><Link to="/ajuda">Ajuda</Link></li>
                    <li><img src="/images/log-out.png" alt="" /><Link to="/sair">Sair</Link></li>
                </ul>
            </div>

        </StyledPerfil>
    )
}
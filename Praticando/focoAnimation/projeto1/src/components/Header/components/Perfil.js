import { useState } from "react";
import { StyledPerfil } from "./StyledPerfil";


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
                    <li><img src="/images/user.png" alt="" /><a href="/">Perfil</a></li>
                    <li><img src="/images/settings.png" alt="" /><a href="/">Configs</a></li>
                    <li><img src="/images/question.png" alt="" /><a href="/">Ajuda</a></li>
                    <li><img src="/images/log-out.png" alt="" /><a href="/">Sair</a></li>
                </ul>
            </div>

        </StyledPerfil>
    )
}
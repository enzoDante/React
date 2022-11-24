import React, {  useState, useContext } from "react";
import { StyledPerfil } from "./StyledPerfil";
import {Link} from 'react-router-dom'
import { ThemeContexto } from "../../estilo/theme";


export default function Perfil({setLogado}){
    const [perfilAtivado, setPerfilAtivado] = useState(false)
    const {mode, setMode} = useContext(ThemeContexto)

    React.useEffect(() => {
        // console.log(mode)
    })
    return(
        <StyledPerfil>
            <div className="profile" onClick={(e) => {
                setPerfilAtivado(status => !status)
            }}>
                <img src="/images/profile.jpg" alt="foto de perfil" />
            </div>

            <div className={perfilAtivado ? "menu active" : "menu"}>
                <h3>Enzo Dante</h3>
                <ul>
                    <li><img src="/images/user.png" alt="" /><Link to="/perfil">Perfil</Link></li>
                    <li><img src="/images/settings.png" alt="" /><Link to="/config">Configs</Link></li>
                    <li>
                        <button id="tema" onClick={(e) => {
                            setMode(status => !status)
                        }}> 
                            {/* night-mode2.png  -  bom e moon.png - bom */}
                            {/* brightness.png  =-= bom */}
                            <img src={"/images/"+ (mode?'brightness.png' : 'night-mode2.png')} alt=""/>
                        </button>
                        <label htmlFor="tema">Tema</label>
                    </li>

                    <li><img src="/images/question.png" alt="" /><Link to="/ajuda">Ajuda</Link></li>
                    <li><img src="/images/log-out.png" alt="" /><Link to="/sair">Sair</Link></li>
                </ul>
            </div>

        </StyledPerfil>
    )
}
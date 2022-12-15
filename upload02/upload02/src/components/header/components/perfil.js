import { useContext, useState } from "react";
import {ThemeContext} from '../../estiloGeral/theme'
import { StyledPerfil } from "./StyledPerfil";
import {Link} from 'react-router-dom'
import { UserContext } from "../../useConfig/Userprovider";

export default function Perfil(){
    const [ativado, setAtivado] = useState(false)
    const {mode, setMode} = useContext(ThemeContext)
    const {usu, setUsu} = useContext(UserContext)

    return(
        <StyledPerfil>
            {/* imagem de perfil */}
            <div className="profile" onClick={() => {
                setAtivado(status => !status)
            }}>
                <img src="/image/profile.jpg" alt="" />
            </div>
            
            {/* ====coisas do perfil========= */}
            <div className={ativado ? "menu active" : "menu"}>
                <h3>{usu.nome}</h3>
                <ul>
                    <li><img src="/image/user.png" alt="" /><Link to={"/perfil"}>Perfil</Link></li>
                    {/* talvez eu tire o abaixo, n será necessário! */}
                    <li><img src="/image/settings.png" alt="" /><Link to="/config">Configs</Link></li>

                    <li>
                        <button id="tema" onClick={() => {
                            setMode(status => !status)
                        }}>
                            <img src={"/image/"+ (mode?"brightness.png" : "night-mode2.png")} alt="" />
                            <label htmlFor="tema">Tema</label>
                        </button>
                    </li>

                    <li>
                        <img src="/image/log-out.png" alt="" />
                        <p onClick={() => {
                            setUsu({
                                id: '',
                                nome: '',
                                email: '',
                                imagem: ''
                            })
                            // sair da conta!!!
                        }}>Sair</p>
                    </li>

                </ul>

            </div>
        </StyledPerfil>
    )
}
import { useContext, useState } from "react"
import { UserContext } from "../../userConfig/user"
import {StyledPerfil} from './StyledPerfil'
import { Link } from "react-router-dom"
import { ThemeContext } from "../../estilos/theme"

export default function Perfil(){
    const {user, setUser} = useContext(UserContext)
    const {mode, setMode} = useContext(ThemeContext)
    const [ativado, setAtivado] = useState(false)


    return(
        <StyledPerfil>
            <div className="profile" onClick={() => {
                setAtivado(status => !status)
            }}>
                {/* "/images/"+ */}
                <img src={user.img} alt="foto de perfil" />
            </div>
            {/* =================== */}
            <div className={ativado ? "menu active" : "menu"}>
                <h3>{user.nome}</h3>
                <ul>
                    <li><img src="/images/user.png" alt="" /><Link to={"/perfil?user="+user.user}>Perfil</Link></li>

                    <li><img src="/images/settings.png" alt="" /><Link to="/config">Configs</Link></li>

                    <li>
                        <button id="tema" onClick={() => {
                            setMode(status => !status)
                        }}>
                            <img src={"/images/"+(mode ? "brightness.png" : "night-mode2.png")} alt="" />
                            <label htmlFor="tema">Tema</label>
                        </button>
                    </li>

                    {/* <li><img src="/images/question.png" alt="" /><Link to="/ajuda">Ajuda</Link></li> */}

                    <li><img src="/images/log-out.png" alt="" /><p onClick={() => {
                        localStorage.removeItem("userRedeSocial1");
                        setUser({
                            id: '',
                            nome: '',
                            user: '',
                            img: ''
                        })
                    }}>Sair</p></li>
                </ul>
            </div>
        </StyledPerfil>
    )
}
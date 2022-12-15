import { StyledHeader } from "./StyledHeader";
import { Link } from "react-router-dom";
import Perfil from "./components/perfil";
import { useContext } from "react";
import { UserContext } from "../useConfig/Userprovider";
import { ThemeContext } from "../estiloGeral/theme";

export default function Header(){
    const {usu} = useContext(UserContext)
    const {mode, setMode} = useContext(ThemeContext)

    return(
        <StyledHeader>
            <Logo />
            <Nav />
            {usu.id !== '' ? <Perfil /> : (<div id="elemento-cadastro-tema">
                <Link id='criarconta' to='/Cadastro'>Criar conta</Link>
                    <button id='tema2' onClick={() => {
                        setMode(status => !status)
                    }}>
                        <img src={"/image/"+(mode ? "brightness.png" : "night-mode2.png")} alt="" />
                    </button>
            </div>)}
        </StyledHeader>
    )
}

function Logo(){
    return(
        <div id="logo">
            <img src="image/favicon.ico" alt="" />
        </div>
    )
}

function Nav(){
    return(
        <div id="nav">
            <Link className="links" to='/'>Home</Link>
            <Link className="links" to='/Sobre'>Sobre</Link>
            <Link className="links">Contato</Link>
        </div>
    )
}
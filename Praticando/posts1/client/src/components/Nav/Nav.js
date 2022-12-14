import styled from "styled-components"
import { StyledNav } from "./components/StyledNav"
import {Link} from 'react-router-dom'
import { useContext, useState } from "react"
import { UserContext } from "../userConfig/user"
import Perfil from "./components/Perfil"
import { ThemeContext } from "../estilos/theme"

const StyledMenu = styled.header`
    display: flex;
    flex-direction: row;
    min-height: 80px;
    position: fixed;
    top: 0;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.background1 || "#97ACDE"};
    align-items: center;
    gap: 16px;
    /* position: fixed; */
    width: 100%;
    .logo {
    width: 100%;
    max-width: 80px;
    @media (min-width: 600px) {
      max-width: 127px;
    }
  }

  #criarconta{
    color: ${({theme}) => theme.textDefault};
  }

  #tema2{
    background-color: transparent;
    border: none;
    margin: 10px;
    cursor: pointer;
  }
`
export default function Nav(){
    const {user} = useContext(UserContext)
    const {mode, setMode} = useContext(ThemeContext)
    // window.innerWidth > 600 && 
    return(
        <StyledMenu>
            <Logo />
            <Navegar />
            {user.id !== '' ? <Perfil /> : (
                <div>
                    <Link id='criarconta' to='/Cadastro'>Criar conta</Link>
                    <button id='tema2' onClick={() => {
                        setMode(status => !status)
                    }}> <img src={"/images/"+(mode ? "brightness.png" : "night-mode2.png")} alt="" /> </button>
                </div>
            )}
        </StyledMenu>
    )
}



const StyledLogo = styled.div`
    margin: 10px;
    @media screen and (max-width: 600px){
        display: none;
    }
`

function Logo(){
    return(
        <StyledLogo>
            <img src="/images/logo.ico" alt="" />
        </StyledLogo>
    )
}

function Navegar(){
    const [ativado, setAtivado] = useState(false)

    return(
        <StyledNav>
            <div id="menu" onClick={()=>{
                setAtivado(status => !status)
            }}>|||</div>
            <div id={ativado ? undefined : "links"} className={ativado ? "navAtiv" : undefined}>
                <Link to='/'>Home</Link>
                <Link to='/Publicar'>Postar</Link>
                <Link to='/Contato'>Contato</Link>
            </div>
        </StyledNav>
    )
}
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { StyledNav } from './components/StyleNav'
import Perfil from './components/Perfil'
import { useContext, useState } from 'react'
import { ThemeContexto } from '../estilo/theme'

const StyledMenu = styled.header`
    /* margin-top: -1px; */
    /* margin: -1px; */
    display: flex;
    flex-direction: row;
    min-height: 80px;
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

  #tema2{
    width: 16px;
    background-color: transparent;
    border: none;
    margin: 10px;
    cursor: pointer;
  }
`

export default function Header(){
    // precisa do node js--- login e cadastro
    const [logado, setLogado] = useState(true)
    const {mode, setMode} = useContext(ThemeContexto)

    return(
        <StyledMenu>
            <Logo />
            <Navegar />
            {logado ? (<Perfil setLogado={setLogado} />) : (
                <div style={{margin: "20px"}}>
                    <Link to='/criarconta'>Criar conta</Link>
                    <button id="tema2" onClick={(e) => {
                            setMode(status => !status)
                    }}> 
                        <img src={"/images/"+ (mode?'brightness.png' : 'night-mode2.png')} alt=""/>
                    </button>
                </div>
            )}
        </StyledMenu>
    )
}

const StyledLog = styled.div`
    margin: 10px;
`
function Logo(){
    return(
        <StyledLog>
            <img src="/images/logo.ico" alt="" />
        </StyledLog>
    )
}
function Navegar(){
    return(
        <StyledNav>
            <Link to='/'>Home</Link>
            <Link to='/Sobre'>Sobre</Link>
            <Link to='/Blog'>Blog</Link>
            <Link to='/Contato'>Contato</Link>

        </StyledNav>
    )
}
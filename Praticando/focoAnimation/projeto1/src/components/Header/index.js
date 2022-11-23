import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { StyledNav } from './components/StyleNav'
import Perfil from './components/Perfil'

const StyledMenu = styled.header`
    margin-top: -1px;
    display: flex;
    flex-direction: row;
    min-height: 80px;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.backgroundLevel1 || "#97ACDE"};
    border: 1px solid ${({ theme }) => theme.borderBase || "#e5e5e5"};
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
    .text {
      fill: ${({ theme }) => theme.textColorBase || "#222222"};
    }
  }
`

export default function Header(){
    return(
        <StyledMenu>
            <Logo />
            <Navegar />
            <Perfil />
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
        </StyledNav>
    )
}
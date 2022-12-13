import { StyledHeader } from "./StyledHeader";
import { Link } from "react-router-dom";

export default function Header(){

    return(
        <StyledHeader>
            <Logo />
            <Nav />
            <div></div>
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
            <Link to='/'>Home</Link>
            <Link>Sobre</Link>
            <Link>Contato</Link>
        </div>
    )
}
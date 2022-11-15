import React from "react"
import { StyledPerfil } from "./perfil"

export default function Conta(){
    //os eventos devem usar o useState ou useContext
    const [ativado, setAtivado] = React.useState(false)
    return(
        <StyledPerfil >
            <div className="profile" onClick={(e) => {
                // const btnmenu = document.querySelector(".menu")
                // btnmenu.classList.toggle('active')
                setAtivado(qualquerVariavel => !qualquerVariavel)
            }}>
                {/* "https://github.com/enzodante.png" */}
                <img src="/images/imga.jpg" alt="perfil"/>
            </div>
            <div className={ativado ? "menu active" : 'menu'}>
                <h3>Enzo Dante</h3>
                <a href="">ver perfil</a>
                <a href="">Configs</a>
                <a href="">Ajuda</a>
                <a href="">Sair</a>
            </div>
        </StyledPerfil>    
    )
}
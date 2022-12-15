import { useContext } from "react"
import { UserContext } from "../../components/useConfig/Userprovider"
import { StyledCadastro } from "./StyledCadastro"

export default function Cadastro(){
    // const {setUsu} = useContext(UserContext)
    return(
        <StyledCadastro>
            <form action="" method="post">
                <div>
                    <input type="file" name="img" id="img" />
                    <label htmlFor="img">Imagem de perfil</label>
                </div>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name="nome" id="nome" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="senha">Senha</label>
                    <input type="password" name="senha" id="senha" />
                </div>
                <div>
                    <label htmlFor="csenha">Confirmar senha</label>
                    <input type="password" name="csenha" id="csenha" />
                </div>
                <button type="submit">Criar conta</button>
            </form>
        </StyledCadastro>
    )
}
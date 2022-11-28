import styled from "styled-components"

const StyledContato = styled.main`
    min-width: 200px;
    max-width: 1200px;
    min-height: 500px;
    margin: auto;
    margin-top: 8vh;
    padding: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: ${({theme}) => theme.backgroundForm};
    color: ${({theme}) => theme.textDefault};
`

export default function Contato(){
    return(
        <StyledContato>
            <h1>Não tem nada aqui :( </h1>
            <p>Essa página vai ser usada em um outro projeto</p>
        </StyledContato>
    )
}
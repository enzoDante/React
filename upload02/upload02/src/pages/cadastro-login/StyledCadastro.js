import styled from "styled-components";

export const StyledCadastro = styled.main`
    min-width: 200px;
    max-width: 1200px;
    min-height: 500px;
    margin: auto;
    display: flex;
    justify-content: center;

    label{
        color: ${({theme}) => theme.textDefault};
    }
    form{
        background-color: ${({theme}) => theme.backgroundForm};
    }
`
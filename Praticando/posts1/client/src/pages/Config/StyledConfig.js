import styled from "styled-components";

export const StyledConfig = styled.main`
    min-width: 200px;
    max-width: 1200px;
    min-height: 500px;
    margin: auto;
    margin-top: 8vh;
    padding: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: ${({theme}) => theme.backgroundForm};

`
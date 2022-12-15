import styled from "styled-components";

export const StyledCad = styled.main`
    background-color: ${({theme}) => theme.background1};
    min-width: 200px;
    max-width: 1200px;
    min-height: 500px;
    margin: auto;
    display: flex;
    justify-content: center;

    label{
        color: ${({theme}) => theme.textDefault};
        display: block;
        margin: 10px;
    }
    input[type=file]{
        display: none;

    }

`
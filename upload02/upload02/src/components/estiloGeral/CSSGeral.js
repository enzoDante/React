import { createGlobalStyle } from "styled-components";

export const CSSGeral = createGlobalStyle`
    body{
        padding: 0;
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
        background-color: ${({theme}) => theme.backgroundBase};
    }
`
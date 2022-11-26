import { createGlobalStyle } from "styled-components";

export const CSSGeral = createGlobalStyle`
    body{
        background-color: ${({theme}) => theme.backgroundBase || '#dcf1f1'};
    }
    body::-webkit-scrollbar{
        width: 4px;
        background-color: #b4b4b4;
        border-radius: 20px;
    }
    body::-webkit-scrollbar-thumb{
        background-color: #797979;
        border-radius: 20px;
    }
`
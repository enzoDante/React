import {createGlobalStyle} from 'styled-components'

export const CSSGeral = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: Arial, Helvetica, sans-serif;
        background-color: #91AAF0;
    }

    button ,a{
        text-decoration: none;
        opacity: 1;
        transition: .3s;
        &:hover, &:focus{
            opacity: .5s;
        }
    }
`;
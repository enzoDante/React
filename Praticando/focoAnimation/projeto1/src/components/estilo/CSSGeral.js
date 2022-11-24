import {createGlobalStyle} from 'styled-components'

export const CSSGeral = createGlobalStyle`
    body{
        background-color: ${({theme}) => theme.backgroundBase || '#dcf1f1'};
    }

`
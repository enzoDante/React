import styled from 'styled-components'

export const StyledHeader = styled.header`
    min-width: 200px;
    min-height: 50px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({theme}) => theme.textDefault};
    background-color: ${({theme}) => theme.backgroundForm};

    a{
        text-decoration: none;
        margin: 10px;
        padding-bottom: 5px;
        color: ${({theme}) => theme.textDefault};
        transition: linear 200ms;
    }
    a:hover{
        color: ${({theme}) => theme.textNavHover};
        border-bottom: solid ${({theme}) => theme.textDefault};
    }
`
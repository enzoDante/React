import styled from 'styled-components'

export const StyledNav = styled.div`
    display: flex;
    flex-direction: row;
    text-decoration: none;
    font-size: 1.1em;
    color: white;
    padding: 10px;
    min-width: 300px;
    justify-content: space-between;
    /* background-color: #D56BFF; */
    a{
        color: white;
        text-decoration: none;
        font-weight: bold;
        border-bottom-style: solid;
        border-color: transparent;
        transition: linear 200ms;
        padding: 5px;
    }
    a:hover{
        color: #B3B5F5;
        background-color: white;
        border-bottom-color: #AAFADE;
    }
`
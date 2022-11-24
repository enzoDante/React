import styled from 'styled-components'

export const StyledDiv = styled.div`
    min-width: 200px;
    max-width: 1000px;
    min-height: 500px;
    margin: auto;
    margin-top: 5vh;
    border-radius: 20px;
    background-color: ${({theme}) => theme.background1 || 'white'};
    text-align: center;
    padding: 20px;

    form{
        background-color: ${({theme}) => theme.backgroundForm || '#FAF8FC'};
        width: 350px;
        margin: auto;
        font-size: 1.2em;
        border-radius: 5px;
        box-shadow: 2px 2px 3px #111112;
        padding: 20px;
        text-align: left;
        position: relative;
    }
    form div{
        margin: 20px;
        position: relative;
    }
    .lab{
        color: ${({theme}) => theme.textDefault || 'black'};
        pointer-events: none;
        transition: 500ms;
        /* transform: translateX(20px) translateY(10px); */

    }
    label a{
        color: ${({theme}) => theme.textDefault || 'black'};
    }
    input[type=text], input[type=email], input[type=password]{
        display: block;
        border: none;
        color: ${({theme}) => theme.textDefault || 'black'};
        border-bottom: 1px solid ${({theme}) => theme.textDefault || 'black'};
        background: transparent;
        outline: none;
        font-size: 1.1em;
        padding: 5px;
        margin: auto;
    }
    button{
        background-color: #C7E7FD;
        display: block;
        padding: 6px;
        font-size: 1.1em;
        margin: auto;
        border-style: solid;
        border-color: transparent;
        border-radius: 5px;
        cursor: pointer;
        transition: linear 200ms;
    }
    button:hover{
        border-color: black;
        background-color: #B3B5F5;
    }
    p{
        color: red;
        font-size: 0.9em;
    }
`
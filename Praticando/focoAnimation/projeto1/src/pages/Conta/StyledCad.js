import styled from 'styled-components'

export const StyledDiv = styled.div`
    min-width: 200px;
    max-width: 1000px;
    min-height: 500px;
    margin: auto;
    margin-top: 5vh;
    border-radius: 20px;
    background-color: white;
    text-align: center;
    padding: 20px;

    form{
        background-color: #AAFADE;
        width: 350px;
        margin: auto;
        font-size: 1.2em;
        border-radius: 5px;
        padding: 20px;
        text-align: left;

    }
    form div{
        margin: 20px;
    }
    input[type=text], input[type=email], input[type=password]{
        display: block;
        font-size: 1.1em;
        padding: 5px;
        margin: auto;
    }
    button{
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
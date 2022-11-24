import styled from "styled-components";

export const StyledBlog = styled.main`
    background-color: ${({theme}) => theme.backgroundForm || 'white'};
    color: ${({theme}) => theme.textDefault || 'black'};
    min-width: 200px;
    max-width: 1000px;
    min-height: 500px;
    margin: auto;
    margin-top: 5vh;
    border-radius: 20px;
    padding: 20px;

    #inicio{
        margin: -20px -20px 0 -20px;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        padding: 15px;
        background-color: ${({theme}) => theme.backgroundTitulo};
    }
    div{
        /* padding: 15px; */
    }
    article{
        /* margin: -10px; */
        margin: 0px -20px 0 -20px;
        padding: 20px;
        background-color: ${({theme}) => theme.background2};
        border-bottom-style: solid;
        border-width: 1px;
        border-color: ${({theme}) => theme.background1};
    }
    h3{
        background-color: ${({theme}) => theme.backgroundTitulo};
        padding: 5px;
    }
    textarea{
        resize: none;
        font-size: 1.2em;
        width: 100%;
        /* min-height: 300px; */
        border: none;
        outline: none;
        background-color: ${({theme}) => theme.backgroundForm};
        color: ${({theme}) => theme.textDefault};
    }
    textarea::-webkit-scrollbar{
        width: 4px;
        background-color: #b4b4b4;
        border-radius: 20px;
    }
    textarea::-webkit-scrollbar-thumb{
        background-color: #797979;
        border-radius: 20px;
    }
`
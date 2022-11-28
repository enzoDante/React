import styled from "styled-components";

export const StyledPerfUser = styled.main`
    min-width: 200px;
    max-width: 1200px;
    min-height: 500px;
    margin: auto;
    margin-top: 8vh;
    padding: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: ${({theme}) => theme.backgroundForm};
    color: ${({theme}) => theme.textDefault};

    #userlogs{
        margin: -15px -20px 0px -20px;
        background-color: ${({theme}) => theme.backgroundForm2};
        min-height: 60px;
        padding: 5px;
        display: flex;
        align-items: center;
        color: ${({theme}) => theme.textDefault};
    }

    .imgperfil{
        /* position: relative; */
        position: initial;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        margin-right: 10px;
        overflow: hidden;
        box-shadow: 1px 1px 2px black;
        transition: linear 200ms;
    }
    img{
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    a{
        color: ${({theme}) => theme.textDefault};
        text-decoration: none;
    }
    a:hover{
        text-decoration: underline;
    }

    article{
        display: grid;
        grid-template-columns: 350px 350px 350px;
        grid-auto-flow: dense;
        /* justify-items: center; */
        justify-content: center;
    }

    .post{
        overflow: hidden;
        max-width: 300px;
        margin-top: 1vh;
        margin-bottom: 1vh;
        padding: 5px;
        height: 350px;
        border-radius: 5px;
        box-shadow: 0px 0px 2px black;
        background-color: ${({theme}) => theme.background2};
        color: ${({theme}) => theme.textDefault};

        .header{
            overflow: hidden;
        }
        h2{
            margin-left: 10px;
        }

        .texto{
            text-align: justify;
            margin-left: 10px;
            margin-right: 10px;
            overflow: hidden;
            height: 100px;
        }
    }

    @media screen and (max-width: 1100px){
        article{
            grid-template-columns: 350px 350px;
        }
    }
    @media screen and (max-width: 800px){
        article{
            grid-template-columns: 350px;
        }
        .post{
            margin: auto;
            margin-top: 1vh;
        }
    }

`
import styled from "styled-components";

export const StyledCont = styled.main`
    min-width: 200px;
    max-width: 1200px;
    min-height: 500px;
    margin: auto;
    margin-top: 8vh;
    padding: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: ${({theme}) => theme.backgroundForm};

    form{
        max-width: 450px;
        margin: auto;
        padding: 20px;
        border-radius: 10px;
        background-color: ${({theme}) => theme.backgroundForm2};

        input[type=file]{
            display: none;
        }
        #lfoto{
            color: ${({theme}) => theme.textDefault};
            padding: 10px;
            margin: auto;
            margin-bottom: 1vh;
            cursor: pointer;
            width: 200px;
            background-color: transparent;
            border: 2px solid;
            border-radius: 5px;
            transition: linear 200ms;
            display: flex;
            align-items: center;

            img{
                margin-left: 10px;
            }
        }
        #lfoto:hover{
            border-color: #24B7F2;
        }

        span{
            font-size: 1.2em;
            font-weight: bold;
            color: ${({theme}) => theme.textDefault};
            border: 1px solid;
            padding: 5px;
            border-radius: 5px;
            cursor: pointer;
            transition: linear 200ms;
        }
        span:hover{
            border-color: red;
            color: red;
        }
        #imagemPerfil{
            max-width: 200px;
            height: 200px;
            border-radius: 50%;
            margin: auto;
            margin-bottom: 1vh;
            background-color: ${({theme}) => theme.backgroundBase};
            border: 2px solid ${({theme}) => theme.textDefault};
            overflow: hidden;
        }
        #imagemPerfil img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        @media screen and (max-width: 600px){
            #imagemPerfil{
                width: 150px;
                height: 150px;
            }
        }
        /* ======================== */
        input[type=text], input[type=password]{
            background-color: transparent;
            color: ${({theme}) => theme.textDefault};
            border: 1px solid;
            border-radius: 5px;
            outline: none;
            width: 100%;
            font-size: 1.3em;
            padding: 10px 5px;
            margin-left: -7px;
        }
        input[type=text]:focus, input[type=password]:focus{
            border-color: #24B7F2;
        }
        input[type=text].invalido, input[type=password].invalido{
            color: red;
            border-color: red;
        }
        
        p{
            color: red;
            margin-top: 1px;
        }

        button{
            padding: 10px;
            margin: auto;
            margin-top: 2vh;
            cursor: pointer;
            display: block;
            border-radius: 5px;
            border: 2px solid;
            font-size: 1.1em;
            font-weight: bold;
            background-color: transparent;
            transition: linear 200ms;
            color: ${({theme}) => theme.textDefault};
        }
        button:hover{
            border-color: #24B7F2;
            background-color: ${({theme}) => theme.backgroundNav};
            color: ${({theme}) => theme.textNavHover};
        }
        a{
            color: ${({theme}) => theme.textDefault};
            font-size: 1.2em;
            padding: 5px;
            /* border-radius: 5px; */
            border-bottom: 2px transparent;
            transition: linear 200ms;
        }
        a:hover{
            border-bottom: solid;
        }
    }

`
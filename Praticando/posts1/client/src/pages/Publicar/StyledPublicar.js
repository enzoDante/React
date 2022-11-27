import styled from "styled-components";

export const StyledPublicar = styled.main`
    min-width: 200px;
    max-width: 1200px;
    min-height: 500px;
    margin: auto;
    padding: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: ${({theme}) => theme.backgroundForm};

    form{
        position: relative;
        max-width: 500px;
        margin: auto;
        background-color: ${({theme}) => theme.backgroundForm2};
        border-radius: 10px;
        padding: 20px;

        input[type=text]{
            padding: 5px;
            background-color: transparent;
            color: ${({theme}) => theme.textDefault};
            margin-bottom: 1vh;
            margin-left: -6px;
            width: 100%;
            border-radius: 5px;
            outline: none;
            border: 1px solid;
            font-size: 2em;
        }
        input[type=text]:focus{
            border-color: #24B7F2;
        }

        input[type=file]{
            display: none;
        }
        label#img{
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
        label#img:hover{
            border-color: #24B7F2;
        }
        
        textarea{
            resize: none;
            width: 100%;
            height: 200px;
            padding: 5px;
            margin-left: -6px;
            border-radius: 5px;
            background-color: transparent;
            color: ${({theme}) => theme.textDefault};
            font-size: 1.5em;
            outline: none;

        }
        textarea:focus{
            border-color: #24B7F2;
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
        p{
            color: red;
            margin-top: -2px;
        }
        input[type=text].invalido, .invalido{
            border-color: red;
            color: red;
        }
        input[type=text].invalido:focus, .invalido:focus{
            border-color: red;
            color: red;
        }

        #imgpost{
            max-width: 600px;
            overflow: hidden;
            height: 400px;
        }       

        #imgpost img{
            width: 600px;
            height: 400px;
            object-fit: contain;
            cursor: pointer;
        }

        #imgpost img:hover{
            animation: tremer 500ms infinite;
        }

        @keyframes tremer{
            0% {transform: rotate(2deg);}
            25% {transform: rotate(-2deg);}
            50% {transform: rotate(2deg);}
            75% {transform: rotate(-2deg);}
            100% {transform: rotate(2deg);}
        }
        
    }
`
import styled from "styled-components";

export const StyledConfig = styled.main`
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
        max-width: 400px;
        background-color: ${({theme}) => theme.backgroundForm2};
        margin: auto;
        border-radius: 5px;
        padding: 20px;

        label{
            display: block;
            color: ${({theme}) => theme.textDefault};
            font-size: 1.2em;
        }
        #limg{
            width: 200px;
            margin: auto;
            border: 1px solid;
            padding: 5px;
            border-radius: 5px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: linear 200ms;
        }
        #limg img{
            margin-left: 5px;
        }
        #limg:hover{
            border-color: #24B7F2;
        }
        input[type=file]{
            display: none;
        }

        #profPic{
            margin: auto;
            margin-top: 1vh;
            max-width: 200px;
            height: 200px;
            border: 2px solid ${({theme}) => theme.textDefault};
            border-radius: 50%;
            overflow: hidden;
        }
        #profPic img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        input[type=text], input[type=password]{
            padding: 10px 10px;
            width: 100%;
            margin-left: -10px;
            font-size: 1.2em;
            background-color: transparent;
            border: 1px solid;
            border-radius: 5px;

            outline: none;
            color: ${({theme}) => theme.textDefault};
        }
        input[type=text]:focus, input[type=password]:focus{
            border-color: #24B7F2;
        }
        p{
            color: red;
            margin-top: 2px;
        }

        button{
            display: block;
            margin: auto;
            font-size: 1.2em;
            font-weight: bold;
            background-color: transparent;
            color: ${({theme}) => theme.textDefault};
            border: 2px solid ${({theme}) => theme.textDefault};
            padding: 10px;
            border-radius: 5px;
            cursor: pointer;
            transition: linear 200ms;
        }
        button:hover{
            color: ${({theme}) => theme.textNavHover};
            background-color: ${({theme}) => theme.backgroundNav};
            border-color: #24B7F2;
        }

    }

`
import styled from "styled-components";

export const StyledHome = styled.main`
    min-width: 200px;
    max-width: 1200px;
    min-height: 500px;
    margin: auto;
    margin-top: 8vh;
    padding: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: ${({theme}) => theme.backgroundForm};

    .post{
        max-width: 600px;
        margin: auto;
        margin-bottom: 1vh;
        border-radius: 5px;
        box-shadow: 0px 0px 2px black;
        background-color: ${({theme}) => theme.background2};
        color: ${({theme}) => theme.textDefault};

        .userP{
            max-width: 600px;
            height: 60px;
            padding: 5px;
            display: flex;
            align-items: center;
            border-radius: 50%;
            color: ${({theme}) => theme.textDefault};

            .imgperfil{
                /* position: relative; */
                position: initial;
                border-radius: 50%;
                width: 60px;
                height: 60px;
                margin-right: 10px;
                overflow: hidden;
                cursor: pointer;
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
            .imgperfil:hover{
                transform: translate(-5px);
                box-shadow: 2px 2px 5px black;
            }

            a{
                color: ${({theme}) => theme.textDefault};
                text-decoration: none;
            }
            a:hover{
                text-decoration: underline;
            }
        }

        .img{
            max-width: 600px;
            height: 500px;
            overflow: hidden;
            background-color: ${({theme}) => theme.backgroundBase};
        }
        img{
            max-width: 600px;
            height: 500px;
            object-fit: contain;
        }
        .content{
            padding: 20px;
            text-align: justify;
        }
    }

`
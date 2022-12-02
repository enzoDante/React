import styled from "styled-components";

export const StyledPerfil = styled.div`
    margin-right: 30px;
    display: flex;
    background-color: transparent;
    cursor: pointer;
    color: inherit;
    position: relative;
    flex-direction: column;

    a, p{
        display: block;
        color: black;
        font-weight: bold;
    }
    a:hover, p:hover{
        text-decoration: underline;
    }
    .profile{
        position: relative;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        overflow: hidden;
        cursor: pointer;
    }
    .profile img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .menu{
        text-align: center;
        position: absolute;
        cursor: default;
        top: 120px;
        right: -5px;
        padding: 10px 20px;
        background: ${({theme}) => theme.background1 || '#fff'};
        width: 130px;
        box-sizing: 0 5px 25px rgba(0,0,0,0.1);
        border-radius: 15px;
        transition: 0.5s;
        visibility: hidden;
        opacity: 0;
    }
    .menu.active{
        top: 80px;
        visibility: visible;
        opacity: 1;
    }
    .menu::before{
        content: '';
        position: absolute;
        top: -5px;
        right: 28px;
        width: 20px;
        height: 20px;
        background-color: ${({theme}) => theme.background1 || 'white'};
        transform: rotate(45deg);
    }
    h3{
        margin: 5px;
        overflow: hidden;
        color: ${({theme}) => theme.textDefault || 'black'};
    }

    ul li{
        list-style: none;
        padding: 10px 0;
        border-top: solid rgba(0, 0, 0, 0.05);
        display: flex;
        align-items: center;
    }
    ul li img{
        max-width: 25px;
        margin-right: 10px;
        margin-left: -25px;
        opacity: 0.5;
        background-color: white;
        border-radius: 10px;
        padding: 2px;
        transition: 500ms;
    }
    li:hover img{
        opacity: 1;
    }

    li a, li p{
        display: inline-block;
        text-decoration: none;
        color: ${({theme}) => theme.textDefault || '#555'};
        font-weight: 500;
        transition: 500ms;
    }
    label{
        color: ${({theme}) => theme.textDefault || '#555'};
        font-weight: 500;
        margin-left: 10px;
        transition: 500ms;
        display: flex;
        margin-top: -25px;
        cursor: pointer;
    }
    li:hover a, li:hover p{
        color: ${({theme}) => theme.textNavHover2 || '#75BDDF'};
    }
    label:hover{
        color: ${({theme}) => theme.textNavHover2 || '#75BDDF'};
    }
    button{
        font-size: 1em;
        margin-left: -10px;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        background-color: transparent;
        border-color: transparent;
        cursor: pointer;
    }
    button img{
        opacity: 1;
    }
`
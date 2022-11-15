import styled from "styled-components";

export const StyledPerfil = styled.div`
display: flex;
background-color: transparent;
cursor: pointer;
color: inherit;
position: relative;
flex-direction: column;

a{
    display: block;
    color: black;
    font-weight: bold;
}
a:hover{
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
    right: -10px;
    padding: 10px 20px;
    background: #fff;
    width: 180px;
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
    background-color: #fff;
    transform: rotate(45deg);
}
h3{
    margin: 5px;
}

`
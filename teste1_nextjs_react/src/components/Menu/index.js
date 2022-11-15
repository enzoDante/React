import React from "react";
import styled from "styled-components";
import Conta from "./components/Conta";

const StyledMenu = styled.header`
    display: flex;
    flex-direction: row;
    min-height: 80px;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.backgroundLevel1 || "#FFFFFF"};
    border: 1px solid ${({ theme }) => theme.borderBase || "#e5e5e5"};
    align-items: center;
    padding: 0 16px;
    gap: 16px;
    position: fixed;
    width: 100%;
    .logo {
    width: 100%;
    max-width: 80px;
    @media (min-width: 600px) {
      max-width: 127px;
    }
    .text {
      fill: ${({ theme }) => theme.textColorBase || "#222222"};
    }
  }
`

export default function Menu(){

    return(
        <StyledMenu>
            <div>
                <Logo />
            </div>
            <Links />
            <Conta />

        </StyledMenu>
    )
}

function Logo(){
    return(
        <h2 className="logo">
            EnD
        </h2>
    )
}

const Styledlinks = styled.div`
    display: flex;
    /* margin: auto; */
    flex-direction: row;
    border-radius: 5px;
    min-width: 300px;
    justify-content: space-between;
    background-color: #D56BFF;
    padding: 7px;
    color: white;

`;

function Links(){
    return (
        <Styledlinks>
            <a href="">teste0</a>
            <a href="">teste1</a>
            <a href="">teste2</a>
            <a href="">teste3</a>
        </Styledlinks>
    )
}



import styled from "styled-components";

//dentro dessa main, usar cor de funco background2!!!
export const StyledHome = styled.main`
    background-color: ${({theme}) => theme.backgroundForm || 'white'};
    color: ${({theme}) => theme.textDefault || 'black'};
    min-width: 200px;
    max-width: 1000px;
    min-height: 500px;
    margin: auto;
    margin-top: 5vh;
    border-radius: 20px;

`
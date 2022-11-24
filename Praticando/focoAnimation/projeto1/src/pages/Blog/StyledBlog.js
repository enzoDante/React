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
        margin: 10px;
        margin-top: -5px;
        
    }
`
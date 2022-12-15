import styled from "styled-components";

export const StyledCadastr = styled.div`
    min-width: 200px;
    max-width: 1200px;
    min-height: 500px;
    margin: auto;
    display: flex;
    justify-content: center;

    label{
        color: ${({theme}) => theme.textDefault};
    }

`
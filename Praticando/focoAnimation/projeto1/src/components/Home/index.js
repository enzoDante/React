import styled from 'styled-components'

const StyledDiv = styled.main`
    background-color: blue;
    color: white;
    min-width: 200px;
    max-width: 1000px;
    min-height: 500px;
    margin: auto;
    margin-top: 5vh;
    border-radius: 20px;
`

export default function Home(){
    return(
        <StyledDiv>
            <h1>centro</h1>

        </StyledDiv>
    )
}
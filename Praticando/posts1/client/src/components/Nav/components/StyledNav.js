import styled from 'styled-components'

export const StyledNav = styled.div`
    display: flex;
    flex-direction: row;
    text-decoration: none;
    font-size: 1.1em;
    color: ${({theme}) => theme.textDefault || 'black'};
    padding: 10px;
    min-width: 300px;
    justify-content: space-between;
    /* background-color: #D56BFF; */
    #links{
        display: flex;
        min-width: 300px;
        justify-content: space-between;
    }
    a{
        color: ${({theme}) => theme.textDefault || 'black'};
        text-decoration: none;
        font-weight: bold;
        border-bottom-style: solid;
        border-color: transparent;
        border-radius: 5px;
        transition: linear 200ms;
        padding: 10px;
    }
    a:hover{
        color: ${({theme}) => theme.textNavHover || '#B3B5F5'};
        background-color: ${({theme}) => theme.backgroundNav || 'white'};
        border-bottom-color: #AAFADE;
    }

    #menu{
        transform: rotate(90deg);
        font-size: 1.5em;
        cursor: pointer;
        display: none;
    }
    .navAtiv{
            display: block;
    }
    @media screen and (max-width: 600px){
        #menu{
            display: flex;
            
        }
        #links{
            display: none;
        }
        .navAtiv{
            display: flex;
            flex-direction: column;
            min-width: 100px;
            margin-right: 100px;
            justify-content: space-between;
            text-align: center;
            a{
                display: block;
            }
        }
    }
`
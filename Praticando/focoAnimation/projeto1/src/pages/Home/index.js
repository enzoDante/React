import { StyledHome } from './StyledHome'
import {useEffect} from 'react'

import testejs from './testejs.json'

export default function Home(){    

    //chaves de objetos: categoria1 e categoria2
    const testenames = Object.keys(testejs)
    useEffect(() => {
        console.log(testenames)
    })

    return(
        <StyledHome>
            <h1>Projetos</h1>
            {
                testenames.map((element, index) => {

                    //todos os valores dentro de categoria1 exemp  testejs['categoria2']
                    const elNames = testejs[element]

                    return(
                        <div key={index}>
                            <h1>Categoria: {element}</h1>
                            {elNames.map((projet) => {

                                return(
                                    <div key={projet.id}>
                                        <h3>Nome: {projet.projeto}</h3>
                                        <p>{projet.sobre}</p>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })
            }
        </StyledHome>
    )
}
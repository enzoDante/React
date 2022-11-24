import { useEffect } from "react"
import { StyledBlog } from "./StyledBlog"
// import testejs from './testejs.json'
import posts from './posts.json'


export default function Blog(){
    //chaves de objetos: categoria1 e categoria2
    const testenames = Object.keys(posts)
    useEffect(() => {
        // console.log(testenames)
    })

    return(
        <StyledBlog>
            <h1 id="inicio">Blog</h1>
            {
                testenames.map((element, index) => {

                    //todos os valores dentro de categoria1 exemp  testejs['categoria2']
                    const elNames = posts[element]

                    return(
                        <div key={index}>
                            {elNames.map((post) => {

                                return(
                                    <article key={post.id}>
                                        <h3>{post.titulo}</h3>
                                        <textarea disabled value={post.sobre} name="" id="" cols="30" rows="10"></textarea>
                                    </article>
                                )
                            })}
                        </div>
                    )
                })
            }
        </StyledBlog>        
    )
}
/**
 * <div key={index}>
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
 */
export default function Lista({itens}){
    return(
        <>
            <h3>coisas</h3>
            {
                itens.length > 0 ? 
                    (
                        itens.map((item, index) => (
                            <p key={index}>um {item}</p>
                        ))
                    )
                :
                    (<p>Não tem valores</p>)
            }
        </>
    )
}
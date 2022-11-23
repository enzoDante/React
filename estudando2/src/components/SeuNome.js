export default function SeuNome({ nome, setNome }){
    

    return(
        <>
            <p>Digite nome:</p>
            <input type="text" name="nome" onChange={(e) => setNome(e.target.value)} id="nome" placeholder="Seu Nome?:"  autoComplete="off"/>
            <button onClick={() => {
                setNome('')
                document.getElementById("nome").value = ''
            }}>Limpar</button>
        </>
    )
}
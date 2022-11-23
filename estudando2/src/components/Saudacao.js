export default function Saudacao({ nome }){
    function gerarSaudacao(algumnome){
        return `Olá, ${algumnome}, de boas?`
    }

    return(
        <>
            {nome &&<p> {gerarSaudacao(nome)}</p>}
        </>
    )
}
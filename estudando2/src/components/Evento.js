export default function Evento({numero}){
    function meuevento2(){
        console.log("apertou"+numero)
        alert("teste"+numero)
    }
    return(
        <div>
            <p>Clique abaixo</p>
            <button onClick={meuevento2}>Butão</button>
            <br/>
            <button onClick={() => {
                console.log("outro apertou"+ numero)
                alert("teste diferente"+ numero)
            }}>outro</button>
        </div>
    )
}
// function meuevento(num){
//     console.log("apertou"+num)
//     alert("teste"+num)
// }
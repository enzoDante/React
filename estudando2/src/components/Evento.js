import Button from "./Button"

export default function Evento({numero}){
    function meuevento2(){
        console.log("apertou"+numero)
        alert("teste"+numero)
    }
    return(
        <div>
            <p>Clique abaixo</p>
            <Button event={meuevento2} text="primeiro evento" />
            <Button event={meuevento} text="segundo butão" />

            <button onClick={meuevento2}>Butão</button>
            <br/>
            <button onClick={() => {
                console.log("outro apertou"+ numero)
                alert("teste diferente"+ numero)
            }}>outro</button>
        </div>
    )
}
function meuevento(){
    console.log("apertou")
    alert("outro botão apertadooo")
}
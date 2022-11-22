import Item from "./Item";

export default function Lista(){
    return(
        <>
            <h1>Lista aq</h1>
            <Item marca="t 1" lancamento={2} />
            <Item lancamento={3} />
            <Item marca="t 3" />
            <Item marca="t 4" lancamento={7} />

        </>
    )
}
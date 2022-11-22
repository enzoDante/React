import PropTypes from 'prop-types'
export default function Item({marca, lancamento}){
    return(
        <>
            <p>{marca} - {lancamento} </p>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    lancamento: PropTypes.number
}

Item.defaultProps = {
    marca: 'Faltou coiso',
    lancamento: 0
}
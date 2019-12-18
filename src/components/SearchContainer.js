import { connect } from 'react-redux'
import { catchPokemon } from '../redux/actions'
import Search from './Search'

const mapDispatchToProps = (dispatch) => ({
    catch: (pokemon) => {
        dispatch(catchPokemon(pokemon))
    }
})

export default connect(
    null,
    mapDispatchToProps
)(Search)

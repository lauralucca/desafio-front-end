import { connect } from 'react-redux'
import Pokedex from './Pokedex'

const mapStateToProps = state => ({
    options: state
})

export default connect(
    mapStateToProps,
    null
)(Pokedex)

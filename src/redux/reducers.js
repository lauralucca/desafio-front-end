const pokemonStorage = (state = [], action) => {
    switch (action.type) {
        case 'CATCH_POKEMON': {
            return [
                ...state,
                action.pokemon
            ]
        }
        default:
            return state;
    }
}

export default pokemonStorage
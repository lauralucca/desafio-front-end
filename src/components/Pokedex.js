import React, { Component } from 'react'
import { getPokemon } from '../api'

export default class Pokedex extends Component {
    state = {
        pokemon: {}
    }

    setPokemon = pokemon => getPokemon(pokemon).then((res) => this.setState({ pokemon: res }))

    render() {
        return (
            <section>
                <select onClick={ e => this.setPokemon(e.target.value) }>
                    {
                        this.props.options.map(
                            (pokemon, i) => (
                                <option
                                    key={i}
                                    value={ pokemon.description.name }>
                                        { pokemon.description.name }
                                    </option>
                            )
                        )
                    }
                </select>
            </section>
        )
    }
}

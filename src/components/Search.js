import React, { Component } from 'react'
import styled from 'styled-components'
import { getPokemon } from '../api'
import PokedexEntry from './PokedexEntry'

const Container = styled.section`
    width: 100%;
    margin: 0 auto;
    #search {
        width: 100%;
        display: flex;
        justify-content: space-between;
        input {
            flex: 2 1 100%;

        }
    }
    #description {
        display: flex;
        align-items: flex-end;
        margin: 2em 0;
        border: 4px groove;
        border-radius: 0 0 2.75em 0;

        #catch {
            margin: 0 0.5em 0.5em auto;
            border: 0;
            background-color: unset;
            figure {
                margin: 0.5em;
                background-color: lightgrey;
                padding: 0.5em;
                border-radius: 50%;
                img {
                    width: 3em;
                    vertical-align: middle;
                }
            }
        }
    }
    
`

class Search extends Component {
    state = {
        keyword: "",
        pokemon: {}
    }

    setKeyword = e => this.setState({ [e.target.name]: e.target.value })
    searchPokemon = () => getPokemon(this.state.keyword).then((res) => this.setState({ pokemon: res }))

    render() {
        const { keyword, pokemon } = this.state;
        return (
            <Container>
                <h2>Find wild pokémon</h2>
                <form onSubmit={ e => e.preventDefault() } id="search">
                    <input
                        autoFocus
                        name="keyword"
                        placeholder="enter pokémon name or number"
                        value={ keyword }
                        onChange={ this.setKeyword }
                    />
                    <button disabled={ !keyword } onClick={ this.searchPokemon }>Search</button>
                </form>
                { pokemon.description &&
                    <article id="description">
                        <PokedexEntry />
                        <button
                            id="catch"
                            disabled={ !pokemon.description }
                            onClick={ () => this.props.catch(pokemon) }>
                                Catch!
                                <figure>
                                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="" />
                                </figure>
                        </button>
                    </article>
                }
            </Container>
        )
    }
}

export default Search

import axios from 'axios'

const REQUEST_URL = "https://pokeapi.co/api/v2/pokemon/"

const handleTypes = (array) => {
    return array.map((item) => item.type.name).join(', ')
}

const handleURL = (sprites) => {
    return sprites ? sprites.front_default : ""
}

export const getPokemon = async (keyword) => {
    return await axios.get(REQUEST_URL + keyword)
        .then(response => response.data ? (
            {
                url: handleURL(response.data.sprites),
                description: {
                    name: response.data.name,
                    types: handleTypes(response.data.types),
                    height: response.data.height,
                    weight: response.data.weight
                }
            }
        ) : {}
    ).catch(err => {
        console.log(err)
    })
}
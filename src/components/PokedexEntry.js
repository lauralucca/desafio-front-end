import React from 'react'

const PokedexEntry = ({ description, url }) => {
    return (
        <article>
            <figure>
                <h2>name</h2>
                <img
                    alt={description}
                    src={url} />
            </figure>
            <dl>
                <dt>Weight:</dt>
                <dd> lbs.</dd>

                <dt>Height:</dt>
                <dd>'</dd>

                <dt>Types:</dt>
                <dd></dd>

                <dt>Abilities:</dt>
                <dd></dd>

                <dt>Stats:</dt>
                <dd>speed, def, atk, HP</dd>

                <dt>Evolution chain:</dt>
                <dd></dd>
            </dl>
        </article>
    )
}

export default PokedexEntry
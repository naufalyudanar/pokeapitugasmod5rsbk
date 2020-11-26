import React from 'react'
import './Card.css'

export default function PokemonList({ pokemon }) {

  return (
    <div class="column">
      <div class="row">
        {pokemon.map(p => ( 
          <li class="card"> <img class="card-image" src={p.image} /> <h2>{p.name}</h2></li>
        ))
        }
      </div>
    </div>
  )
}



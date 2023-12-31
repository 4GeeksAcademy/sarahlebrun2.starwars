import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

export default function CharacterDescription() {
  const [character, setCharacter] = useState([])
  const { id } = useParams()
  useEffect(() => {
    fetch("https://swapi.tech/api/people/" + id)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data.result)
      })
  })
  return (
    <div className='container'>
      <div className='info'>
        <div className='info-top'>
          <img/>
          <div>
            <h2>{character.name}</h2>
            <p>{character.description}</p>
          </div>
        </div>
        <div className='info-bot'>
          <p>
            Haircolor{character.hair_color}
          </p>
          
        </div>
      </div>
    </div>
  )}

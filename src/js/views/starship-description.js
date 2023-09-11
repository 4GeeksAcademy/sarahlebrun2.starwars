import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

export default function StarshipsDescription() {
  const [starship, setStarship] = useState([])
  const { id } = useParams()
  useEffect(() => {
    fetch("https://swapi.tech/api/starships/" + id)
      .then((response) => response.json())
      .then((data) => {
        setStarship(data.result.properties)
      })
  })
  return (
    <div className='container'>
      <div className='info'>
        <div className='info-top'>
          <img/>
          <div>
            <h2>{starship.name}</h2>
            <p>{starship.manufacturer}</p>
          </div>
        </div>
        <div className='info-bot'>
        
          
        </div>
      </div>
    </div>
  )}

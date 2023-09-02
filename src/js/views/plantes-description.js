import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

export default function PlantesDescription() {
    const [plantes, setPlantes] = useState([])
    const { id } = useParams()
    useEffect(()=>{
        fetch("https://www.swapi.tech/api/planets/"+id)
        .then ((response)=> response.json())
        .then ((data)=>{
            setPlantes(data.result.properties)
        })

    })
    return (
        <div>
          <h1>{
            plantes.name
            }</h1>
            <h3>population:{plantes.population}</h3>
        </div>
      )
    }
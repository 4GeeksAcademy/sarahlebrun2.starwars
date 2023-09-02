import React, { useEffect, useState } from 'react'
import Card from './card'

export default function Starship() {
    const[starships,setStarship]= useState([])
    useEffect(()=>{
      fetch("https://swapi.tech/api/starships")
              .then((response)=> response.json())
              .then((data)=> {
                  setStarship(data.results)
              })
          })
  return (
    <div className='d-flex overflow-auto w-75 mx-auto'>
      {starships.map((starship,index)=>(
        <div key={index}>
        <Card title={starship.name} type={"starship"}id={starship.uid}/>
        </div>
      ))}
    </div>
  )
}

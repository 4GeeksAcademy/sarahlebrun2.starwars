import React, { useEffect, useState } from 'react'
import Card from './card'

export default function Character() {
    const[character,setCharacter]= useState([])
    useEffect(()=>{
      fetch("https://swapi.tech/api/people")
              .then((response)=> response.json())
              .then((data)=> {
                  setCharacter(data.results)
              })
          })
  return (
    <div className='d-flex overflow-auto w-75 mx-auto'>
      {character.map((person,index)=>(
        <div>
        <Card title={person.name} type={"character"}id={person.uid}/>
        </div>
      ))}
    </div>
  )
}

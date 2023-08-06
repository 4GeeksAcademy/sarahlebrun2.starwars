import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router'

export default function CharacterDescription() {
    const[character,setCharacter]= useState([])
    const{id}=useParams()
    useEffect(()=>{
      fetch("https://swapi.tech/api/people/"+id)
              .then((response)=> response.json())
              .then((data)=> {
                  setCharacter(data.result.properties)
              })
          })
  return (
    <div>
      <h1>{
        character.name
        }</h1>
        <h3>eyecolor:{character.eye_color}</h3>
    </div>
  )
}

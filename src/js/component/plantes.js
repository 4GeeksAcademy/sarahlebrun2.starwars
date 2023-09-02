import React, { useEffect, useState } from 'react'
import Card from './card'

export default function Plantes() {
    const[plantes,setPlantes]= useState([])
    useEffect(()=>{
      fetch("https://swapi.tech/api/planets")
              .then((response)=> response.json())
              .then((data)=> {
                  setPlantes(data.results)
              })
          })
  return (
    <div className='d-flex overflow-auto w-75 mx-auto'>
      {plantes.map((plantes,index)=>(
        <div>
        <Card title={plantes.name} type={"plantes"}id={plantes.uid}/>
        </div>
      ))}
    </div>
  )
}



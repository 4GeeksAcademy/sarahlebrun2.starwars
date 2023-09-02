import React,{useContext,useEffect, useState} from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { Context } from "../store/appContext";
export default function Card(props) {
    const { store, actions } = useContext(Context);
    const [person,setPerson]= useState(null)
    useEffect(()=>{
        fetch("https://swapi.tech/api/people/"+props.id)
                .then((response)=> response.json())
                .then((data)=> {
                    console.log(data)
                    setPerson(data.result)
                })
            },[])
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{
                        props.title
                    }</h5>
                    <p className="card-text">Haircolor {person ? person.properties.hair_color : ""}</p>
                    <p className='card-text'>Eyecolor {person ? person.properties.eye_color : ""}</p>

                   <Link to={`/description/`+props.type+`/`+props.id}className='btn btn-light'>learn more</Link>
                   <button type="button" onClick={()=> actions.addFavorites(props.title)} className="btn btn-primary"><i className="fa fa-regular fa-heart"></i></button>
                   
                </div>
            </div>

        </div>
        
    )
}

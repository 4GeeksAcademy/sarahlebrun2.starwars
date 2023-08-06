import React,{useContext} from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { Context } from "../store/appContext";
export default function Card(props) {
    const { store, actions } = useContext(Context);
    
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{
                        props.title
                    }</h5>
                   <Link to={`/description/`+props.type+`/`+props.id}className='btn btn-light'>learn more</Link>
                   <button type="button" onClick={()=> actions.addFavorites(props.title)} class="btn btn-primary">Add to favorties</button>
                   
                </div>
            </div>

        </div>
    )
}

import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	console.log(store.favorites)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
			<div className="btn-group" role="group">
                    <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                        {store.favorites.length ? (
                            store.favorites.map((item, index) => {
                                console.log(item, "HEERRE"); // This console.log should work fine
                                return <li key={index}>{item}</li>; // Adding a 'key' prop to each list item
                            })
                        ) : (
                            <li>No Favorites</li>
                        )}
                    </ul>
                </div>
			</div>
		</nav>
	);
};

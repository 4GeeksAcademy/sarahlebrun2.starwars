import React from "react";
import Character from "../component/character";
import "../../styles/home.css";
import Plantes from "../component/plantes";
import Starship from "../component/starship";

export const Home = () => (
	<div className="text-center mt-5">
		<Character/>
		<Plantes/>
		<Starship/>
	</div>
);

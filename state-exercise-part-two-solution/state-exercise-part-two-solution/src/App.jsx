import { useState } from "react";
import "./App.css";
import { DrinkChoice } from "./components/DrinkChoice";
import { DrinkSearch } from "./components/DrinkSearch";
import { availableDrinks } from "./utils/data";

export const App = () => {
	const [userDrink, setUserDrink] = useState();

	const greeting = "Welcome to Olivers cafe!";
	const handleDrinkSearch = (searchTerm) => {
		const matchedDrinks = availableDrinks.filter((drink) =>
			drink.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setUserDrink(matchedDrinks);
	};

	return (
		<div className="app">
			{userDrink ? (
				<DrinkChoice drink={userDrink} />
			) : (
				<>
					<h1>{greeting}</h1>
					<DrinkSearch onSearch={handleDrinkSearch} />
				</>
			)}
		</div>
	);
};

import { useState } from "react";
import { TextInput } from "./ui/TextInput";
import { DrinkItems } from "./DrinkItems";
import { availableDrinks } from "../utils/data";

export const DrinkSearch = () => {
	return (
		<>
			<label>Search for drinks:</label>
			<TextInput />
			<DrinkItems drinks={availableDrinks} />
		</>
	);
};

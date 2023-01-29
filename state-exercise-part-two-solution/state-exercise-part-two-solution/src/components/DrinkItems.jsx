import React from "react";
import "./DrinkItems.css";

export const DrinkItems = ({ drinks }) => {
	return (
		<div className="drink-items">
			{drinks.map((drink) => (
				<DrinkItem key={drink.id} drink={drink} />
			))}
		</div>
	);
};

export const DrinkItem = ({ drink }) => {
	return (
		<div className="drink-item-container">
			<img src={drink.imgUrl} alt={drink.alt} className="drink-img" />
			<div className="drink-name">{drink.name}</div>
		</div>
	);
};

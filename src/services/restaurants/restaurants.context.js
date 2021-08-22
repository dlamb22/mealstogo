import React, { useState, createContext, useEffect, useMemo } from 'react';

import {
	restaurantsRequest,
	restaurantsTransform,
} from './restaurants.service';

export const RestaurantContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
	const [restaurants, setRestaurants] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const retrieveRestaurants = () => {
		setIsLoading(true);
		setTimeout(() => {
			restaurantsRequest()
				.then(restaurantsTransform)
				.then((res) => {
					setIsLoading(false);
					setRestaurants(res);
				})
				.catch((err) => {
					setIsLoading(false);
					setError(err);
				});
		}, 2000);
	};

	useEffect(() => {
		retrieveRestaurants();
	}, []);

	return (
		<RestaurantContext.Provider
			value={{ restaurants: restaurants, isLoading: isLoading, error: error }}
		>
			{children}
		</RestaurantContext.Provider>
	);
};

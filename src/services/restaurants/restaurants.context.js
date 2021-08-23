import React, { useState, createContext, useEffect, useContext } from 'react';
import { LocationContext } from '../location/location.context';

import {
	restaurantsRequest,
	restaurantsTransform,
} from './restaurants.service';

export const RestaurantContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
	const { location } = useContext(LocationContext);
	const [restaurants, setRestaurants] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const retrieveRestaurants = (loc) => {
		setIsLoading(true);
		setRestaurants([]);
		setTimeout(() => {
			restaurantsRequest(loc)
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
		if (location) {
			const locationString = `${location.lat},${location.lng}`;
			retrieveRestaurants(locationString);
		}
	}, [location]);

	return (
		<RestaurantContext.Provider
			value={{ restaurants: restaurants, isLoading: isLoading, error: error }}
		>
			{children}
		</RestaurantContext.Provider>
	);
};

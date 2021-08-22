import React, { useState, createContext, useEffect, useMemo } from 'react';

import { restaurantsRequest, restaurantTransform } from './restaurants.service';

export const RestaurantContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
	const [restaurants, setRestaurants] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = usestate(null);
	return (
		<RestaurantContext.Provider value={{ restaurants: [1, 2, 3, 4] }}>
			{children}
		</RestaurantContext.Provider>
	);
};

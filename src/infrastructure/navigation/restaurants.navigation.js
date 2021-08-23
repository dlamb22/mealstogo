import React from 'react';
import {
	createStackNavigator,
	TransitionPresets,
} from '@react-navigation/stack';
import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants.screen';
import { RestaurantDetailScreen } from '../../features/restaurants/screens/restaurant-detail.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigation = () => {
	return (
		<RestaurantStack.Navigator
			screenOptions={{
				...TransitionPresets.ModalPresentationIOS,
				headerShown: false,
			}}
		>
			<RestaurantStack.Screen
				name='Restaurants Screen'
				component={RestaurantsScreen}
			/>
			<RestaurantStack.Screen
				name='Restaurant Detail'
				component={RestaurantDetailScreen}
			/>
		</RestaurantStack.Navigator>
	);
};

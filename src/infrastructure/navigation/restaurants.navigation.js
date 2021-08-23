import React from 'react';
import {
	createStackNavigator,
	TransitionPresets,
} from '@react-navigation/stack';
import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants.screen';
import { Text } from 'react-native';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigation = () => {
	return (
		<RestaurantStack.Navigator
			headerMode='none'
			screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
		>
			<RestaurantStack.Screen
				name='Restaurants'
				component={RestaurantsScreen}
			/>
			<RestaurantStack.Screen
				name='Restaurant Detail'
				component={() => <Text>Restaurant Detail</Text>}
			/>
		</RestaurantStack.Navigator>
	);
};

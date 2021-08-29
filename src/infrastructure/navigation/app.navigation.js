import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { RestaurantsContextProvider } from '../../services/restaurants/restaurants.context';
import { LocationContextProvider } from '../../services/location/location.context';
import { FavoritesContextProvider } from '../../services/favorites/favorites.context';

import { MapScreen } from '../../features/map/screens/map.screen';
import { RestaurantsNavigation } from './restaurants.navigation';
import { SettingsNavigation } from './settings.navigation';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
	Restaurants: 'md-restaurant',
	Map: 'md-map',
	Settings: 'md-settings',
};

const createScreenOptions = ({ route }) => {
	const iconName = TAB_ICON[route.name];
	return {
		tabBarIcon: ({ size, color }) => (
			<Ionicons name={iconName} size={size} color={color} />
		),
		tabBarActiveTintColor: 'tomato',
		tabBarInactiveTintColor: 'gray',
		headerShown: false,
	};
};

export const AppNavigation = () => (
	<FavoritesContextProvider>
		<LocationContextProvider>
			<RestaurantsContextProvider>
				<Tab.Navigator screenOptions={createScreenOptions}>
					<Tab.Screen name='Restaurants' component={RestaurantsNavigation} />
					<Tab.Screen name='Map' component={MapScreen} />
					<Tab.Screen name='Settings' component={SettingsNavigation} />
				</Tab.Navigator>
			</RestaurantsContextProvider>
		</LocationContextProvider>
	</FavoritesContextProvider>
);

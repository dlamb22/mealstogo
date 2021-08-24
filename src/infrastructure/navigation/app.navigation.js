import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';

import { SafeArea } from '../../components/utility/safe-area-component';
import { RestaurantsNavigation } from './restaurants.navigation';
import { MapScreen } from '../../features/map/screens/map.screen';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
	Restaurants: 'md-restaurant',
	Map: 'md-map',
	Settings: 'md-settings',
};

const Settings = () => (
	<SafeArea>
		<Text>Settings</Text>
	</SafeArea>
);

const createScreenOptions = ({ route }) => {
	const iconName = TAB_ICON[route.name];
	return {
		tabBarIcon: ({ size, color }) => (
			<Ionicons name={iconName} size={size} color={color} />
		),
		tabBarActiveTintColor: 'tomato',
		tabBarInactiveTintColor: 'gray',
	};
};

export const AppNavigation = () => (
	<NavigationContainer>
		<Tab.Navigator screenOptions={createScreenOptions}>
			<Tab.Screen
				options={{ headerShown: false }}
				name='Restaurants'
				component={RestaurantsNavigation}
			/>
			<Tab.Screen
				options={{ headerShown: false }}
				name='Map'
				component={MapScreen}
			/>
			<Tab.Screen name='Settings' component={Settings} />
		</Tab.Navigator>
	</NavigationContainer>
);

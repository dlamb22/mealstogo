import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeArea } from '../../components/utility/safe-area-component';
import { RestaurantsNavigation } from './restaurants.navigation';
import { MapScreen } from '../../features/map/screens/map.screen';

import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native-paper';
import { AuthButton } from '../../features/account/components/account.styles';

import { AuthenticationContext } from '../../services/authentication/authentication.context';
import { RestaurantsContextProvider } from '../../services/restaurants/restaurants.context';
import { LocationContextProvider } from '../../services/location/location.context';
import { FavoritesContextProvider } from '../../services/favorites/favorites.context';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
	Restaurants: 'md-restaurant',
	Map: 'md-map',
	Settings: 'md-settings',
};

const SettingsContainer = styled(SafeArea)`
	flex: 1;
	align-items: center;
`;

const LogoutButtonContainer = styled.View`
	width: 200px;
`;

const Settings = () => {
	const { onLogout } = useContext(AuthenticationContext);
	return (
		<SettingsContainer>
			<Text>Settings</Text>
			<LogoutButtonContainer>
				<AuthButton mode='contained' onPress={() => onLogout()}>
					Logout
				</AuthButton>
			</LogoutButtonContainer>
		</SettingsContainer>
	);
};

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
	<FavoritesContextProvider>
		<LocationContextProvider>
			<RestaurantsContextProvider>
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
			</RestaurantsContextProvider>
		</LocationContextProvider>
	</FavoritesContextProvider>
);

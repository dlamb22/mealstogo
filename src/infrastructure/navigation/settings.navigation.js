import React from 'react';

import {
	createStackNavigator,
	CardStyleInterpolators,
} from '@react-navigation/stack';

import { SettingsScreen } from '../../features/settings/screens/settings.screen';
import { FavoritesScreen } from '../../features/settings/screens/favorites.screen';
import { CameraScreen } from '../../features/settings/screens/camera.screen';

const SettingsStack = createStackNavigator();

export const SettingsNavigation = ({ route, navigation }) => {
	return (
		<SettingsStack.Navigator
			screenOptions={{
				cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
			}}
		>
			<SettingsStack.Screen
				options={{ headerShown: false }}
				name='Settings'
				component={SettingsScreen}
			/>
			<SettingsStack.Screen name='Favorites' component={FavoritesScreen} />
			<SettingsStack.Screen name='Camera' component={CameraScreen} />
		</SettingsStack.Navigator>
	);
};

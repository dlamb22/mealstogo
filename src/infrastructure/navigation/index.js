import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigation } from './app.navigation';

import { AccountNavigation } from './account.navigation';

import { AuthenticationContext } from '../../services/authentication/authentication.context';

export const Navigation = () => {
	const { isAuthenticated } = useContext(AuthenticationContext);

	return (
		<NavigationContainer>
			{isAuthenticated ? <AppNavigation /> : <AccountNavigation />}
		</NavigationContainer>
	);
};

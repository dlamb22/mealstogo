import React from 'react';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { ThemeProvider } from 'styled-components';
import firebase from 'firebase';
import 'firebase/auth';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';

// Initialize Firebase
const firebaseConfig = {
	apiKey: 'AIzaSyAr7S701-ZZS50JJpjlBYtaxnXK6fQI62g',
	authDomain: 'meals-to-go-32dea.firebaseapp.com',
	projectId: 'meals-to-go-32dea',
	storageBucket: 'meals-to-go-32dea.appspot.com',
	messagingSenderId: '648552207844',
	appId: '1:648552207844:web:ae58f2270b0e61baa723f1',
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

import { Navigation } from './src/infrastructure/navigation';
import { theme } from './src/infrastructure/theme';
import {
	useFonts as useOswald,
	Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

export default function App() {
	const [oswaldLoaded] = useOswald({
		Oswald_400Regular,
	});
	const [latoLoaded] = useLato({
		Lato_400Regular,
	});

	if (!oswaldLoaded || !latoLoaded) {
		return null;
	}
	return (
		<>
			<ThemeProvider theme={theme}>
				<AuthenticationContextProvider>
					<Navigation />
				</AuthenticationContextProvider>
			</ThemeProvider>
			<ExpoStatusBar style='auto' />
		</>
	);
}

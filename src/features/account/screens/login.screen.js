import React, { useState, useContext } from 'react';

import { ActivityIndicator, Colors } from 'react-native-paper';

import {
	AccountBackground,
	AccountCover,
	AccountContainer,
	AuthButton,
	AuthInput,
	Title,
	ErrorContainer,
} from '../components/account.styles';
import { Text } from '../../../components/typography/text.component';

import { AuthenticationContext } from '../../../services/authentication/authentication.context';

export const LoginScreen = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { onLogin, isLoading, error } = useContext(AuthenticationContext);

	return (
		<AccountBackground>
			<AccountCover />
			<Title>Meals To Go</Title>
			<AccountContainer>
				<AuthInput
					label='Email'
					value={email}
					textContentType='emailAddress'
					keyboardType='email-address'
					autoCapitalize='none'
					onChangeText={(u) => setEmail(u)}
				/>
				<AuthInput
					label='Password'
					value={password}
					textContentType='password'
					secureTextEntry={true}
					autoCapitalize='none'
					onChangeText={(p) => setPassword(p)}
				/>
				{error && (
					<ErrorContainer>
						<Text variant='error'>{error}</Text>
					</ErrorContainer>
				)}
				{!isLoading ? (
					<AuthButton
						icon='lock-open-outline'
						mode='contained'
						onPress={() => onLogin(email, password)}
					>
						Login
					</AuthButton>
				) : (
					<ActivityIndicator
						size={50}
						animating={true}
						color={Colors.blue300}
					/>
				)}
			</AccountContainer>
			<AuthButton mode='contained' onPress={() => navigation.goBack()}>
				Back
			</AuthButton>
		</AccountBackground>
	);
};

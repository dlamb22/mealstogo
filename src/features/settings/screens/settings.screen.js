import React, { useContext, useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import styled from 'styled-components';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { TouchableOpacity } from 'react-native';
import { List, Avatar } from 'react-native-paper';

import { AuthenticationContext } from '../../../services/authentication/authentication.context';

import { SafeArea } from '../../../components/utility/safe-area-component';
import { Text } from '../../../components/typography/text.component';

const SettingsItem = styled(List.Item)`
	padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
	align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
	const { onLogout, user } = useContext(AuthenticationContext);
	const [photo, setPhoto] = useState(null);

	const getProfilePicture = async (currentUser) => {
		const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
		setPhoto(photoUri);
	};

	useFocusEffect(
		useCallback(() => {
			getProfilePicture(user);
		}, [user])
	);

	return (
		<SafeArea>
			<AvatarContainer>
				<TouchableOpacity onPress={() => navigation.navigate('Camera')}>
					{!photo && (
						<Avatar.Icon size={180} icon='human' backgroundColor='#2182BD' />
					)}
					{photo && (
						<Avatar.Image
							size={180}
							source={{ uri: photo }}
							backgroundColor='#2182BD'
						/>
					)}
				</TouchableOpacity>
				<Text variant='label'>{user.email}</Text>
			</AvatarContainer>
			<List.Section>
				<SettingsItem
					title='Favorites'
					description='View Your Favorites'
					left={(props) => <List.Icon {...props} color='black' icon='heart' />}
					onPress={() => navigation.navigate('Favorites')}
				/>
				<SettingsItem
					title='Logout'
					left={(props) => <List.Icon {...props} color='black' icon='door' />}
					onPress={onLogout}
				/>
			</List.Section>
		</SafeArea>
	);
};

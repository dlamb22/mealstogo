import React, { useContext } from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';

import { FavoritesContext } from '../../../services/favorites/favorites.context';

import { SafeArea } from '../../../components/utility/safe-area-component';
import { Text } from '../../../components/typography/text.component';
import { RestaurantList } from '../../restaurants/components/restaurant-list.styles';
import { Spacer } from '../../../components/spacer/spacer.component';
import { RestaurantInfoCard } from '../../restaurants/components/restaurant-info-card.component';

const NoFavoritesArea = styled(SafeArea)`
	align-items: center;
	justify-content: center;
`;

export const FavoritesScreen = ({ navigation }) => {
	const { favorites } = useContext(FavoritesContext);

	return favorites.length ? (
		<RestaurantList
			data={favorites}
			renderItem={({ item }) => (
				<TouchableOpacity
					onPress={() =>
						navigation.navigate('Restaurant Detail', { restaurant: item })
					}
				>
					<Spacer position='bottom' size='large'>
						<RestaurantInfoCard restaurant={item} />
					</Spacer>
				</TouchableOpacity>
			)}
			keyExtractor={(item) => item.name}
		/>
	) : (
		<NoFavoritesArea>
			<Text>No Favorites Yet.</Text>
		</NoFavoritesArea>
	);
};

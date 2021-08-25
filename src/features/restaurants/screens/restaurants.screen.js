import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { FlatList, TouchableOpacity } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';

import { RestaurantContext } from '../../../services/restaurants/restaurants.context';
import { FavoritesContext } from '../../../services/favorites/favorites.context';

import { SafeArea } from '../../../components/utility/safe-area-component';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Search } from '../components/search.component';
import { FavoritesBar } from '../../../components/favorites/favorites-bar.component';

const RestaurantList = styled(FlatList).attrs({
	contentContainerStyle: {
		padding: 16,
	},
})``;

const LoadingContainer = styled.View`
	position: absolute;
	top: 50%;
	left: 50%;
`;

const Loading = styled(ActivityIndicator)`
	margin-left: -25px;
`;

export function RestaurantsScreen({ navigation }) {
	const { isLoading, restaurants } = useContext(RestaurantContext);
	const { favorites } = useContext(FavoritesContext);
	const [isToggled, setIsToggled] = useState(false);

	return (
		<SafeArea>
			{isLoading && (
				<LoadingContainer>
					<Loading size={50} animating={true} color={Colors.blue300} />
				</LoadingContainer>
			)}
			<Search
				isFavoritesToggled={isToggled}
				onFavoritesToggle={() => setIsToggled(!isToggled)}
			/>
			{isToggled && (
				<FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />
			)}
			<RestaurantList
				data={restaurants}
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
		</SafeArea>
	);
}

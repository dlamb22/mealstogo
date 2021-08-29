import React, { useState, useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { Colors } from 'react-native-paper';

import { RestaurantContext } from '../../../services/restaurants/restaurants.context';
import { FavoritesContext } from '../../../services/favorites/favorites.context';

import { SafeArea } from '../../../components/utility/safe-area-component';
import { FadeInView } from '../../../components/animations/fade.animation';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Search } from '../components/search.component';
import { FavoritesBar } from '../../../components/favorites/favorites-bar.component';
import {
	Loading,
	LoadingContainer,
	RestaurantList,
} from '../components/restaurant-list.styles';

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
							<FadeInView>
								<RestaurantInfoCard restaurant={item} />
							</FadeInView>
						</Spacer>
					</TouchableOpacity>
				)}
				keyExtractor={(item) => item.name}
			/>
		</SafeArea>
	);
}

import React, { useContext } from 'react';
import styled from 'styled-components';
import { FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { RestaurantContext } from '../../../services/restaurants/restaurants.context';

import { SafeArea } from '../../../components/utility/safe-area-component';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { Spacer } from '../../../components/spacer/spacer.component';

const SearchContainer = styled.View`
	padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
	contentContainerStyle: {
		padding: 16,
	},
})``;

export function RestaurantsScreen() {
	const restaurantContext = useContext(RestaurantContext);
	const [searchQuery, setSearchQuery] = React.useState('');
	const onChangeSearch = (query) => setSearchQuery(query);

	return (
		<SafeArea>
			<SearchContainer>
				<Searchbar
					placeholder='Search'
					onChangeText={onChangeSearch}
					value={searchQuery}
				/>
			</SearchContainer>

			<RestaurantList
				data={restaurantContext.restaurants}
				renderItem={() => (
					<Spacer position='bottom' size='large'>
						<RestaurantInfoCard />
					</Spacer>
				)}
				keyExtractor={(item) => item.name}
			/>
		</SafeArea>
	);
}

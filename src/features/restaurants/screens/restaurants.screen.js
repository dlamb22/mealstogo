import React, { useContext } from 'react';
import styled from 'styled-components';
import { FlatList } from 'react-native';
import { Searchbar, ActivityIndicator, Colors } from 'react-native-paper';

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

const LoadingContainer = styled.View`
	position: absolute;
	top: 50%;
	left: 50%;
`;

const Loading = styled(ActivityIndicator)`
	margin-left: -25px;
`;

export function RestaurantsScreen() {
	const { isLoading, error, restaurants } = useContext(RestaurantContext);
	const [searchQuery, setSearchQuery] = React.useState('');
	const onChangeSearch = (query) => setSearchQuery(query);

	return (
		<SafeArea>
			{isLoading && (
				<LoadingContainer>
					<Loading size={50} animating={true} color={Colors.blue300} />
				</LoadingContainer>
			)}
			<SearchContainer>
				<Searchbar
					placeholder='Search'
					onChangeText={onChangeSearch}
					value={searchQuery}
				/>
			</SearchContainer>
			<RestaurantList
				data={restaurants}
				renderItem={({ item }) => (
					<Spacer position='bottom' size='large'>
						<RestaurantInfoCard restaurant={item} />
					</Spacer>
				)}
				keyExtractor={(item) => item.name}
			/>
		</SafeArea>
	);
}

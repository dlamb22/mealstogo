import React from 'react';
import styled from 'styled-components';
import { StatusBar, SafeAreaView, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const SafeArea = styled(SafeAreaView)`
	flex: 1;
	${Platform.OS !== 'ios' && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
	padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
	flex: 1;
	padding: ${(props) => props.theme.space[3]};
`;

export function RestaurantsScreen() {
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
			<RestaurantListContainer>
				<RestaurantInfoCard />
			</RestaurantListContainer>
		</SafeArea>
	);
}

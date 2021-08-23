import React, { useContext } from 'react';
import styled from 'styled-components';
import { FlatList, TouchableOpacity } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';

import { RestaurantContext } from '../../../services/restaurants/restaurants.context';

import { SafeArea } from '../../../components/utility/safe-area-component';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Search } from '../components/search.component';

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

	return (
		<SafeArea>
			{isLoading && (
				<LoadingContainer>
					<Loading size={50} animating={true} color={Colors.blue300} />
				</LoadingContainer>
			)}
			<Search />
			<RestaurantList
				data={restaurants}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => navigation.navigate('Restaurant Detail')}
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

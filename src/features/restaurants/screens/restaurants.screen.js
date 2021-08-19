import React from 'react';
import { StatusBar, StyleSheet, View, SafeAreaView } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

export function RestaurantsScreen() {
	const [searchQuery, setSearchQuery] = React.useState('');
	const onChangeSearch = (query) => setSearchQuery(query);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.search}>
				<Searchbar
					placeholder='Search'
					onChangeText={onChangeSearch}
					value={searchQuery}
				/>
			</View>
			<View style={styles.list}>
				<RestaurantInfoCard />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight,
	},
	search: {
		padding: 16,
	},
	list: {
		flex: 1,
		padding: 16,
		backgroundColor: 'blue',
	},
});

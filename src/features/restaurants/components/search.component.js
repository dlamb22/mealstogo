import React, { useContext, useState, useEffect } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components';
import { LocationContext } from '../../../services/location/location.context';

const SearchContainer = styled.View`
	padding: ${(props) => props.theme.space[3]};
`;

export function Search({ isFavoritesToggled, onFavoritesToggle }) {
	const { keyword, search } = useContext(LocationContext);
	const [searchKeyword, setSearchKeyword] = useState(keyword);

	useEffect(() => {
		setSearchKeyword(keyword);
	}, [keyword]);

	return (
		<SearchContainer>
			<Searchbar
				icon={isFavoritesToggled ? 'heart' : 'heart-outline'}
				onIconPress={onFavoritesToggle}
				placeholder='Search for a location'
				onSubmitEditing={() => search(searchKeyword)}
				onChangeText={(text) => setSearchKeyword(text)}
				value={searchKeyword}
			/>
		</SearchContainer>
	);
}

import React, { useContext, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components';
import { LocationContext } from '../../../services/location/location.context';

const SearchContainer = styled.View`
	padding: ${(props) => props.theme.space[3]};
`;

export function Search() {
	const { keyword, search } = useContext(LocationContext);
	const [searchKeyword, setSearchKeyword] = useState(keyword);

	return (
		<SearchContainer>
			<Searchbar
				placeholder='Search for a location'
				onSubmitEditing={() => search(searchKeyword)}
				onChangeText={(text) => setSearchKeyword(text)}
				value={searchKeyword}
			/>
		</SearchContainer>
	);
}

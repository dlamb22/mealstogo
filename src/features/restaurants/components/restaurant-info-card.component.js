import React from 'react';
import styled from 'styled-components';
import { Text, View, Image } from 'react-native';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';

import star from '../../../../assets/star';
import open from '../../../../assets/open';

const RestaurantCard = styled(Card)`
	background-color: #fff;
`;

const RestaurantCardCover = styled(Card.Cover)`
	padding: 20px;
	background-color: #fff;
`;

const Title = styled(Text)`
	font-family: ${(props) => props.theme.fonts.heading};
	font-size: ${(props) => props.theme.fontSizes.body};
	color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled(Text)`
	font-family: ${(props) => props.theme.fonts.body};
	font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Info = styled.View`
	padding: ${(props) => props.theme.space[3]};
`;

const Section = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: baseline;
`;

const Rating = styled.View`
	flex-direction: row;
	padding: ${(props) => props.theme.space[2]} 0px;
`;

export function RestaurantInfoCard({ restaurant = {} }) {
	const {
		name = 'Some Restaurant',
		icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
		photos = [
			'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
		],
		address = '100 some random street',
		isOpenNow = true,
		rating = 4,
		isClosedTemporarily = true,
	} = restaurant;

	const ratingArray = Array.from(new Array(Math.ceil(rating)));

	return (
		<RestaurantCard elevation={5}>
			<RestaurantCardCover key={name} source={{ uri: photos[0] }} />
			<Info>
				<Title>{name}</Title>
				<Section>
					<Rating>
						{ratingArray.map(() => (
							<SvgXml xml={star} width={20} height={20} />
						))}
					</Rating>
					{isClosedTemporarily && (
						<Text variant='label' style={{ color: 'red' }}>
							CLOSED TEMPORARILY
						</Text>
					)}
					{isOpenNow && <SvgXml xml={open} width={20} height={20} />}
					<Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
				</Section>
				<Address>{address}</Address>
			</Info>
		</RestaurantCard>
	);
}

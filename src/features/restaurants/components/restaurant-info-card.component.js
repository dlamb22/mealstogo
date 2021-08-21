import React from 'react';

import { SvgXml } from 'react-native-svg';
import { Text } from '../../../components/typography/text.component';

import star from '../../../../assets/star';
import open from '../../../../assets/open';

import {
	RestaurantCard,
	RestaurantCardCover,
	Info,
	Section,
	Rating,
	Address,
} from './restaurant-info-card.styles';

export function RestaurantInfoCard({ restaurant = {} }) {
	const {
		name = 'Some Restaurant',
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
				<Text variant='label'>{name}</Text>
				<Section>
					<Rating>
						{ratingArray.map(() => (
							<SvgXml xml={star} width={20} height={20} />
						))}
					</Rating>
					{isClosedTemporarily && (
						<Text variant='error'>CLOSED TEMPORARILY</Text>
					)}
					{isOpenNow && <SvgXml xml={open} width={20} height={20} />}
				</Section>
				<Address>{address}</Address>
			</Info>
		</RestaurantCard>
	);
}

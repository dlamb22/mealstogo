import styled from 'styled-components';
import { Card } from 'react-native-paper';
import { Text } from '../../../components/typography/text.component';

export const RestaurantCard = styled(Card)`
	background-color: #fff;
`;

export const RestaurantCardCover = styled(Card.Cover)`
	padding: ${(props) => props.theme.space[3]};
	background-color: #fff;
`;

export const Address = styled(Text)`
	font-family: ${(props) => props.theme.fonts.body};
	font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Info = styled.View`
	padding: ${(props) => props.theme.space[3]};
`;

export const Section = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const Rating = styled.View`
	flex-direction: row;
	padding: ${(props) => props.theme.space[2]} 0px;
`;

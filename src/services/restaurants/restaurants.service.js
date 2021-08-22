import { mocks } from './mock';
import camelize from 'camelize';

export const restaurantsRequest = (location = '37.7749295,-122.4194155') => {
	return new Promise((resolve, reject) => {
		const mock = mocks[location];
		if (!mock) {
			reject('not found');
		}
		resolve(mock);
	});
};
export const restaurantsTransform = ({ results = [] }) => {
	const mappedResults = results.map((restaurant) => {
		return {
			...restaurant,
			isOpenNow: restaurant.openingHours && restaurant.openingHours.openNow,
			isClosedTemporarily: restaurant.businessStatus === 'CLOSED_TEMPORARILY',
		};
	});
	return camelize(results);
};
restaurantsRequest()
	.then(restaurantsTransform)
	.then((transformedResponse) => {
		console.log(transformedResponse);
	})
	.catch((err) => console.log(err));

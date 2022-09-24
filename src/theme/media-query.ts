import { Dimensions } from 'react-native';

const mediaQuery = (size = 1, min: number | null = null) => {
	const { width, height } = Dimensions.get('screen');
	const DIVISOR = height - width;
	const MULTIPLIER_FACTOR = 0.2;

	const calc = (DIVISOR * MULTIPLIER_FACTOR * size) / 96;
	if (min) {
		return min >= calc ? min : calc;
	}
	return calc <= size ? calc : size;
};

export { mediaQuery }

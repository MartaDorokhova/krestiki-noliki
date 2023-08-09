import { WIN_PATTERNS } from '../WIN_PATTERN';
import PropTypes from 'prop-types';

export const isWinner = (field) => {
	return WIN_PATTERNS.some((pattern) => {
		const [index1, index2, index3] = pattern;
		const value1 = field[index1];
		const value2 = field[index2];
		const value3 = field[index3];
		if (
			value1 === value2 &&
			value2 === value3 &&
			(value1 === 'X' || value1 === '0')
		) {
			return true;
		}
		return false;
	});
};

isWinner.propTypes = {
	field: PropTypes.array,
	isWinner: PropTypes.func,
};

import { WIN_PATTERNS } from '../WIN_PATTERN';
import { store } from '../store';
import PropTypes from 'prop-types';

export const informationUtils = (field, isGameEnded, isDraw, currentPlayer) => {
	const isWinner = WIN_PATTERNS.some((pattern) => {
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
	if (isWinner) {
		if (!isGameEnded) {
			store.dispatch({
				type: 'SET_IS_GAME_ENDED',
				payload: { isGameEnded: true, text: `Победа ${currentPlayer}` },
			});
		}
	}

	if (!isWinner && !field.includes('')) {
		if (!isDraw) {
			store.dispatch({
				type: 'SET_IS_DRAW',
				payload: { isDraw: true, isGameEnded: true, text: 'Ничья' },
			});
		}
	}
};

informationUtils.propTypes = {
	field: PropTypes.array,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
	currentPlayer: PropTypes.string,
};

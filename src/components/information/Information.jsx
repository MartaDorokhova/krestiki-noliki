import { InformationLayout } from './InformationLayout';
import { WIN_PATTERNS } from '../../WIN_PATTERN';
import PropTypes from 'prop-types';

export const InformationComponent = ({
	field,
	isDraw,
	isGameEnded,
	currentPlayer,
	setIsGameEnded,
	setIsDraw,
	setCurrentPlayer,
	setField,
}) => {
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
			setCurrentPlayer(value1);
			return true;
		}
		return false;
	});
	if (isWinner) {
		setIsGameEnded(true);
	}

	if (!isWinner && !field.includes('')) {
		setIsGameEnded(true);
		setIsDraw(true);
	}
	const onClickRestart = () => {
		setIsGameEnded(false);
		setIsDraw(false);
		setCurrentPlayer('X');
		setField(['', '', '', '', '', '', '', '', '']);
	};
	return (
		<InformationLayout
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			currentPlayer={currentPlayer}
			onClickRestart={onClickRestart}
		/>
	);
};

InformationComponent.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	setIsDraw: PropTypes.func,
};

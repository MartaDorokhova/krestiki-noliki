import './App.css';
import { FieldLayout } from './FieldLayout';
import PropTypes from 'prop-types';

export const FieldComponent = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
}) => {
	const onClick = (e, index) => {
		const value = e.target.value;
		if (!value && !isGameEnded) {
			setField([
				...field.slice(0, index),
				currentPlayer,
				...field.slice(index + 1),
			]);
		}

		if (currentPlayer === 'X') {
			setCurrentPlayer('0');
		} else {
			setCurrentPlayer('X');
		}
	};

	return <FieldLayout field={field} onClick={onClick} />;
};
FieldComponent.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
};

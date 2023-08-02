import { FieldLayout } from './FieldLayout';
import PropTypes from 'prop-types';
import { store } from '../../store';

export const FieldComponent = () => {
	const { field, isGameEnded } = store.getState();
	const onClick = (e, index) => {
		const value = e.target.value;
		if (!value && !isGameEnded) {
			// const newField = [
			// 	...field.slice(0, index),
			// 	currentPlayer,
			// 	...field.slice(index + 1),
			// ];

			store.dispatch({
				type: 'ON_CLICK',
				payload: { index },
				// payload: { currentPlayer, field: newField, isDraw, isGameEnded },
			});
		}
	};
	console.log(field);
	return <FieldLayout field={field} onClick={onClick} />;
};

FieldComponent.propTypes = {
	field: PropTypes.array,
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
};

import { FieldLayout } from './FieldLayout';
import { connect, useSelector } from 'react-redux';
import { isWinner } from '../../utils';
import PropTypes from 'prop-types';
import {
	selectField,
	selectIsGameEnded,
	selectIsDraw,
} from '../../selectors/select-informations';
import { useEffect } from 'react';

export const FieldComponentContainer = ({ dispatch }) => {
	const field = useSelector(selectField);
	const isGameEnded = useSelector(selectIsGameEnded);
	const isDraw = useSelector(selectIsDraw);

	const onClick = (e, index) => {
		const value = e.target.value;
		if (!value && !isGameEnded) {
			dispatch({
				type: 'ON_CLICK',
				payload: { index },
			});
		}
	};
	let newField = field;
	useEffect(() => {
		if (isWinner(field)) {
			if (!isGameEnded) {
				dispatch({
					type: 'SET_IS_GAME_ENDED',
					payload: { isGameEnded: true },
				});
			}
		}
		if (!isWinner(field) && !field.includes('')) {
			if (!isDraw) {
				dispatch({
					type: 'SET_IS_DRAW',
					payload: { isDraw: true, isGameEnded: true },
				});
			}
		}
	}, [field, isDraw, isGameEnded, dispatch]);
	return <FieldLayout field={newField} onClick={onClick} />;
};

export const FieldComponent = connect()(FieldComponentContainer);

FieldComponentContainer.propTypes = {
	field: PropTypes.array,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
};

import { FieldLayout } from './FieldLayout';
import PropTypes from 'prop-types';
import { store } from '../../store';

export const FieldComponent = () => {
	const { field, isGameEnded } = store.getState();
	const onClick = (e, index) => {
		const value = e.target.value;
		if (!value && !isGameEnded) {
			store.dispatch({
				type: 'ON_CLICK',
				payload: { index },
			});
		}
	};
	let newField = field;

	return <FieldLayout field={newField} onClick={onClick} />;
};

FieldComponent.propTypes = {
	field: PropTypes.array,
	isGameEnded: PropTypes.bool,
};

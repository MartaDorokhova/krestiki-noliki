import { FieldLayout } from './FieldLayout';
import PropTypes from 'prop-types';
import { store } from '../../store';
import { onClick } from './field-click';

export const FieldComponent = () => {
	const { field } = store.getState();

	let newField = field;

	return <FieldLayout field={newField} onClick={onClick} />;
};

FieldComponent.propTypes = {
	field: PropTypes.array,
};

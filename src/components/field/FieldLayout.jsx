import { connect } from 'react-redux';
import styles from './Field.module.css';
import PropTypes from 'prop-types';

export const FieldLayoutContainer = ({ field, onClick }) => (
	<div className={styles.field}>
		{field?.map((item, index) => (
			<button
				className={styles.button}
				key={index}
				value={item}
				onClick={(e) => onClick(e, index)}
			>
				{item}
			</button>
		))}
	</div>
);

const mapStateToProps = (state) => ({
	field: state.field,
});

export const FieldLayout = connect(mapStateToProps)(FieldLayoutContainer);

FieldLayoutContainer.propTypes = {
	field: PropTypes.array,
	onClick: PropTypes.func,
};

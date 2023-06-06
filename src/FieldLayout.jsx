import styles from './Field.module.css';
import PropTypes from 'prop-types';

export const FieldLayout = ({ field, onClick }) => (
	<div className={styles.field}>
		{field.map((item, index) => (
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

FieldLayout.propTypes = {
	field: PropTypes.array,
	onClick: PropTypes.func,
};

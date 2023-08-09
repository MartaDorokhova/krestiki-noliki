import styles from './Information.module.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectText } from '../../selectors/select-text';

export const InformationLayout = ({ onClickRestart }) => {
	const text = useSelector(selectText);

	return (
		<>
			<div className={styles.start}>{text}</div>
			<button className={styles.restart} onClick={onClickRestart}>
				Начать заново
			</button>
		</>
	);
};

InformationLayout.propTypes = {
	onClickRestart: PropTypes.func,
};

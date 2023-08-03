import styles from './Information.module.css';
import PropTypes from 'prop-types';
import { store } from '../../store';

export const InformationLayout = ({ onClickRestart }) => {
	const { text } = store.getState();

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

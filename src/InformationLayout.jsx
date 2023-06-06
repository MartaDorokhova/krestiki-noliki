import styles from './Information.module.css';
import PropTypes from 'prop-types';

export const InformationLayout = ({
	isDraw,
	isGameEnded,
	currentPlayer,
	onClickRestart,
}) => {
	let text = '';
	if (!isDraw && isGameEnded) {
		text = `Победа ${currentPlayer}`;
	}
	if (!isDraw && !isGameEnded) {
		text = `Ходит ${currentPlayer}`;
	}
	if (isDraw) {
		text = 'Ничья';
	}
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
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
	onClickRestart: PropTypes.func,
};

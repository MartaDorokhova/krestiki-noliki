import styles from './Information.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const InformationLayoutContainer = ({ onClickRestart, text }) => {
	return (
		<>
			<div className={styles.start}>{text}</div>
			<button className={styles.restart} onClick={onClickRestart}>
				Начать заново
			</button>
		</>
	);
};

const mapStateToProps = (state) => ({
	text: state.text,
});

export const InformationLayout = connect(mapStateToProps)(
	InformationLayoutContainer,
);

InformationLayoutContainer.propTypes = {
	onClickRestart: PropTypes.func,
};

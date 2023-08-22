import React from 'react';
import styles from './Information.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class InformationLayoutContainer extends React.Component {
	constructor(props) {
		super(props);
		this.onClickRestart = this.onClickRestart.bind(this);
	}
	onClickRestart() {
		this.props.dispatch({ type: 'RESTART' });
	}
	render() {
		const { text } = this.props;

		return (
			<>
				<div className={styles.start}>{text}</div>{' '}
				<button className={styles.restart} onClick={this.onClickRestart}>
					Начать заново
				</button>
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	text: state.text,
});

export const InformationLayout = connect(mapStateToProps)(
	InformationLayoutContainer,
);

InformationLayoutContainer.propTypes = {
	onClickRestart: PropTypes.func,
};

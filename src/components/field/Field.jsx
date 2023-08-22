import React from 'react';
import { FieldLayout } from './FieldLayout';
import { connect } from 'react-redux';
import { isWinner } from '../../utils';
import PropTypes from 'prop-types';
class FieldComponentContainer extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e, index) {
		const value = e.target.value;
		if (!value && !this.isGameEnded) {
			this.props.dispatch({
				type: 'ON_CLICK',
				payload: { index },
			});
		}
	}
	componentDidUpdate() {
		const { dispatch, field, isDraw, isGameEnded } = this.props;
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
	}
	render() {
		let newField = this.props.field;

		return <FieldLayout field={newField} onClick={this.handleClick} />;
	}
}
const mapStateToProps = (state) => ({
	isDraw: state.isDraw,
	isGameEnded: state.isGameEnded,
	field: state.field,
});
export const FieldComponent = connect(mapStateToProps)(FieldComponentContainer);

FieldComponentContainer.propTypes = {
	field: PropTypes.array,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
};

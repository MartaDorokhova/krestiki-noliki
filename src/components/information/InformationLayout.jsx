import React from 'react';
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
			<div>
				<div className=" w-40 ml-16 mt-4 font-mono text-xl  text-center">
					{text}
				</div>
				<div className="ml-16 w-40  rounded-full font-mono text-lg bg-amber-100 border-[#fecd8d] border  cursor-pointer text-center">
					<buttons onClick={this.onClickRestart}>Начать заново</buttons>
				</div>
			</div>
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

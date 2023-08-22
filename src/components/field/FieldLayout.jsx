import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

class FieldLayoutContainer extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e, index) {
		const { onClick } = this.props;
		onClick(e, index);
	}

	render() {
		const { field } = this.props;

		return (
			<div>
				<div className="w-56 ml-12 flex flex-wrap mt-6 text-center">
					{field?.map((item, index) => (
						<button
							className="text-center w-16 h-16    border bg-amber-100 border-[#fecd8d] "
							key={index}
							value={item}
							onClick={(e) => this.handleClick(e, index)}
						>
							{item}
						</button>
					))}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	field: state.field,
});

export const FieldLayout = connect(mapStateToProps)(FieldLayoutContainer);

FieldLayoutContainer.propTypes = {
	field: PropTypes.array,
	onClick: PropTypes.func,
};

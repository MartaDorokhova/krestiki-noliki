import { connect } from 'react-redux';
import React from 'react';
import styles from './Field.module.css';
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
				<div className={styles.field}>
					{' '}
					{field?.map((item, index) => (
						<button
							className={styles.button}
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

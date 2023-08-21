import { InformationLayout } from './InformationLayout';
import { connect } from 'react-redux';

export const InformationComponentContainer = ({ dispatch }) => {
	const onClickRestart = () => {
		dispatch({ type: 'RESTART' });
	};
	return <InformationLayout onClickRestart={onClickRestart} />;
};

export const InformationComponent = connect()(InformationComponentContainer);

import { InformationLayout } from './InformationLayout';
import { useDispatch } from 'react-redux';

export const InformationComponent = () => {
	const dispatch = useDispatch();

	const onClickRestart = () => {
		dispatch({ type: 'RESTART' });
	};
	return <InformationLayout onClickRestart={onClickRestart} />;
};

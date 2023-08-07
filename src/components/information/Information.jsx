import { InformationLayout } from './InformationLayout';
import { store } from '../../store';
import { informationUtils } from '../../utils/utils';

export const InformationComponent = () => {
	informationUtils();
	const onClickRestart = () => {
		store.dispatch({ type: 'RESTART' });
	};
	return <InformationLayout onClickRestart={onClickRestart} />;
};

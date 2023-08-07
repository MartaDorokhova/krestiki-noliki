import { InformationLayout } from './InformationLayout';
import { store } from '../../store';
import { informationUtils } from '../../utils/utils';

export const InformationComponent = () => {
	const { field, isGameEnded, isDraw, currentPlayer } = store.getState();
	informationUtils(field, isGameEnded, isDraw, currentPlayer);
	const onClickRestart = () => {
		store.dispatch({ type: 'RESTART' });
	};
	return <InformationLayout onClickRestart={onClickRestart} />;
};

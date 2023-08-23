import { InformationLayout } from './InformationLayout';
import { store } from '../../store';
import { informationUtils } from './result-information';
import { onClickRestart } from './restart';

export const InformationComponent = () => {
	const { field, isGameEnded, isDraw, currentPlayer } = store.getState();
	informationUtils(field, isGameEnded, isDraw, currentPlayer);
	return <InformationLayout onClickRestart={onClickRestart} />;
};

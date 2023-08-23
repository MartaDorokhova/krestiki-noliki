import { store } from '../../store';

export const onClickRestart = () => {
	store.dispatch({ type: 'RESTART' });
};

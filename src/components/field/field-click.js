import { store } from '../../store';

const { isGameEnded } = store.getState();
export const onClick = (e, index) => {
	const value = e.target.value;
	if (!value && !isGameEnded) {
		store.dispatch({
			type: 'ON_CLICK',
			payload: { index },
		});
	}
};

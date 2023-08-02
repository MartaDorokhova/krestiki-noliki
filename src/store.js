import { appReducer } from './reducer';

const createStore = (reducer) => {
	let state;

	return {
		dispatch: (action) => {
			state = reducer(state, action);
			console.log(state);
		},
		getState: () => {
			console.log(state);
			return state;
		},
	};
};

export const store = createStore(appReducer);

// store.subscribe(() => {
// 	//6. Срабатывает и получает state, каждый раз при изменении, помещать до dispatch()
// 	console.log(store.getState()); //7. Получаем состояние
// });

store.dispatch({});

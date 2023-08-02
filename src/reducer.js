export const initialState = {
	isGameEnded: false,
	IsDraw: false,
	currentPlayer: 'X',
	field: ['', '', '', '', '', '', '', '', ''],
};

export const appReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'RESTART': {
			return initialState;
		}

		case 'ON_CLICK': {
			const { index } = payload;
			let newCurrentPlayer;
			if (state.currentPlayer === 'X') {
				newCurrentPlayer = '0';
			} else {
				newCurrentPlayer = 'X';
			}
			const newField = [
				...state.field.slice(0, index),
				newCurrentPlayer,
				...state.field.slice(index + 1),
			];

			return {
				...state,
				field: newField,
				// isDraw,
				// isGameEnded,
				currentPlayer: newCurrentPlayer,
			};
		}

		default:
			return state;
	}
};

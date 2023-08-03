export const initialState = {
	isGameEnded: false,
	isDraw: false,
	currentPlayer: '',
	field: ['', '', '', '', '', '', '', '', ''],
	text: 'Ходит X',
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
			let newText;
			if (state.currentPlayer === 'X') {
				newCurrentPlayer = '0';
				newText = 'Ходит X';
			} else {
				newCurrentPlayer = 'X';
				newText = 'Ходит 0';
			}

			const newField = [
				...state.field.slice(0, index),
				newCurrentPlayer,
				...state.field.slice(index + 1),
			];

			return {
				...state,
				field: newField,
				currentPlayer: newCurrentPlayer,
				text: newText,
			};
		}

		case 'SET_IS_GAME_ENDED': {
			const { isGameEnded, text } = payload;

			return { ...state, isGameEnded, text };
		}

		case 'SET_IS_DRAW': {
			const { isGameEnded, isDraw, text } = payload;

			return { ...state, isGameEnded, isDraw, text };
		}

		default:
			return state;
	}
};

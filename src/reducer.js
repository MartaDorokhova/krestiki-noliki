export const initialState = {
	isGameEnded: false,
	isDraw: false,
	currentPlayer: '',
	field: ['', '', '', '', '', '', '', '', ''],
	text: 'Ходит X',
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'RESTART': {
			return initialState;
		}

		case 'ON_CLICK': {
			const { index } = action.payload;
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
			const { isGameEnded } = action.payload;

			return { ...state, isGameEnded, text: `Победа ${state.currentPlayer}` };
		}

		case 'SET_IS_DRAW': {
			const { isDraw, isGameEnded } = action.payload;
			return { ...state, text: `Ничья`, isDraw, isGameEnded };
		}

		default:
			return state;
	}
};

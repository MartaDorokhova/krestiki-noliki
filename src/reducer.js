export const initialState = {};

export const appReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case '&&&': {
			return payload;
		}
		case 'SET_USER_AGE': {
			return {
				...state,
				age: payload,
			};
		}
		default:
			return state;
	}
};

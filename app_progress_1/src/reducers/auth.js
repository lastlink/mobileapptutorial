const initialState = {
	waiting: true,
	state: null,
	token: null,
	user: {},
};
export default (state = initialState, { type, payload } ) => {
	switch(type){
		case 'AUTH_LOGING':
			return {
				...state,
				waiting: true,
			};
		case 'AUTH_LOGGED':
			return {
				...state,
				state: payload.state,
				token: payload.token,
				user: payload.user,
				waiting: false,
			};
		default:
			return state;
	}
};
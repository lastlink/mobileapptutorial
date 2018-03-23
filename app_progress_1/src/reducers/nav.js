import AppNavigator from '../router/AppNavigator';

export default (state, action) => {
	const nextState = AppNavigator.router.getStateForAction(action, state);
	return nextState || state;
};
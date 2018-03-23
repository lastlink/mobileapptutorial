import React from "react";

import { BackHandler } from "react-native";

import { Root } from "native-base";
import { addNavigationHelpers, NavigationActions } from "react-navigation";

import { Provider } from "react-redux";
import store from "./store";

import { StyleProvider } from "native-base";
// import getTheme from "../native-base-theme/components";
import getTheme from "./theme/components";
import material from "./theme/variables/commonColor";


// import material from "../native-base-theme/variables/material";

import { connect } from "react-redux";

import AppNavigator from "./router/AppNavigator";

class App extends React.Component {
	componentDidMount() {
		BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
	}
	componentWillUnmount() {
		BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
	}
	onBackPress = () => {
		const { dispatch, nav } = this.props;
		if (nav.index === 0) {
			return false;
		}
		dispatch(NavigationActions.back());
		return true;
    };

	render() {
		return (
			<AppNavigator navigation={addNavigationHelpers({
				dispatch: this.props.dispatch,
				state: this.props.nav,
			})} />
		);
	}
}

const mapStateToProps = (state) => ({
	nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

export default () =>
	<Provider store={store}>
		<StyleProvider style={getTheme(material)}>
			<Root>
				<AppWithNavigationState />
			</Root>
		</StyleProvider>
    </Provider>;

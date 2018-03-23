import Routes from './Routes';
import { StackNavigator } from "react-navigation";

export default StackNavigator( Routes, {
	initialRouteName: "Drawer",
	headerMode: "none",
});
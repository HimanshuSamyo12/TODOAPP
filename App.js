import React from "react";
import AppNavigator from "./AppNavigator";
import FirstScreen from "./Screens/FirstScreen";
import VerifyScreen from "./Screens/verifyScreen";
import { MenuProvider } from 'react-native-popup-menu';
import { GlobalVariableProvider } from "./Storage/globalData";

const App = () => {
  return   <GlobalVariableProvider><MenuProvider><AppNavigator/></MenuProvider></GlobalVariableProvider>;
};

export default App;

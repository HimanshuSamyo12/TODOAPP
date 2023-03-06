import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Screens/Login";
import Home from "./Screens/Home";
import AppDrawer from "./AppDrawer";
import FirstScreen from "./Screens/FirstScreen";
import TaskDetails from "./Screens/taskDetails";
import VerifyScreen from "./Screens/verifyScreen";
import SetPin from "./Screens/setpin";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AppDrawer" component={AppDrawer} />
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="TaskDetails" component={TaskDetails} />
        <Stack.Screen name="VerifyScreen" component={VerifyScreen} />
        <Stack.Screen name="SetPin" component={SetPin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

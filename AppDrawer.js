import { React } from "react";
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ScheduleScreen from "./Screens/Schedule";
import TaskDetails from "./Screens/taskDetails";
import Taskscreen from "./Screens/Tasks";
import ImportantScreen from "./Screens/Important";
import FirstScreen from "./Screens/FirstScreen";

import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
  FontAwesome5,
  Entypo,
  Octicons,
  MaterialIcons,
} from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        
      <Drawer.Screen
          name="TaskScreen"
          options={{
            drawerIcon: ({ focused, Size }) => (
              <FontAwesome5
                name="tasks"
                size={32}
                color={focused ? "green" : "#8B7765"}
              />
            ),
            drawerLabel: "Tasks",
            title: "Tasks",
          }}
          component={Taskscreen}
        />
      
      
      
      
      
      <Drawer.Screen
          name="ScheduleScreen"
          options={{
            drawerIcon: ({ focused, Size }) => (
              <AntDesign
                name="calendar"
                size={32}
                color={focused ? "green" : "#8B7765"}
              />
            ),
            drawerLabel: "Schedule Tasks",
            title: "Task",
          }}
          component={ScheduleScreen}
        />
        
      

      
        <Drawer.Screen
          name="Important"
          options={{
            drawerIcon: ({ focused, Size }) => (
              <Entypo
                name="add-to-list"
                size={32}
                color={focused ? "green" : "#8B7765"}
              />
            ),
            drawerLabel: "Important Tasks",
            title: "Important Tasks",
          }}
          component={ImportantScreen}
        />
      </Drawer.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AppDrawer;

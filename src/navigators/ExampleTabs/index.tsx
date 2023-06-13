import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ExampleScreen } from "../../screens/ExampleScreen";

export type TabStackParamList = {
  Example: undefined;
  Pools: undefined;
  Me: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

export default function ExampleTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Example"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Example"
        component={ExampleScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

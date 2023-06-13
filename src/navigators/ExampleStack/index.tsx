import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import HomeTabs from "../ExampleTabs";

const ExampleStack = createNativeStackNavigator();

const Routes = {
  ExampleTabs: {
    Component: HomeTabs,
    params: undefined as undefined | { email?: string },
  },
  //add more screens here
} as const;

export type ExampleStackParamList = {
  [T in keyof typeof Routes]: (typeof Routes)[T]["params"];
};

export const useExampleNavigation = () =>
  useNavigation<NativeStackNavigationProp<ExampleStackParamList>>();

export function ExampleStackNavigator() {
  return (
    <ExampleStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {Object.entries(Routes).map(([name, { Component }]) => (
        <ExampleStack.Screen key={name} name={name} component={Component} />
      ))}
    </ExampleStack.Navigator>
  );
}

import React from "react";
import { ExampleStackNavigator } from "./src/navigators/ExampleStack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <ExampleStackNavigator />
    </NavigationContainer>
  );
}

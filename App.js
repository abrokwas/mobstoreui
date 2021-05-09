import { StatusBar } from "expo-status-bar";
import React from "react";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

//Navigators
import Main from "./Navigators/Main";

//Screens
import ProductContainer from "./Screens/Products/ProductContainer";
import Header from "./Shared/Header";

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <NavigationContainer>
      <Header />
      <Main />
    </NavigationContainer>
  );
}

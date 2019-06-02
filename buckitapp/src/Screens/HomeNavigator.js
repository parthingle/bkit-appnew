import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "react-navigation";
import HomeScreen from "./Home/HomeScreen";
import BuckitScreen from "./Buckit/BuckitScreen";

const HomeNavigator = createStackNavigator({
  Home: HomeScreen,
  Buckit: BuckitScreen
});

export default HomeNavigator;
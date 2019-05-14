import React, { Component } from "react";
import { Text, View } from "react-native";
import { LoginButton } from "react-native-fbsdk";

export default class BlankScreen extends Component {
  constructor(props) {
    super(props);
    this.onLogoutFinished = this.onLogoutFinished.bind(this);
  }
  onLogoutFinished() {
    this.props.navigation.navigate("Login");
  }
  render() {
    return (
      <View>
        <Text>This is a settings page.</Text>
        <LoginButton onLogoutFinished={this.onLogoutFinished} />
      </View>
    );
  }
}
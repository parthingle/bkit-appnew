import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Chevron from "../Components/Chevron";
const maxSize = 5;

export default class Graph extends Component {
  render() {
    const data = ["AN", "BC", "AS", "SD", "SO", "KK", "SD"];
    const circles = data.slice(0, maxSize - 1);
    const diff = data.length - circles.length;
    if (diff > 0) {
      circles.push("+" + diff);
    }
    return (
      <View style={[styles.container, this.props.style]}>
        <Chevron left={true} />
        {circles.map((initial, i) => (
          <View key={i} style={styles.circle}>
            <Text style={styles.text}>{initial}</Text>
          </View>
        ))}
        <Chevron left={false} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#FDB17F",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  text: {
    // fontFamily: "SF Pro Text",
    fontFamily: "Arial",
    fontSize: 25,
    textAlign: "center",
    color: "#FEFDF4"
  },
  container: {
    width: "100%",
    height: 70,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FEFDF4"
  },
  logo: {
    fontFamily: "Pacifico",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 65,
    color: "#67B4B0",
    textAlign: "center"
  }
});
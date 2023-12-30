import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Online = ({data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.circle}></Text>
      <Text style={styles.content}>{data} Junkie Online!!</Text>

      {/* <StatusBar style="auto" /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 45,
    width: "80%",
    height: 30,
    // backgroundColor: "red",
    alignItems: "left",
    position: "relative",
    justifyContent: "center",
  },
  circle: {
    width: 32,
    height: 32,
    borderRadius: 100 / 2,
    backgroundColor: "green",
    marginLeft: 20,
    position: "absolute",
  },
  content: {
    marginLeft: 60,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Online;

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

const ButtonChecker = () => {
  return (
    <View>
      <Text>Button Checker</Text>
      <Button style={styles.container}
        title="Press me"
        onPress={() => alert("Simple Button pressed")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ea8685",
    marginTop: 35,
    width: "50%",
    height: 1200,
    borderRadius: 20,
    marginLeft: 5,
    position: "relative",
  },
});

export default ButtonChecker;

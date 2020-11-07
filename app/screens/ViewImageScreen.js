import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import colors from "../config/colors"

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
    <View style={styles.closeIcon} />
    <View style={styles.deleteIcon} />
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  closeIcon: {
      width: 50,
      height: 50,
      backgroundColor: colors.primary,
      position: "absolute",
      top: 30,
      left: 30,
  },
  deleteIcon: {
      width: 50,
      height: 50,
      backgroundColor: colors.secondary,
      position: "absolute",
      top: 30,
      right: 30,
  },
});

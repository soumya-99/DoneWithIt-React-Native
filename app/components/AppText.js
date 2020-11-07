import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

//We can use <Heading/> component
const AppText = ({ children }) => {
  return <Text styles={styles.text}>{children}</Text>;
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

import React from "react";
import { View, Text, StyleSheet } from "react-native";

//We can use <Heading/> component
const AppText = ({ children }) => {
  return <Text styles={styles.text}>{children}</Text>;
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    color: "red",
    fontSize: 18,
    fontFamily: "Roboto",
  },
});

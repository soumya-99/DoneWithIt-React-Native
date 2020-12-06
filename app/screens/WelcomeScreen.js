import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";

import AppButton from "../components/AppButton";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagLine}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%", //if we don't give this, the total buttonContainer shrinks to its original content (which is 'Login')
  },
  tagLine: {
    fontSize: 25,
    fontWeight: "bold",
    paddingVertical: 20,
  },
});

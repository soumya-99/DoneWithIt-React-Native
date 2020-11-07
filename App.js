import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{
        fontSize: 30,
        // fontFamily: "Roboto"
        fontStyle: "italic",
        fontWeight: "bold",
        color: "red",
        textTransform: "uppercase",
        textAlign: "center",
        lineHeight: 60
      }}>I Love React Native! This is my first React Native App. Here's some more Text...</Text>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: "dodgerblue",
          padding: 20,
          paddingLeft: 30,
        }}
      >
        <View
          style={{
            height: 50,
            width: 50,
            backgroundColor: "gold",
          }}
        ></View>
      </View>
      <View style={{
        height: 100,
        width: 100,
        backgroundColor: "orange",
        margin: 20
      }}>

      </View>
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

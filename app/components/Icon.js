import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = ({
  name,
  size = 40,
  backgroundColor = "#000000",
  iconColor = "#ffffff",
}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor, // if the key and it's value are same, remove the value and that give you same like before.
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
};

export default Icon;

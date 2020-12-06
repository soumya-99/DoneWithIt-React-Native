import React from "react";
import { Text } from "react-native";

import defaultStyles from "../config/styles"

//We can use <Heading/> component
const AppText = ({ children, style, ...otherProps }) => {
  return <Text style={[defaultStyles.text, style]} {...otherProps}>{children}</Text>;
};

export default AppText;

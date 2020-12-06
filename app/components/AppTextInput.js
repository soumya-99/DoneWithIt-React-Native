import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles"

const AppTextInput = ({ icon, ...otherProps }) => {
	return (
		<View style={styles.container}>
			{icon && <MaterialCommunityIcons name={icon} size={26} color={defaultStyles.colors.mediumGrey} style={styles.icon} />}
			<TextInput placeholderTextColor={defaultStyles.colors.mediumGrey} {...otherProps} style={defaultStyles.text} />
		</View>
	);
};

export default AppTextInput;

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaultStyles.colors.lightGrey,
		borderRadius: 25,
		flexDirection: "row",
		width: "100%",
		padding: 15,
		marginVertical: 10,
	},
    icon: {
        marginRight: 10
    }
});

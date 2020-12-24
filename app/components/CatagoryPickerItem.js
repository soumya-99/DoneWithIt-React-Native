import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import AppText from "./AppText";
import Icon from "./Icon";

const CatagoryPickerItem = ({ item, onPress }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={onPress}>
				<Icon
					backgroundColor={item.backgroundColor}
					name={item.icon}
					size={80}
				/>
			</TouchableOpacity>
			<AppText style={styles.label}>{item.label}</AppText>
		</View>
	);
};

export default CatagoryPickerItem;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 25.5,
		paddingVertical: 15,
		alignItems: "center",
	},
	label: {
		marginTop: 5,
		textAlign: "center",
	},
});

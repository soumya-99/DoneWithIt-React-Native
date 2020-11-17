import React, { Fragment, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableWithoutFeedback,
	Modal,
	Button,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import Screen from "./Screen";

const AppTextInput = ({ icon, placeholder, ...otherProps }) => {
	const [modalVisible, setModalVisible] = useState(false)
	return (
		<>

			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<View style={styles.container}>
					{icon && (
						<MaterialCommunityIcons
							name={icon}
							size={26}
							color={defaultStyles.colors.mediumGrey}
							style={styles.icon}
						/>
					)}
					<AppText style={styles.text}>{placeholder}</AppText>
					<MaterialCommunityIcons
						name="chevron-down"
						size={26}
						color={defaultStyles.colors.mediumGrey}
					/>
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={modalVisible} animationType="slide">
				<Screen>
				<Button title="Close" onPress={() => setModalVisible(false)} />
				</Screen>
			</Modal>
		</>
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
		marginRight: 10,
	},
	text: {
		flex: 1,
	},
});

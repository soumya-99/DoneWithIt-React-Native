import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import AppText from "./AppText";

const ListItem = ({
	title,
	image,
	subTitle,
	onPress,
	renderRightActions,
	IconComponent,
}) => {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableOpacity onPress={onPress}>
				<View style={styles.container}>
					{IconComponent}
					{image && <Image style={styles.image} source={image} />}
					<View style={styles.detailsContainer}>
						<AppText style={styles.title} numberOfLines={1}>{title}</AppText>
						{subTitle && <AppText numberOfLines={2} style={styles.subTitle}>{subTitle}</AppText>}
					</View>
          <MaterialCommunityIcons color={colors.mediumGrey} name="chevron-right" size={25} />
				</View>
			</TouchableOpacity>
		</Swipeable>
	);
};

export default ListItem;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: 15,
    backgroundColor: colors.white,
    alignItems: "center"
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
		marginRight: 10,
	},
	title: {
		fontWeight: "bold",
	},
	subTitle: {
		color: colors.mediumGrey,
	},
	detailsContainer: {
		marginLeft: 10,
    justifyContent: "center",
    flex: 1,
	},
});

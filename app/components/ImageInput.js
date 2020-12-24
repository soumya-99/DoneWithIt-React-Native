import React, { useEffect } from "react";
import {
	Image,
	StyleSheet,
	View,
	TouchableWithoutFeedback,
	Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";

const ImageInput = ({ imageUri, onChangeImage }) => {
	const requestPermission = async () => {
		const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
		if (!granted) {
			alert("You need to enable access");
		}
	};
	useEffect(() => {
		requestPermission();
	}, []);

	const handlePress = () => {
		if (!imageUri) {
			//to upload image
			selectImage();
		} else {
			//for deleting uploaded images
			Alert.alert("Delete", "Are you sure you want to delete this image?", [
				{
					text: "Yes",
					onPress: () => onChangeImage(null),
				},
				{
					text: "No",
				},
			]);
		}
	};

	const selectImage = async () => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				quality: 0.5,
			});
			if (!result.cancelled) {
				onChangeImage(result.uri);
			}
		} catch (error) {
			console.log("Error reading an image");
		}
	};
	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<View style={styles.container}>
				{!imageUri && (
					<MaterialCommunityIcons
						name="camera"
						size={40}
						color={colors.mediumGrey}
					/>
				)}
				{imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
			</View>
		</TouchableWithoutFeedback>
	);
};

export default ImageInput;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.lightGrey,
		borderRadius: 15,
		justifyContent: "center",
		alignItems: "center",
		height: 100,
		width: 100,
		overflow: "hidden",
	},
	image: {
		width: "100%",
		height: "100%",
	},
});

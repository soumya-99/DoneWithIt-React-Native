import React, { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
// import * as Permissions from "expo-permissions";

import Screen from "./app/components/Screen";

export default function App() {
	const requestPermission = async () => {
		const result = await ImagePicker.requestCameraRollPermissionsAsync();
		if(!result.granted) {
			alert("You need to enable access")
		}
	};

	useEffect(() => {
		requestPermission();
	}, []);

	return <Screen></Screen>;
}

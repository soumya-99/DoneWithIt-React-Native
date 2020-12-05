import React, { useState } from "react";
import { Text, TextInput, Switch } from "react-native";

import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";


export default function App() {

	return (
		<Screen>
			<ListingEditScreen />
		</Screen>
	);
}

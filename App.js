import React, { useState } from "react";
import { Text, TextInput, Switch } from "react-native";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";
import AppPicker from "./app/components/AppPicker";

export default function App() {
	const [isNew, setIsNew] = useState(false);

	return (
		<Screen>
			<AppPicker icon="apps" placeholder="Category" />
			<AppTextInput icon="email" placeholder="Email" />
		</Screen>
	);
}

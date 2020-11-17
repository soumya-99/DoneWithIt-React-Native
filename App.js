import React, { useState } from "react";
import { Text, TextInput, Switch } from "react-native";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";
import AppPicker from "./app/components/AppPicker";

const catagories = [
	{ label: "Furniture", value: 1 },
	{ label: "Clothing", value: 2 },
	{ label: "Cameras", value: 3 },
];

export default function App() {
	const [isNew, setIsNew] = useState(false);
	const [catagory, setCatagory] = useState(catagories[0]);

	return (
		<Screen>
			<AppPicker
				selectedItem={catagory}
				onSelectItem={(item) => setCatagory(item)}
				items={catagories}
				icon="apps"
				placeholder="Category"
			/>
			<AppTextInput icon="email" placeholder="Email" />
		</Screen>
	);
}

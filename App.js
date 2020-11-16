import React, { useState } from "react";
import { Text, TextInput } from "react-native";
import Screen from "./app/components/Screen";

export default function App() {
  const [firstName, setFirstName] = useState("");
  console.log(firstName);

	return (
		<Screen>
    <Text>{firstName}</Text>
			<TextInput
				onChange={(e) => setFirstName(e.target.value)}
				placeholder="First Name"
				style={{
					borderBottomColor: "#ccc",
					borderBottomWidth: 1,
				}}
			/>
		</Screen>
	);
}

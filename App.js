import React from "react";

import Screen from "./app/components/Screen";
import MessagesScreen from "./app/screens/MessagesScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {

	return (
		<Screen>
			{/* <WelcomeScreen /> */}
			<MessagesScreen />
		</Screen>
	);
}

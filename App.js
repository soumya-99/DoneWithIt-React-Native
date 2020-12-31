import React from "react";
import { Button, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import Screen from "./app/components/Screen";

const Link = () => {
	const navigation = useNavigation();
	return (
		<Button title="Click" onPress={() => navigation.navigate("TweetDetails")} />
	);
};

const Tweets = ({ navigation }) => (
	<Screen>
		<Text>Tweets</Text>
		<Button
			title="View Tweets"
			onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
		/>
	</Screen>
);

const TweetDetails = ({ route }) => (
	<Screen>
		<Text>Tweet Details {route.params.id}</Text>
	</Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen name="Tweets" component={Tweets} />
		<Stack.Screen
			name="TweetDetails"
			component={TweetDetails}
			options={({route}) => ({ title: route.params.id })}
		/>
	</Stack.Navigator>
);

export default function App() {
	return (
		<NavigationContainer>
			<StackNavigator />
		</NavigationContainer>
	);
}

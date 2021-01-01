import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
	<Stack.Navigator mode="modal">
		<Stack.Screen name="Listings" component={ListingsScreen} />
		<Stack.Screen
			name="ListingDetails"
			component={ListingDetailsScreen}
			options={{ headerShown: false }}
		/>
	</Stack.Navigator>
);

export default FeedNavigator;

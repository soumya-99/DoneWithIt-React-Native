import React, { useState } from "react";
import { FlatList } from "react-native";

import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

const initialMessages = [
	{
		id: 1,
		title: "The above is a Snack Player. It’s a handy tool created by Expo to embed and run React Native projects and share how they render in platforms like Android and iOS. The code is live and editable, so you can play directly with it in your browser. Go ahead and try changing the",
		description: "The above is a Snack Player. It’s a handy tool created by Expo to embed and run React Native projects and share how they render in platforms like Android and iOS. The code is live and editable, so you can play directly with it in your browser. Go ahead and try changing the",
		image: require("../assets/mosh.jpg"),
	},
	{
		id: 2,
		title: "The above is a Snack Player. It’s a handy tool created by Expo to embed and run React Native projects and share how they render in platforms like Android and iOS. The code is live and editable, so you can play directly with it in your browser. Go ahead and try changing the",
		description: "The above is a Snack Player. It’s a handy tool created by Expo to embed and run React Native projects and share how they render in platforms like Android and iOS. The code is live and editable, so you can play directly with it in your browser. Go ahead and try changing the",
		image: require("../assets/mosh.jpg"),
	},
];

const MessagesScreen = () => {
	const [refresh, setRefresh] = useState(false);
	const [messages, setMessages] = useState(initialMessages);
	const handleDelete = (message) => {
		//delete message from, messages
		setMessages(messages.filter((m) => m.id !== message.id));
		// Call The server
	};
	return (
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={(message) => message.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						subTitle={item.description}
						image={item.image}
						onPress={() => console.log("Message Selected", item)}
						renderRightActions={() => (
							<ListItemDeleteAction onPress={() => handleDelete(item)} />
						)}
					/>
				)}
				ItemSeparatorComponent={ListItemSeparator}
				refreshing={refresh}
				onRefresh={() =>
					setMessages([
						{
							id: 2,
							title: "T2",
							description: "D2",
							image: require("../assets/mosh.jpg"),
						},
					])
				}
			/>
		</Screen>
	);
};

export default MessagesScreen;

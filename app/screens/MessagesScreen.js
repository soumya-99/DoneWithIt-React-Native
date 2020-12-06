import React, { useState } from "react";
import { FlatList } from "react-native";

import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

const initialMessages = [
	{
		id: 1,
		title: "T1",
		description: "D1",
		image: require("../assets/mosh.jpg"),
	},
	{
		id: 2,
		title: "T2",
		description: "D2",
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

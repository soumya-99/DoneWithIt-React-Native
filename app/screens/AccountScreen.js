import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Icon from "../components/Icon";

import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import colors from "../config/colors";

const manyItems = [
	{
		title: "My listings",
		icon: {
			name: "format-list-bulleted",
			backgroundColor: colors.primary,
		},
	},
	{
		title: "My Messages",
		icon: {
			name: "email",
			backgroundColor: colors.secondary,
		},
	},
];

const AccountScreen = () => {
	return (
		<Screen style={styles.screen}>
			<View style={styles.container}>
				<ListItem
					title="Soumyadeep Mondal"
					subTitle="soumyadeep891079@gmail.com"
					image={require("../assets/mosh.jpg")}
				/>
			</View>
			<View style={styles.container}>
				<FlatList
					data={manyItems}
					keyExtractor={(menuItem) => menuItem.title}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							IconComponent={
								<Icon
									name={item.icon.name}
									backgroundColor={item.icon.backgroundColor}
								/>
							}
						/>
					)}
					ItemSeparatorComponent={ListItemSeparator}
				/>
			</View>

			<ListItem
				title="Log Out"
				IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
			/>
		</Screen>
	);
};

export default AccountScreen;

const styles = StyleSheet.create({
	container: {
		marginVertical: 15,
	},
	screen: {
		backgroundColor: colors.lightGrey,
	},
});

import React from "react";
import { StyleSheet, View, Image } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

const ListingDetailsScreen = ({ route }) => {
	const listing = route.params;
	return (
		<View>
			<Image style={styles.image} source={listing.image} />
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>{listing.title}</AppText>
				<AppText style={styles.price}>${listing.price}</AppText>
			</View>
			<View style={styles.userContainer}>
				<ListItem
					image={require("../assets/mosh.jpg")}
					title="Soumyadeep Mondal"
					subTitle="5 Listings"
				/>
			</View>
		</View>
	);
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: 300,
	},
	detailsContainer: {
		padding: 20,
	},
	price: {
		color: colors.secondary,
		fontWeight: "bold",
		fontSize: 20,
		marginVertical: 10,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
	},
	userContainer: {
		marginVertical: 40,
		padding: 20,
	},
});

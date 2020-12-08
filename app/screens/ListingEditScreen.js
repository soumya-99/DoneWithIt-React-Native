import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import CatagoryPickerItem from "../components/CatagoryPickerItem";

import {
	AppForm as Form,
	AppFormField as FormField,
	AppFormPicker as Picker,
	SubmitButton,
} from "../components/forms";
import FormImagePicker from "../components/forms/FormImagePicker";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).label("Title"),
	price: Yup.number().required().min(1).max(10000).label("Price"),
	description: Yup.string().label("Description"),
	category: Yup.object().required().nullable().label("Category"),
	images: Yup.array().required().min(1, "Please select atlease 1 image"),
});

const categories = [
	{ label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
	{ label: "Clothing", value: 2, backgroundColor: "green", icon: "email" },
	{ label: "Camera", value: 3, backgroundColor: "blue", icon: "lock" },
	{ label: "Clothing", value: 4, backgroundColor: "green", icon: "email" },
	{ label: "Camera", value: 5, backgroundColor: "teal", icon: "lock" },
	{ label: "Camera", value: 6, backgroundColor: "violet", icon: "lock" },
	{ label: "Camera", value: 7, backgroundColor: "forestgreen", icon: "lock" },
	{ label: "Camera", value: 8, backgroundColor: "orange", icon: "lock" },
	{ label: "Camera", value: 9, backgroundColor: "pink", icon: "lock" },
];

function ListingEditScreen() {
	return (
		<Screen style={styles.container}>
			<Form
				initialValues={{
					title: "",
					price: "",
					description: "",
					category: null,
					images: [],
				}}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				<FormImagePicker name="images" />
				<FormField maxLength={255} name="title" placeholder="Title" />
				<FormField
					keyboardType="numeric"
					maxLength={8}
					name="price"
					placeholder="Price"
					width={120}
				/>
				<Picker
					items={categories}
					name="category"
					numberOfColumns={3}
					placeholder="Category"
					width="50%"
					PickerItemComponent={CatagoryPickerItem}
				/>
				<FormField
					maxLength={255}
					multiline
					name="description"
					numberOfLines={3}
					placeholder="Description"
				/>
				<SubmitButton title="Post" />
			</Form>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
});
export default ListingEditScreen;

import React from "react";
import { Image, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import ErrorMessage from "../components/ErrorMessage";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";
import AppForm from "../components/AppForm";

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
	return (
		<Screen style={styles.container}>
			<Image style={styles.logo} source={require("../assets/logo-red.png")} />
			<AppForm
				initialValues={{ email: "", password: "" }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				<AppFormField
					placeholder="Email"
					icon="email"
					autoCapitalize="none"
					autoCorrect={false}
					keyboardType="email-address"
					textContentType="emailAddress"
					name="email"
				/>
				<AppFormField
					autoCapitalize="none"
					placeholder="Password"
					autoCorrect={false}
					icon="lock"
					textContentType="password"
					secureTextEntry
					name="password"
				/>
				<SubmitButton title="Login" />
			</AppForm>
		</Screen>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	logo: {
		width: 80,
		height: 80,
		alignSelf: "center",
		margin: 50,
		marginBottom: 20,
	},
	container: {
		padding: 10,
	},
});

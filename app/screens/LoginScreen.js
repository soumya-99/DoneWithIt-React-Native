import React from "react";
import { Image, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
	return (
		<Screen style={styles.container}>
			<Image style={styles.logo} source={require("../assets/logo-red.png")} />
			<Formik
				initialValues={{ email: "", password: "" }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				{({ handleChange, handleSubmit, errors }) => (
					<>
						<AppTextInput
							placeholder="Email"
							icon="email"
							autoCapitalize="none"
							autoCorrect={false}
							keyboardType="email-address"
							textContentType="emailAddress"
							onChangeText={handleChange("email")}
						/>
						<AppText style={{ color: "red" }}>{errors.email}</AppText>
						<AppTextInput
							autoCapitalize="none"
							placeholder="Password"
							autoCorrect={false}
							icon="lock"
							textContentType="password"
							secureTextEntry
							onChangeText={handleChange("password")}
						/>
                        <AppText style={{ color: "red" }}>{errors.password}</AppText>
						<AppButton title="Login" onPress={handleSubmit} />
					</>
				)}
			</Formik>
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

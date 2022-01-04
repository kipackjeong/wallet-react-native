import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Provider, useDispatch } from "react-redux";

import configureStore from "./redux/store/store";
import Layout from "./components/UI/Layout";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainContainer from "./redux/containers/MainContainer.js";

const App = () => {
	const store = configureStore();

	return (
		<SafeAreaProvider>
			<Provider store={store}>
				<Layout style={styles.app}>
					<StatusBar style="auto" />
					<MainContainer />
				</Layout>
			</Provider>
		</SafeAreaProvider>
	);
};

const styles = StyleSheet.create({
	app: {
		marginTop: 60,
		flex: 1,
	},
});

export default App;

import React, { useMemo } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Image } from "react-native-elements";

const {
	groceryIcon,
	billIcon,
	restaurantIcon,
	transportationIcon,
	educationIcon,
	familyIcon,
	ecommerceIcon,
	giftIcon,
	medicalIcon,
} = require("../../../../../assets/icons/icons.js");

const CategoryCanvas = ({ selectedCategory, setSelectedCategory }) => {
	const categories = [
		{ title: "Grocery", image: groceryIcon },
		{ title: "Bill", image: billIcon },
		{ title: "Restaurant", image: restaurantIcon },
		{ title: "Transporation", image: transportationIcon },
		{ title: "Education", image: educationIcon },
		{ title: "Family", image: familyIcon },
		{ title: "E-Commerce", image: ecommerceIcon },
		{ title: "Gift", image: giftIcon },
		{ title: "Medical", image: medicalIcon },
	];

	function categoryIconOnPressHandler(category) {
		setSelectedCategory(category);
	}

	const selectedCategoryStyle = useMemo(() => {
		return { borderWidth: 1, borderColor: "aqua", shadowColor: "aqua" };
	}, []);

	// if selectedCategory is not null and it's title is equal to the current rendering category -> True
	const findOutIfSelected = (category) => {
		return (
			selectedCategory != null && selectedCategory.title == category.title
		);
	};

	const categoriesDisplay = categories
		.reduce((accumulator, current, currentIndex, array) => {
			if (currentIndex % 2 === 0)
				accumulator.push(array.slice(currentIndex, currentIndex + 2));
			return accumulator;
		}, [])
		.map((categoriesPair) => {
			const up = categoriesPair[0];
			const down = categoriesPair[1];

			return down ? (
				<>
					<View
						style={[
							styles.categoryImgContainer,
							findOutIfSelected(up) ? selectedCategoryStyle : {},
						]}
					>
						<Image
							source={up.image}
							onPress={() => {
								categoryIconOnPressHandler(up);
							}}
							style={{ width: 32, height: 32 }}
						/>
					</View>
					<View
						style={[
							styles.categoryImgContainer,
							findOutIfSelected(down)
								? selectedCategoryStyle
								: {},
						]}
					>
						<Image
							source={down.image}
							onPress={() => {
								categoryIconOnPressHandler(down);
							}}
							style={{ width: 32, height: 32 }}
						/>
					</View>
				</>
			) : (
				<View
					style={[
						styles.categoryImgContainer,
						findOutIfSelected(up) ? selectedCategoryStyle : {},
					]}
				>
					<Image
						source={up.image}
						onPress={() => {
							categoryIconOnPressHandler(up);
						}}
						style={{ width: 32, height: 32 }}
					/>
				</View>
			);
		});

	return (
		<ScrollView
			showsHorizontalScrollIndicator={false}
			horizontal={true}
			scrollToOverflowEnabled={true}
			contentContainerStyle={{}}
			keyboardShouldPersistTaps="handled"
		>
			<View
				style={{
					width: 300,
					flexDirection: "row",
					flexWrap: "wrap",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{categoriesDisplay}
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	categoryImgContainer: {
		height: 60,
		width: 60,
		marginHorizontal: 2,
		justifyContent: "center",
		alignItems: "center",
		elevation: 2,
		zIndex: 5,
	},
});

export default CategoryCanvas;

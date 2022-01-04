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
} = require("../../../../../../../assets/icons/icons.js");

const CategoryCanvas = ({ selectedCategory, onCategorySelected }) => {
	const categories = [
		{ id: "1ashglw1", title: "Grocery", image: groceryIcon },
		{ id: "1ashglw2", title: "Bill", image: billIcon },
		{ id: "1ashglw3", title: "Restaurant", image: restaurantIcon },
		{ id: "1ashglw4", title: "Transporation", image: transportationIcon },
		{ id: "1ashglw5", title: "Education", image: educationIcon },
		{ id: "1ashglw6", title: "Family", image: familyIcon },
		{ id: "1ashglw7", title: "E-Commerce", image: ecommerceIcon },
		{ id: "1ashglw8", title: "Gift", image: giftIcon },
		{ id: "1ashglw9", title: "Medical", image: medicalIcon },
	];

	function categoryIconOnPressHandler(category) {
		onCategorySelected(category);
	}

	const selectedCategoryStyle = useMemo(() => {
		return {
			borderWidth: 1,
			borderColor: "#13eb77",
			shadowColor: "#13eb77",
		};
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
		.map((categoriesPair, i) => {
			const up = categoriesPair[0];
			const down = categoriesPair[1];

			return down ? (
				<>
					<View
						key={up.id}
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
						key={down.id}
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
					key={up.id}
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
	},
});

export default CategoryCanvas;

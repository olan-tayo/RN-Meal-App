import { View, FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";

const CategoriesScreen = ({ navigation }) => {
  const handleRenderCategories = (itemData) => {
    const handlePress = () => {
      navigation.navigate("MealsOverview", {
        id: itemData?.item?.id,
      });
    };

    return (
      <CategoryGridTitle
        onPress={handlePress}
        title={itemData?.item?.title}
        color={itemData?.item?.color}
      />
    );
  };
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item?.id}
        renderItem={handleRenderCategories}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;

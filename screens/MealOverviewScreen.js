import { View, FlatList, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

const MealOverviewScreen = ({ navigation }) => {
  const route = useRoute();

  const id = route.params.id;

  const displayedmeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(id) >= 0;
  });

  const handleRenderMealItem = (itemData) => {
    const data = itemData?.item;
    const mealItemProps = {
      id: data?.id,
      title: data?.title,
      imageUrl: data?.imageUrl,
      affordability: data?.affordability,
      complexity: data?.complexity,
      duration: data?.duration,
    };

    const handleNavigate = (id) => {
      navigation.navigate("MealCategory", {
        id: data.id,
      });
    };

    return (
      <MealItem
        onPress={handleNavigate}
        title={mealItemProps?.title}
        imageURL={mealItemProps?.imageUrl}
        affordability={mealItemProps?.affordability}
        duration={mealItemProps?.duration}
        complexity={mealItemProps?.complexity}
      />
    );
  };

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === id
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [id, navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedmeals}
        keyExtractor={(item) => item?.id}
        renderItem={handleRenderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealOverviewScreen;

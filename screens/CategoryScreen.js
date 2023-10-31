import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import IconButton from "../components/IconButton";

const CategoryScreen = ({ route, navigation }) => {
  const id = route.params.id;
  const selectedMeal = MEALS.find((meal) => meal.id === id);

  const handleTapMe = () => {};

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton icon="star" color="white" onPress={handleTapMe} />;
      },
    });
  }, [navigation, handleTapMe]);

  return (
    <ScrollView style={styles.root}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal?.duration}
        affordability={selectedMeal?.affordability}
        complexity={selectedMeal?.complexity}
        textStyle={styles.detailText}
      />
      <View style={styles.outterContainer}>
        <View style={styles.listContainer}>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Ingredients:</Text>
          </View>
          {selectedMeal.ingredients.map((ingredient) => (
            <View style={styles.listItem} key={ingredient}>
              <Text style={styles.itemText}>{ingredient}</Text>
            </View>
          ))}
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Steps:</Text>
          </View>
          {selectedMeal.steps.map((step) => (
            <View style={styles.listItem} key={step}>
              <Text style={styles.itemText}>{step}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 12,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  subtitle: {
    color: "#351401",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    borderBottomColor: "#351401",
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
  listContainer: {
    width: "80%",
  },
  outterContainer: {
    alignItems: "center",
  },
});

export default CategoryScreen;

import { Pressable, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ onPress, icon, color }) => {
  return (
    <Pressable style={(pressed) => pressed && styles.pressed} onPress={onPress}>
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
export default IconButton;

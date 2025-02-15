import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  atividade: string;
  isCompleted: string;
  onToggleComplete: () => void;
  onRemove: () => void;
}

export function Atividade({ atividade, isCompleted, onToggleComplete, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onToggleComplete} style={styles.textContainer}>
        <Text style={[styles.text, isCompleted && styles.completedText]}>
          {atividade}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onRemove}>
        <Ionicons name="trash-outline" size={20} color="#ff5555" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#262626",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#808080",
  },
});

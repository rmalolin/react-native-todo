import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const Note = ({ note }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{note.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 15,
    marginBottom: 10,
    backgroundColor: "#000",
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
});

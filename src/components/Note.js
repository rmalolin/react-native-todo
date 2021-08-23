import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export const Note = ({ note, onRemove }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onLongPress={() => onRemove(note.id)}>
      <View style={styles.container}>
        <Text style={styles.text}>{note.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 2,
    borderColor: "#9bb7d0",
    borderRadius: 15,
    marginBottom: 10,
    backgroundColor: "#294257",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
});

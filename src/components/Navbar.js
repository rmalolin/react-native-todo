import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Navbar = ({ title }) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#2e4a62",
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderColor: "#000",
  },
  text: {
    color: "#fff",
    fontSize: 24,
  },
});

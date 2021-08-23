import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Navbar } from "./src/components/Navbar";
import { AddNote } from "./src/components/AddNote";
import { Note } from "./src/components/Note";

export default function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (title) => {
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };

  return (
    <View>
      <Navbar title="Note App" />
      <View style={styles.container}>
        <AddNote onSubmit={addNote} />
        <View>
          {notes.map((note) => (
            <Note note={note} key={note.id} />
          ))}
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});

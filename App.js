import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Navbar } from "./src/components/Navbar";
import { AddNote } from "./src/components/AddNote";
import { Note } from "./src/components/Note";

export default function App() {
  const [notes, setNotes] = useState([
    { id: "1", title: "Short note" },
    {
      id: "2",
      title:
        "Long note. The year of 1998 was announced by UNESCO the Year of Pushkin. In this way the mankind paid tribute to the genius of the Russian literature in commemoration of his 200th anniversary, which was celebrated world wide in June 1999",
    },
    { id: "3", title: "Press the note for a few seconds and its gone" },
  ]);

  const addNote = (title) => {
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };

  const removeNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <View>
      <Navbar title="Note App" />
      <View style={styles.container}>
        <AddNote onSubmit={addNote} />
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={notes}
          renderItem={({ item }) => <Note note={item} onRemove={removeNote} />}
        />
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

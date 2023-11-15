import { useState } from "react";
import NavBar from "./components/NavBar";
import NotesGrid from "./components/NotesGrid";
import NotesForm from "./components/NotesForms";
import { Grid, GridItem } from "@chakra-ui/react";
import { Note } from "./utils";
import initialData from "./utils";

const App = () => {
  const [notes, setNotes] = useState<Note[]>(initialData);

  const handleAddNotes = (note: Note) => {
    setNotes((notes) => [
      ...notes,
      { ...note, createdAt: new Date().toISOString() },
    ]);
  };

  const handleDeleteNote = (id: number) => {
    setNotes((notes) => notes.filter((note) => note.id !== id));
  };

  const handleArchiveNote = (id: number) => {
    setNotes((notes) =>
      notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  return (
    <Grid templateAreas={`"nav" "main"`}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem area="main">
        <NotesForm onAddNotes={handleAddNotes} />
        <NotesGrid
          notes={notes}
          onDeleteNote={handleDeleteNote}
          onArchiveNote={handleArchiveNote}
        />
      </GridItem>
    </Grid>
  );
};

export default App;

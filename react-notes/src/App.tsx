import { useState } from "react";
import NavBar from "./components/NavBar";
import NotesGrid from "./components/NotesGrid";
import NotesForm from "./components/NotesForms";
import { Grid, GridItem } from "@chakra-ui/react";
import { Note } from "./utils";

const App = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const handleAddNotes = (note: Note) => {
    setNotes((prevNotes) => [
      ...prevNotes,
      { ...note, createdAt: new Date().toISOString() },
    ]);
  };
  return (
    <Grid templateAreas={`"nav" "main"`}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem area="main">
        <NotesForm onAddNotes={handleAddNotes} />
        <NotesGrid notes={notes} />
      </GridItem>
    </Grid>
  );
};

export default App;

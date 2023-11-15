import NavBar from "./components/NavBar";
import NotesGrid from "./components/NotesGrid";
import NotesForm from "./components/NotesForms";
import { Grid, GridItem } from "@chakra-ui/react";
import initialData from "./utils";

const App = () => {
  const handleNewItem = {};
  return (
    <Grid templateAreas={`"nav" "main"`}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem area="main">
        <NotesForm />
        <NotesGrid notes={initialData} />
      </GridItem>
    </Grid>
  );
};

export default App;

import { SimpleGrid } from "@chakra-ui/react";
import NotesCard from "./NotesCard";
import { Note } from "../utils";

interface NotesGridProps {
  notes: Note[];
  onDeleteNote: (id: number) => void;
}

const NotesGrid = ({ notes, onDeleteNote }: NotesGridProps) => {
  return (
    <SimpleGrid
      spacing={4}
      padding={5}
      templateColumns="repeat(auto-fill, minmax(400px, 1fr))"
    >
      {notes.map((note) => (
        <NotesCard key={note.id} data={note} onDeleteNote={onDeleteNote} />
      ))}
    </SimpleGrid>
  );
};

export default NotesGrid;

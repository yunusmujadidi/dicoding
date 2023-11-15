import { SimpleGrid } from "@chakra-ui/react";
import NotesCard from "./NotesCard";
import { Props } from "../utils";

interface NotesGridProps {
  notes: Props[];
}

const NotesGrid = ({ notes }: NotesGridProps) => {
  return (
    <SimpleGrid
      spacing={4}
      padding={5}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
    >
      {notes.map((note) => (
        <NotesCard key={note.id} data={note} />
      ))}
    </SimpleGrid>
  );
};

export default NotesGrid;

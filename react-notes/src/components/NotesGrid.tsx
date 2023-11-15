import { SimpleGrid, Button, Heading } from "@chakra-ui/react";
import NotesCard from "./NotesCard";
import { Note } from "../utils";
import { useState } from "react";

interface NotesGridProps {
  notes: Note[];
  onDeleteNote: (id: number) => void;
  onArchiveNote: (id: number) => void;
}

const NotesGrid = ({ notes, onDeleteNote, onArchiveNote }: NotesGridProps) => {
  const [showArchived, setShowArchived] = useState(false);
  const archivedNotes = notes.filter((note) => note.archived);
  const unarchivedNotes = notes.filter((note) => !note.archived);

  return (
    <div>
      <Heading as="h2" size="md" marginBottom={3}>
        {showArchived ? "Archived Notes" : "Notes"}
      </Heading>
      {unarchivedNotes.length === 0 && !showArchived && (
        <div>Tidak ada catatan</div>
      )}
      {showArchived && archivedNotes.length === 0 && (
        <div>Tidak ada arsip catatan</div>
      )}
      <SimpleGrid
        spacing={4}
        padding={5}
        templateColumns="repeat(auto-fill, minmax(400px, 1fr))"
      >
        {showArchived
          ? archivedNotes.map((note) => (
              <NotesCard
                key={note.id}
                data={note}
                onDeleteNote={onDeleteNote}
                onArchiveNote={onArchiveNote}
              />
            ))
          : unarchivedNotes.map((note) => (
              <NotesCard
                key={note.id}
                data={note}
                onDeleteNote={onDeleteNote}
                onArchiveNote={onArchiveNote}
              />
            ))}
      </SimpleGrid>
      <div>
        <Button margin={3} onClick={() => setShowArchived(!showArchived)}>
          {showArchived ? "Unarchived Notes" : "Archived Notes"}
        </Button>
      </div>
    </div>
  );
};

export default NotesGrid;

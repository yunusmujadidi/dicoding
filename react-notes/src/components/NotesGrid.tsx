import { SimpleGrid, Heading, Input } from "@chakra-ui/react";
import NotesCard from "./NotesCard";
import { Note } from "../utils";
import { useState } from "react";

interface NotesGridProps {
  notes: Note[];
  onDeleteNote: (id: number) => void;
  onArchiveNote: (id: number) => void;
}

const NotesGrid = ({ notes, onDeleteNote, onArchiveNote }: NotesGridProps) => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const archivedNotes = notes.filter((note) => note.archived);
  const unarchivedNotes = notes.filter((note) => !note.archived);

  const filteredUnarchivedNotes = searchKeyword
    ? unarchivedNotes.filter((note) =>
        note.title.toLowerCase().includes(searchKeyword.toLowerCase())
      )
    : unarchivedNotes;

  const filteredArchivedNotes = searchKeyword
    ? archivedNotes.filter((note) =>
        note.title.toLowerCase().includes(searchKeyword.toLowerCase())
      )
    : archivedNotes;

  return (
    <>
      <Input
        placeholder="Search notes"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
        margin={3}
      />
      {filteredUnarchivedNotes.length !== 0 && (
        <>
          <Heading fontWeight="semibold" size="xl" margin={3}>
            Notes
          </Heading>
          <SimpleGrid
            spacing={4}
            padding={5}
            templateColumns="repeat(auto-fill, minmax(400px, 1fr))"
          >
            {filteredUnarchivedNotes.map((note) => (
              <NotesCard
                key={note.id}
                data={note}
                onDeleteNote={onDeleteNote}
                onArchiveNote={onArchiveNote}
              />
            ))}
          </SimpleGrid>
        </>
      )}
      {filteredArchivedNotes.length !== 0 && (
        <>
          <Heading fontWeight="semibold" size="xl" margin={3}>
            Archived Notes
          </Heading>
          <SimpleGrid
            spacing={4}
            padding={5}
            templateColumns="repeat(auto-fill, minmax(400px, 1fr))"
          >
            {filteredArchivedNotes.map((note) => (
              <NotesCard
                key={note.id}
                data={note}
                onDeleteNote={onDeleteNote}
                onArchiveNote={onArchiveNote}
              />
            ))}
          </SimpleGrid>
        </>
      )}
      {filteredUnarchivedNotes.length === 0 && (
        <div>
          {filteredArchivedNotes.length === 0 ? (
            <div>No notes found</div>
          ) : (
            <div>No unarchived notes found</div>
          )}
        </div>
      )}
      {filteredUnarchivedNotes.length !== 0 &&
        filteredArchivedNotes.length === 0 && (
          <div>No archived notes found</div>
        )}
    </>
  );
};

export default NotesGrid;

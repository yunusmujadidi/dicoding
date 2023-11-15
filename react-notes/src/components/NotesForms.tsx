import { Button, Heading, Input, Stack, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { Note } from "../utils";

const NotesForms = ({ onAddNotes }: { onAddNotes: (note: Note) => void }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title) {
      return;
    }

    const newNotes = {
      id: Date.now(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    onAddNotes(newNotes);
    console.log(newNotes);
    setTitle("");
    setBody("");
  };

  return (
    <>
      <Heading padding={3}>New Notes</Heading>
      <form className="addform" onSubmit={handleSubmit}>
        <Stack spacing={3} marginTop={5} padding={3}>
          <Input
            placeholder="Judul"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <Textarea
            placeholder="Notes..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </>
  );
};

export default NotesForms;

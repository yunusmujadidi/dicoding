import { Button, Heading, Input, Stack, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { Note } from "../utils";

const NotesForms = ({ onAddNotes }: { onAddNotes: (note: Note) => void }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [remainingChars, setRemainingChars] = useState(50);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || title.length > 50) {
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
    setRemainingChars(50);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTitle(value);
    setRemainingChars(50 - value.length);
  };

  return (
    <>
      <Heading size="lg" padding={3}>
        New Notes
      </Heading>
      <form className="addform" onSubmit={handleSubmit}>
        <Stack spacing={3} marginTop={5} padding={3}>
          <Input
            placeholder="Judul"
            type="text"
            value={title}
            onChange={handleTitleChange}
            maxLength={50}
          />
          <div>Jumlah karakter tersisa: {remainingChars}</div>
          <Textarea
            placeholder="Notes..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
            height={300}
          />
          <Button width={100} type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default NotesForms;

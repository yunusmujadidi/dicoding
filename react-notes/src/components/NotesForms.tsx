import { Button, Heading, Input, Stack, Textarea } from "@chakra-ui/react";
import { useState } from "react";

const NotesForms = () => {
  const [notes, setNotes] = useState([]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [archived, setArchived] = useState(false);
  const [id, setId] = useState(Date.now());

  const handleSubmit = (e: any) => {
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
    console.log(newNotes);
  };

  return (
    <>
      <Heading padding={3}>New Notes</Heading>
      <form className="addform" onSubmit={handleSubmit}>
        <Stack spacing={3} marginTop={5} padding={3}>
          {" "}
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

import { Heading, Input, Stack, Textarea } from "@chakra-ui/react";
import { useState } from "react";

const NotesForms = () => {
  // const [Title, setTitle] = useState("");

  // function handlesubmit(e)=> {

  // if (!title) {
  //   e.preventDefault();
  //   return;
  // }
  // const newNotes = {
  //   id: Date.now(), title, body, archived, createdAt,

  // }
  // }
  return (
    <>
      <Heading padding={3}>New Notes</Heading>
      <Stack spacing={3} marginTop={5} padding={3}>
        <form className="addform"></form>
        <Input placeholder="Judul" />
        <Textarea placeholder="Here is a sample placeholder" />
      </Stack>
    </>
  );
};

export default NotesForms;

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";

import { Note } from "../utils";

interface NotesCardProps {
  data: Note;
  onDeleteNote: (id: number) => void;
}

const NotesCard = ({ data, onDeleteNote }: NotesCardProps) => {
  return (
    <Card borderRadius={10} width="1000">
      <CardHeader>
        <Heading size="lg"> {data.title}</Heading>
        <Heading size="s"> {data.createdAt}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{data.body}</Text>
      </CardBody>
      <CardFooter justifyContent="space-between">
        <Button onClick={() => onDeleteNote(data.id)}>Remove</Button>
        <Button>Archive</Button>
      </CardFooter>
    </Card>
  );
};

export default NotesCard;

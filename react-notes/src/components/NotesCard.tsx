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
  onArchiveNote: (id: number) => void;
}

const NotesCard = ({ data, onDeleteNote, onArchiveNote }: NotesCardProps) => {
  const formattedDate = new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(data.createdAt));

  return (
    <Card borderRadius={10} width="1000">
      <CardHeader>
        <Heading size="lg"> {data.title}</Heading>
        <Heading size="s">{formattedDate}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{data.body}</Text>
      </CardBody>
      <CardFooter justifyContent="space-between">
        <Button onClick={() => onDeleteNote(data.id)}>Remove</Button>
        <Button onClick={() => onArchiveNote(data.id)}>
          {data.archived ? "Unarchive" : "Archive"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NotesCard;

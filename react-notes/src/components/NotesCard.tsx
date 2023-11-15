import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";

import { Props } from "../utils";

interface NotesCardProps {
  data: Props;
}

const NotesCard = ({ data }: NotesCardProps) => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md"> {data.title}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{data.body}</Text>
      </CardBody>
      <CardFooter>
        <Button>Remove</Button>
      </CardFooter>
    </Card>
  );
};

export default NotesCard;

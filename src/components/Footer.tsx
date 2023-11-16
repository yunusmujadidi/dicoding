import { Text, Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" mt="auto" py={4} textAlign="center">
      <Text fontSize="md">{`© @indomieespicy made with love <3`}</Text>
    </Box>
  );
};

export default Footer;

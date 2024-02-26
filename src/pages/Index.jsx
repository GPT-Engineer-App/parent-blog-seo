import React from "react";
import { Box, Heading, Input, InputGroup, InputRightElement, Stack, Text, VStack, Image, SimpleGrid, Container, Button } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={6} alignItems="flex-start">
        <Heading as="h1" size="2xl">
          Preschool Parenting Insights
        </Heading>
        <Text fontSize="lg">Discover the latest tips, tricks, and trends for parenting preschool-aged children.</Text>
        <InputGroup>
          <Input placeholder="Search trending topics..." />
          <InputRightElement children={<FaSearch />} />
        </InputGroup>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} my={10}>
        <ArticleCard title="Creative Playtime Ideas" excerpt="Engage your preschooler with these innovative and educational playtime activities." />
        <ArticleCard title="Healthy Toddler Snacks" excerpt="Nutritious and delicious snack ideas that your little ones will love." />
        <ArticleCard title="Parenting in a Digital Age" excerpt="Learn how to balance screen time with interactive learning for your preschooler." />
      </SimpleGrid>

      <Box as="section" my={10}>
        <Heading as="h2" size="xl" mb={5}>
          Parenting Tips & Resources
        </Heading>
        <Stack spacing={4}>
          <Text as="p">- How to establish a positive bedtime routine.</Text>
          <Text as="p">- The importance of reading to your child every day.</Text>
          <Text as="p">- Navigating preschooler emotions: A guide for parents.</Text>
          <Button colorScheme="blue">More Parenting Tips</Button>
        </Stack>
      </Box>
    </Container>
  );
};

const ArticleCard = ({ title, excerpt }) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <Heading as="h3" size="md" mb={2}>
        {title}
      </Heading>
      <Text mb={3}>{excerpt}</Text>
      <Button colorScheme="teal" variant="outline">
        Read More
      </Button>
    </Box>
  );
};

export default Index;

import { Heading, HStack, Image, Text, VStack, Card, CardBody, CardFooter, Divider } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const ProjectCard = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  function handleClick() {
    alert("Link to projects coming soon");
  }

  return (
    <Card>
      <CardBody>
      <VStack spacing={6}>
        <Image src={imageSrc} alt={title} />
        <Heading as='h3' size='2xl'>{title}</Heading>
        <Text fontSize='lg'>{description}</Text>
      </VStack>
      </CardBody>
      <Divider />
      <CardFooter>
        <HStack spacing={2} onClick={handleClick} cursor="pointer">
          <Text fontSize='md'>
            See More
          </Text>
          <Text fontSize='md'>  
            <FontAwesomeIcon icon={faArrowRight} />
          </Text>
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;

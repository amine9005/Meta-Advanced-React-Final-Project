import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      style={{
        backgroundColor: "white",
        borderRadius: "1rem",
      }}
    >
      <img
        src={imageSrc}
        style={{
          width: "100%",
          height: "70%",
          borderRadius: "1rem 1rem 0 0",
        }}
      />
      <VStack
        align="left"
        spacing={4}
        style={{
          paddingLeft: ".75rem",
          paddingRight: ".75rem",
        }}
      >
        <Heading
          style={{ color: "black", alignSelf: "left", fontSize: "1.5rem" }}
        >
          {title}
        </Heading>
        <Text style={{ color: "black" }}>{description}</Text>
        <a
          href="#project-link"
          style={{ color: "black", marginBottom: "1.5rem" }}
        >
          See More <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </a>
      </VStack>
    </VStack>
  );
};

export default Card;

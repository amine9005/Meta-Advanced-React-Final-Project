import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={12}>
      <VStack spacing={4}>
        <img
          src="https://i.pravatar.cc/150?img=7"
          alt="avatar"
          style={{ borderRadius: "50%" }}
        />
        <p>{greeting}</p>
      </VStack>
      <VStack spacing={1}>
        <h1 style={{ fontSize: "3rem" }}>{bio1}</h1>
        <h1 style={{ fontSize: "3rem" }}>{bio2}</h1>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;

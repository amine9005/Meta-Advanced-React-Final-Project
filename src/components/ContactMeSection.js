import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  useEffect(() => {
    // console.log("response: " + JSON.stringify(response));
    if (response) {
      const { type, message } = response;
      onOpen(type, message);

      if (type === "success") {
        resetForm();
      }
    }
  }, [response]);

  const { values, errors, handleChange, touched, handleSubmit, resetForm } =
    useFormik({
      initialValues: {
        firstName: "",
        email: "",
        type: "",
        comment: "",
      },
      onSubmit: (values) => {
        submit("", values);
        // console.log("handling Submit");
      },
      validationSchema: Yup.object({
        firstName: Yup.string().required("Required"),
        email: Yup.string().required("Required").email("Invalid email address"),
        type: Yup.string(),
        comment: Yup.string()
          .required("Required")
          .min(25, "Must be at least 25 characters"),
      }),
    });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={errors.firstName && touched.firstName ? true : false}
              >
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                />
                <FormErrorMessage>{errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={errors.email && touched.email ? true : false}
              >
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                  id="type"
                  value={values.type}
                  onChange={handleChange}
                  name="type"
                  style={{ color: "black" }}
                >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl
                isInvalid={errors.comment && touched.comment ? true : false}
              >
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  value={values.comment}
                  onChange={handleChange}
                  id="comment"
                  name="comment"
                  height={250}
                />
                <FormErrorMessage>{errors.comment}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                colorScheme="purple"
                width="full"
                isLoading={isLoading}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;

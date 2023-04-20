import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

const Form = ({ userList, setUserList, setFilterList }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const toast = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          name,
          phone,
          email,
          id: userList.length + 1,
        }
      );
      console.log(response.data);
      setUserList((prev) => [...prev, response.data]);
      setFilterList((prev) => [...prev, response.data]);
      toast({
        title: "User created successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setEmail("");
      setName("");
      setPhone("");
    } catch (error) {
      console.error(error);
      toast({
        title: "Error creating user",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      flex="1"
      borderWidth="1px"
      borderRadius="lg"
      p={8}
      boxShadow="lg"
      w={{ base: "90%", sm: "400px", md: "500px" }}
      height="80vh"
    >
      <Heading as="h1" mb={4} textAlign={"center"}>
        Add User
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="name" mb={4}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </FormControl>
        <FormControl id="phone" mb={4}>
          <FormLabel>Phone Number</FormLabel>
          <Input
            type="tel"
            pattern="[0-9]*(.[0-9]+)?"
            placeholder="Enter phone number"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </FormControl>
        <FormControl id="email" mb={4}>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" mb={4}>
          Add user
        </Button>
      </form>
    </Box>
  );
};

export default Form;

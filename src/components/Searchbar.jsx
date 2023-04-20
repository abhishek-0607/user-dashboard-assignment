import React, { useEffect, useState } from "react";
import { Box, Flex, Input, Button, Heading } from "@chakra-ui/react";

const Searchbar = ({ userList, setFilterList }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const delay = setTimeout(() => {
      const filtered = userList.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.email.toLowerCase().includes(search.toLowerCase())
      );
      setFilterList(filtered);
    }, 1000);

    return () => clearTimeout(delay);
  }, [search, userList, setFilterList]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  const filterBySearch = (search) => {
    if (search !== "") {
      const filter = userList.filter((item) =>
        item.name.toLowerCase().includes(search)
      );
      setFilterList(filter);
    }
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      color="black"
      mb={"10px"}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
    >
      <Box>
        <Heading>User Dashboard</Heading>
      </Box>
      <Flex>
        <Input
          placeholder="search by name or email"
          mr={2}
          value={search}
          onChange={handleSearch}
        />
        <Button colorScheme="blue" onClick={() => filterBySearch(search)}>
          Search
        </Button>
      </Flex>
    </Flex>
  );
};

export default Searchbar;

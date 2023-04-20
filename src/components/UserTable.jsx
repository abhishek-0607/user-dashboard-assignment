import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
  Box,
} from "@chakra-ui/react";

const UserTable = ({ userList }) => {
  return (
    <Box flex="2" borderWidth="1px" borderRadius="lg" p={8} boxShadow="lg">
      <Heading textAlign={"center"}>User List</Heading>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>User Id</Th>
              <Th>Name</Th>
              <Th>EMail</Th>

              <Th>Phone</Th>
            </Tr>
          </Thead>
          <Tbody>
            {userList.map((user, index) => (
              <Tr key={index}>
                <Td>{index + 1}</Td>
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
                <Td>{user.phone?.split(" ")[0]}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserTable;

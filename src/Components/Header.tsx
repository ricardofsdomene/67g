import { Avatar, Flex, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Context } from "../contexts/ContextProvider";
import { useWindowSize } from "../utils/useWindowSize";

export default function Header() {
  const { user } = useContext(Context);

  const size = useWindowSize();

  return (
    <Flex flexDir="column">
      <Flex
        maxW={1200}
        style={{
          height: 80,
        }}
        w="100%"
        py="4"
        mx="auto"
        justify="space-between"
        flexDir="row"
        px={size.width > 1200 ? "0" : "4"}
      >
        <Text fontSize="2xl" fontWeight="light" color="#333">
          67g
        </Text>
        <Avatar name={user && user.name} />
      </Flex>
    </Flex>
  );
}

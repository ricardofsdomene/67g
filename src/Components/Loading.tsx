import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function Loading() {
  return (
    <Flex h="100%" w="100%" justify="center" align="center">
      <Text fontSize="3xl" color="#333">
        Loading
      </Text>
    </Flex>
  );
}

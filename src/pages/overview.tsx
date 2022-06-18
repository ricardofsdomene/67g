import { Flex, Spinner, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useContext } from "react";
import Header from "../Components/Header";
import Loading from "../Components/Loading";
import { Context } from "../contexts/ContextProvider";
import { useWindowSize } from "../utils/useWindowSize";

export default function Index() {
  const size = useWindowSize();

  const { user, loading } = useContext(Context);

  if (loading) {
    return (
      <Flex h="100vh" w="100%" justify="center" align="center">
        <Spinner size="lg" color="#333" />
      </Flex>
    );
  }

  return (
    <Flex flexDir="column" w="100%" bg="#FCFCFF" px="4" pb="4">
      <Header />
      <Flex
        maxW={1200}
        mx="auto"
        flexDir="column"
        bg="#FCFCFF"
        w="100%"
        borderRadius="10"
      >
        <Flex
          flexDir={size.width > 1200 ? "row" : "column"}
          w="100%"
          justify="space-between"
          align={size.width > 1200 ? "center" : "normal"}
        >
          <Flex flexDir="column">
            <Text fontSize="5xl" fontWeight="bold" color="#333">
              Overview
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

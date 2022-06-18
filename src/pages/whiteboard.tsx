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
    <Flex flexDir="column" w="100%" bg="#FCFCFF" px="4">
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
              Whiteboard
            </Text>
          </Flex>
        </Flex>
        <Flex
          mt="10"
          w="100%"
          justify="space-between"
          flexDir={size.width > 800 ? "row" : "column"}
        >
          <Flex
            flexDir="column"
            p="10"
            maxW={size.width < 1200 && 600}
            style={{
              width: size.width > 700 ? "32%" : "100%",
              height: 500,
            }}
            borderRadius="5"
            bg="#EEE"
            justify="space-between"
          ></Flex>
          <Flex
            mt={size.width < 800 && "4"}
            flexDir="column"
            p="10"
            maxW={size.width < 1200 && 600}
            style={{
              width: size.width > 700 ? "32%" : "100%",
              height: 500,
            }}
            borderRadius="5"
            bg="#EEE"
            justify="space-between"
          ></Flex>
          <Flex
            mt={size.width < 800 && "4"}
            flexDir="column"
            p="10"
            maxW={size.width < 1200 && 600}
            style={{
              width: size.width > 700 ? "32%" : "100%",
              height: 500,
            }}
            borderRadius="5"
            bg="#EEE"
            justify="space-between"
          ></Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

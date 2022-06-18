import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Header from "../Components/Header";

export default function Index() {
  return (
    <Flex flexDir="column" h="100vh" w="100%" bg="#FCFCFF" px="4">
      <Header />
      <Flex
        flexDir="column"
        bg="#FCFCFF"
        justify="center"
        align="center"
        w="100%"
        height="calc(100vh - 100px)"
        borderRadius="10"
      >
        <Image src="/cloud.gif" height="300" width="400" />
        {/* <Flex
          bg="#896ae1"
          borderRadius="full"
          style={{
            width: 200,
            height: 50,
          }}
          justify="center"
          align="center"
        >
          <Text color="#FFF" fontWeight="bold">
            Entrar
          </Text>
        </Flex> */}
      </Flex>
    </Flex>
  );
}

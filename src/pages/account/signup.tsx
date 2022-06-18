import { Flex, Input, Text } from "@chakra-ui/react";
import React from "react";
import Header from "../../Components/Header";
import { useWindowSize } from "../../utils/useWindowSize";

export default function Signin() {
  const size = useWindowSize();

  return (
    <Flex flexDir="column" px="4">
      <Header none />
      <Flex mt="10" mx="auto" maxW={1200} flexDir="column" w="100%" h="100%">
        <Text fontWeight="bold" color="#333" fontSize="6xl">
          Signup
        </Text>
        <Text mt="10" fontWeight="bold" color="#333" fontSize="2xl">
          Nome
        </Text>
        <Input
          mt="2"
          h="12"
          color="#333"
          maxW={size.width > 700 ? 500 : "100%"}
          borderRadius="5"
          border="1px solid #eee"
          placeholder="e.g. Peter Panda"
        />
        <Text mt="4" fontWeight="bold" color="#333" fontSize="2xl">
          Email
        </Text>
        <Input
          mt="2"
          h="12"
          color="#333"
          maxW={size.width > 700 ? 500 : "100%"}
          borderRadius="5"
          border="1px solid #eee"
          placeholder="e.g. peter@panda.com"
        />
        <Text mt="4" fontWeight="bold" color="#333" fontSize="2xl">
          Senha
        </Text>
        <Input
          mt="2"
          h="12"
          color="#333"
          maxW={size.width > 700 ? 500 : "100%"}
          borderRadius="5"
          border="1px solid #eee"
        />
        <Flex
          cursor="pointer"
          mt="10"
          h="14"
          maxW={size.width > 700 ? 500 : "100%"}
          w="100%"
          borderRadius="5"
          bg="#333"
          justify="center"
          align="center"
        >
          <Text color="#FFF" fontSize="xl" fontWeight="bold">
            Entrar
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import Header from "../Components/Header";
import Loading from "../Components/Loading";
import { Context } from "../contexts/ContextProvider";
import { useWindowSize } from "../utils/useWindowSize";

export default function Index() {
  const size = useWindowSize();

  const { user, loading } = useContext(Context);

  if (loading) {
    return <Loading />;
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
              Venture
            </Text>
            <Text fontSize="5xl" fontWeight="bold" color="#333">
              Builder
            </Text>
          </Flex>
        </Flex>
        <Flex
          mt="10"
          w="100%"
          justify="space-between"
          flexDir={size.width > 700 ? "row" : "column"}
        >
          <Flex
            flexDir="column"
            p="10"
            maxW={size.width < 1200 && 600}
            style={{
              width: size.width > 700 ? "49%" : "100%",
              height: 300,
            }}
            borderRadius="5"
            bg="#EEE"
            justify="space-between"
          >
            <Flex flexDir="column">
              <Text fontSize="5xl" fontWeight="bold" color="#333">
                ...
              </Text>
              <Text mt="5" fontSize="lg" color="#333">
                ...
              </Text>
            </Flex>
            <Flex
              borderRadius="5"
              justify="center"
              bg="#333"
              align="center"
              px="10"
              maxW={200}
              py="4"
            >
              <Text color="#FFF" fontWeight="bold">
                Saiba mais
              </Text>
            </Flex>
          </Flex>
          <Flex
            flexDir="column"
            p="10"
            mt={size.width < 700 && "4"}
            maxW={size.width < 1200 && 600}
            style={{
              width: size.width > 700 ? "49%" : "100%",
              height: 300,
            }}
            borderRadius="5"
            bg="#EEE"
            justify="space-between"
          >
            <Flex flexDir="column">
              <Text fontSize="5xl" fontWeight="bold" color="#333">
                ...
              </Text>
              <Text mt="5" fontSize="lg" color="#333">
                ...
              </Text>
            </Flex>
            <Flex
              borderRadius="5"
              justify="center"
              bg="#333"
              align="center"
              px="10"
              maxW={200}
              py="4"
            >
              <Text color="#FFF" fontWeight="bold">
                Saiba mais
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          w="100%"
          mt="10"
          borderRadius="5"
          bg="#333"
          p="10"
          align="center"
          justify="space-between"
        >
          <Text color="#fff" fontSize="xl" fontWeight="bold">
            Case
          </Text>
          <Text color="#fff" fontSize="xl" fontWeight="bold">
            Case
          </Text>
          <Text color="#fff" fontSize="xl" fontWeight="bold">
            Case
          </Text>
          <Text color="#fff" fontSize="xl" fontWeight="bold">
            Case
          </Text>
        </Flex>
        <Flex
          my="20"
          flexDir="column"
          maxW={size.width < 1200 && 600}
          style={{
            width: size.width > 700 ? "49%" : "100%",
            height: 300,
          }}
          borderRadius="5"
          justify="space-between"
        >
          <Flex flexDir="column">
            <Text fontSize="5xl" fontWeight="bold" color="#333">
              ...
            </Text>
            <Text mt="5" fontSize="lg" color="#333">
              ...
            </Text>
          </Flex>
          <Flex
            borderRadius="5"
            justify="center"
            bg="#333"
            align="center"
            px="10"
            maxW={200}
            py="4"
          >
            <Text color="#FFF" fontWeight="bold">
              Saiba mais
            </Text>
          </Flex>
        </Flex>
        <Flex mt="10" bg="#eee" borderRadius="5" h="400" w="100%" p="10"></Flex>
        <Flex
          flexDir={size.width > 700 ? "row" : "column"}
          w="100%"
          pt="10"
          pb="2"
          justify="space-between"
        >
          <Flex flexDir="column">
            <Text color="#333" fontWeight="bold">
              67g
            </Text>
            <Text mt="4" color="#333" textDecorationLine="underline">
              Nosso propósito
            </Text>
            <Text mt="4" color="#333" textDecorationLine="underline">
              Quem somos
            </Text>
          </Flex>
          <Flex flexDir="column" mt={size.width < 700 && "10"}>
            <Text color="#333" fontWeight="bold">
              O que você procura?
            </Text>
            <Text mt="4" color="#333" textDecorationLine="underline">
              Cases de sucesso
            </Text>
            <Text mt="4" color="#333" textDecorationLine="underline">
              Metodologia de ensino
            </Text>
          </Flex>
          <Flex flexDir="column" mt={size.width < 700 && "10"}>
            <Text color="#333" fontWeight="bold">
              Privacidade
            </Text>
            <Text mt="4" color="#333" textDecorationLine="underline">
              Termos de serviço
            </Text>
            <Text mt="4" color="#333" textDecorationLine="underline">
              Políticas de privacidade
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

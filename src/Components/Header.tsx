import {
  Avatar,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { Context } from "../contexts/ContextProvider";
import { useWindowSize } from "../utils/useWindowSize";

import {} from "react-icons/ri";
import {} from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";
import { useRouter } from "next/router";

export default function Header({ none = false }) {
  const { user } = useContext(Context);

  const router = useRouter();

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
      >
        <Flex align="center">
          <Text
            cursor="pointer"
            onClick={() => router.push("/")}
            fontSize="3xl"
            fontWeight="medium"
            color="#333"
          >
            67g
          </Text>
        </Flex>
        {!none && (
          <>
            {user ? (
              <Menu>
                <MenuButton>
                  <Flex cursor="pointer" align="center">
                    <Text fontSize="xl" color="#333">
                      {user.name}
                    </Text>
                    <Icon
                      as={BiChevronDown}
                      ml="2"
                      fontSize="xl"
                      color="#333"
                    />
                  </Flex>
                </MenuButton>
                <MenuList
                  border="0px solid transparent"
                  p="4"
                  style={{
                    marginLeft: -20,
                  }}
                >
                  <Text cursor="pointer" fontSize="sm" color="#333">
                    Sair
                  </Text>
                </MenuList>
              </Menu>
            ) : (
              <Flex
                onClick={() => router.push("/account/signin")}
                px="10"
                cursor="pointer"
                borderRadius="5"
                justify="center"
                align="center"
                bg="#333"
              >
                <Text color="#FFF" fontWeight="bold">
                  Entrar
                </Text>
              </Flex>
            )}
          </>
        )}
      </Flex>
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
      >
        {" "}
        {user && (
          <Flex>
            <Text
              onClick={() => router.push("/")}
              textDecorationLine={router.asPath === "/" && "underline"}
              cursor="pointer"
              fontSize="xl"
              fontWeight="light"
              color="#333"
            >
              Home
            </Text>
            <Text
              onClick={() => router.push("/project")}
              textDecorationLine={router.asPath === "/project" && "underline"}
              ml="5"
              cursor="pointer"
              fontSize="xl"
              fontWeight="light"
              color="#333"
            >
              Project
            </Text>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}

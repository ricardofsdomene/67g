import {
  Avatar,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { Context } from "../contexts/ContextProvider";
import { useWindowSize } from "../utils/useWindowSize";

import {} from "react-icons/ri";
import {} from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";
import { useRouter } from "next/router";
import Loading from "./Loading";

export default function Header({ none = false }) {
  const { loading, user, signOut } = useContext(Context);

  const router = useRouter();

  const size = useWindowSize();

  useEffect(() => {
    if (user) {
      console.log(user.role);
    }
  }, [user]);

  if (!user) {
    <Loading />;
  }

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
                    width: 150,
                    marginLeft: -20,
                  }}
                >
                  <Text
                    cursor="pointer"
                    onClick={signOut}
                    fontSize="sm"
                    color="#333"
                  >
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
        <Flex>
          {router.asPath === "/account/signin" ||
          router.asPath === "/account/signup" ? (
            <Flex display="none" />
          ) : (
            <Text
              onClick={() => router.push("/overview")}
              textDecorationLine={
                user && user.role === "67g"
                  ? router.asPath === "/overview" && "underline"
                  : router.asPath === "/" && "underline"
              }
              cursor="pointer"
              fontSize="xl"
              fontWeight="light"
              color="#333"
            >
              Overview
            </Text>
          )}
          {user && user.role === "67g" && (
            <Flex>
              <Text
                onClick={() => router.push("/whiteboard")}
                textDecorationLine={
                  router.asPath === "/whiteboard" && "underline"
                }
                ml="5"
                cursor="pointer"
                fontSize="xl"
                fontWeight="light"
                color="#333"
              >
                Whiteboard
              </Text>
              <Text
                onClick={() => router.push("/projects")}
                textDecorationLine={
                  router.asPath === "/projects" && "underline"
                }
                ml="5"
                cursor="pointer"
                fontSize="xl"
                fontWeight="light"
                color="#333"
              >
                Projects
              </Text>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}

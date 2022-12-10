import { Flex } from "@chakra-ui/react";
import { Header } from "components/organisms/Header";
import React from "react";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Flex w="100vw" h="100vh" bgColor="gray.100">
      <Header />
      <main>
        <Flex
          as="main"
          grow={1}
          minW={{ base: "xsm", md: "xl", xl: "2xl" }}
          maxW={"2xl"}
        >
          {children}
        </Flex>
      </main>
    </Flex>
  );
};

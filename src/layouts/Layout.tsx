import { Box, Flex } from "@chakra-ui/react";
import { Footer } from "components/organisms/Footer";
import { Header } from "components/organisms/Header";
import React from "react";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Flex w="100vw" h="100vh" bgColor="white" justify={"center"}>
      <Header />
      <Flex as="main" grow={{ base: 1, md: "" }} maxW={"600px"} bgColor={"gray.100"}>
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};

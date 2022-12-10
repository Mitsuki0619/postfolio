import React from "react";
import NextLink from "next/link";
import { Flex, Text } from "@chakra-ui/react";

export const HeaderLink: React.FC<{
  text: string;
  href: string;
  icon: React.ReactNode;
}> = ({ text, href, icon }) => {
  return (
    <NextLink href={href}>
      <Flex
        rounded={"full"}
        py={{ md: "2" }}
        pl={{ md: "3" }}
        pr={{ md: "6" }}
        p={"3"}
        _hover={{ bgColor: "gray.100" }}
        transition={"all"}
        transitionDuration={"0.3s"}
        alignItems={"center"}
        gap={"4"}
      >
        {icon}
        <Text
          display={{
            base: "none",
            xl: "block",
          }}
        >
          {text}
        </Text>
      </Flex>
    </NextLink>
  );
};

import React from "react";
import NextLink from "next/link";
import { Flex, Text } from "@chakra-ui/react";
import { MdAccountCircle } from "react-icons/md";

export const HeaderLink: React.FC<{
  text: string;
  href: string;
  icon: React.ReactNode;
}> = ({ text, href, icon }) => {
  return (
    <NextLink href={href}>
      <Flex
        rounded={"full"}
        py={{ xl: "2" }}
        pl={{ xl: "3" }}
        pr={{ xl: "6" }}
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

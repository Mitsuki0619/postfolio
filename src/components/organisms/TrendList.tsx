import { Wrap, WrapItem, Heading, Link, Text, Flex } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

export const TrendList: React.FC = () => {
  return (
    <Flex direction={"column"} bgColor={"gray.100"} rounded={"2xl"}>
      <Heading as={"h3"} fontSize={22} p={4}>
        トレンド
      </Heading>
      <Wrap direction="column" _last={{ roundedBottom: "2xl" }} w="full">
        <WrapItem>
          <Link
            as={NextLink}
            href="/"
            w={"full"}
            p={4}
            _hover={{ bgColor: "gray.200" }}
            transition={"all"}
            transitionDuration={"0.3s"}
            display={"block"}
          >
            <Heading as={"h4"} fontSize={18}>
              トレンドテスト
            </Heading>
            <Text color={"gray.500"} fontSize={14}>
              1223件の投稿
            </Text>
          </Link>
        </WrapItem>
      </Wrap>
    </Flex>
  );
};

import {
  Flex,
  Heading,
  Link,
  Spacer,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { SearchInput } from "../molecules/SearchInput";
import { TrendList } from "./TrendList";

export const Footer: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputText(e.target.value);
  };
  return (
    <Flex
      as="footer"
      direction="column"
      bgColor="white"
      h="full"
      overflow="auto"
      pt={8}
      pb={2}
      px={{ base: 3, lg: 5 }}
      borderLeft={"1px solid #e6ecf0"}
    >
      <Flex
        direction={"column"}
        w={"380px"}
        gap={4}
        h={"full"}
        display={{ base: "none", lg: "flex" }}
      >
        <SearchInput value={inputText} onChange={handleChangeSearch} />
        <TrendList />
        <Spacer />
        <Text color={"gray"} as={"small"} textAlign={"end"}>
          &copy; Postfolio, Inc, 2022
        </Text>
      </Flex>
    </Flex>
  );
};

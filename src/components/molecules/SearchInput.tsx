import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import React from "react";
import { BiSearch } from "react-icons/bi";

export interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
}) => {
  return (
    <InputGroup>
      <InputLeftElement
        m={"auto"}
        pointerEvents="none"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"full"}
        pl={"3"}
        color={"gray"}
        // eslint-disable-next-line react/no-children-prop
        children={<BiSearch size={"24"} />}
      />
      <Input
        variant={"filled"}
        rounded={"full"}
        placeholder={"キーワード検索"}
        focusBorderColor={"teal.500"}
        h={"12"}
        value={value}
        onChange={onChange}
      />
    </InputGroup>
  );
};

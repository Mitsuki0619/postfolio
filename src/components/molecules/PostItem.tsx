import {
  Avatar,
  Box,
  Button,
  Flex,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

type Props = {
  avatar?: string;
  name?: string;
  userName?: string;
  postTime?: number;
  textContent?: string;
};

export const PostItem: React.FC<Props> = (props) => {
  const { avatar, name, userName, postTime, textContent } = props;

  return (
    <Flex
      minH={"35vh"}
      w={"100%"}
      bg={"white"}
      p={"20px"}
      transition={"all 0.3s"}
      _hover={{ bg: "gray.100" }}
      borderBottom={"1px solid #e6ecf0"}
    >
      <Link href={""}>
        <Box pr={3} color={"gray"}>
          <Avatar src={avatar} />
        </Box>
      </Link>

      <Flex direction={"column"} flex={1}>
        <Flex
          gap={"15"}
          h={"20%"}
          fontSize={{ base: ".6rem", sm: ".8rem", md: "1rem" }}
        >
          <Link href={""}>
            <Text
              fontWeight={"bold"}
              transition={"all .1s"}
              _hover={{ borderBottom: "1px solid black" }}
            >
              {name}
            </Text>
          </Link>
          <Link href={""}>
            <Text
              as={"small"}
              color={"gray"}
              transition={"all .1s"}
              _hover={{ borderBottom: "1px solid gray" }}
            >
              @{userName}
            </Text>
          </Link>
          <Link href={""}>
            <Text
              as={"small"}
              color={"gray"}
              transition={"all .1s"}
              _hover={{ borderBottom: "1px solid gray" }}
            >
              {postTime}
            </Text>
          </Link>
          <Flex flex={1} justifyContent={"end"} alignItems={"center"}>
            <Popover>
              <PopoverTrigger>
                <Button
                  bg={"transparent"}
                  transition={"all .5s"}
                  _hover={{ bg: "teal.100", color: "teal.500" }}
                  p={"0 8px"}
                  color={"gray"}
                  rounded={"full"}
                  transform={"translateY(-10%)"}
                >
                  <BsThreeDots />
                </Button>
              </PopoverTrigger>
              <PopoverContent w={"100px"}>
                <Button bg={"white"} fontSize={"16px"} borderRadius={"none"}>
                  編集
                </Button>
                <Button
                  bg={"white"}
                  fontSize={"16px"}
                  color={"red"}
                  borderRadius={"none"}
                >
                  削除
                </Button>
              </PopoverContent>
            </Popover>
          </Flex>
        </Flex>
        <Box minH={"75%"}>
          <Text
            fontSize={"16px"}
            w={"100%"}
            wordBreak={"break-all"}
            whiteSpace={"pre-line"}
          >
            {textContent}
          </Text>
        </Box>
        <Flex
          h={"10%"}
          alignItems={"center"}
          justifyContent={"space-around"}
          gap={50}
          color={"gray"}
        >
          <FaRegComment />
          <AiOutlineHeart />
        </Flex>
      </Flex>
    </Flex>
  );
};

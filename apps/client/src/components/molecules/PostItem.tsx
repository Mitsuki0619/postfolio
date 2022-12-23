import {
  Avatar,
  Box,
  Flex,
  HStack,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

type Props = {
  avatar?: string;
  name?: string;
  userName?: string;
  postTime?: string;
  textContent?: string;
};

export const PostItem: React.FC<Props> = (props) => {
  const { avatar, name, userName, postTime, textContent } = props;

  return (
    <Flex
      as={"article"}
      bg={"white"}
      p={{ base: "2", sm: "4" }}
      transition={"all 0.3s"}
      _hover={{ bg: "gray.100" }}
      borderBottom={"1px solid #e6ecf0"}
      gap={"4"}
      w={"full"}
      cursor={"pointer"}
    >
      {/* アバター */}
      <Link as={NextLink} href={"/"} h={"min"}>
        <Avatar src={avatar} />
      </Link>

      <Flex direction={"column"} flex={"1"}>
        <Flex justifyContent={"space-between"}>
          <HStack alignItems={"end"} h={'min'}>
            {/* ユーザー名 */}
            <Link href={""} as={NextLink}>
              <Text fontWeight={"bold"} transition={"all .1s"} fontSize={'18px'}>
                {name}
              </Text>
            </Link>

            {/* ユーザーID */}
            <Link href={""} as={NextLink}>
              <Text color={"gray"} transition={"all .1s"} fontSize={'14px'}>
                @{userName}
              </Text>
            </Link>

            {/* 投稿時間 */}
            <Link href={""} as={NextLink}>
              <Text color={"gray"} transition={"all .1s"} fontSize={'14px'}>
                {postTime}
              </Text>
            </Link>
          </HStack>

          {/* 編集、削除メニュー */}
          <Menu>
            <MenuButton
              bg={"transparent"}
              transition={"all .5s"}
              p={"2"}
              color={"gray"}
              rounded={"full"}
            >
              <BsThreeDots />
            </MenuButton>
            <MenuList>
              <MenuItem>編集</MenuItem>
              <MenuItem color={"red.500"}>削除</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Flex flexDirection={"column"} gap={"6"}>
          {/* 投稿内容 */}
          <Box>
            <Text wordBreak={"break-all"} whiteSpace={"pre-line"}>
              {textContent}
            </Text>
          </Box>
          <Flex alignItems={"center"} color={"gray"}>
            <Box flex={"1"}>
              {/* コメントボタン */}
              <Box as={"button"}>
                <FaRegComment size={20} />
              </Box>
            </Box>

            <Box flex={"1"}>
              {/* いいねボタン */}
              <Box as={"button"}>
                <AiOutlineHeart size={24} />
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

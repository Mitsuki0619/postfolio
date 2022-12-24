import { Avatar, Box, Button, Flex, Link, Textarea } from "@chakra-ui/react";
import { FaImage } from "react-icons/fa";
import { HiOutlineFaceSmile } from "react-icons/hi2";
import NextLink from "next/link";
import React from "react";

export const PostForm = () => {
  return (
    <form>
      <Box
        bg={"white"}
        borderBottom={"1.4px solid #e6ecf0"}
        p={{ base: "2", sm: "4" }}
      >
        <Flex w={"full"}>
          <Link href={""} as={NextLink}>
            <Box>
              <Avatar />
            </Box>
          </Link>
          <Flex
            direction={"column"}
            justifyContent={"space-between"}
            w={"full"}
            gap={"4"}
          >
            {/* 投稿内容入力フィールド */}
            <Textarea
              _focus={{ boxShadow: "none" }}
              placeholder="いまどうしてる？"
              resize={"none"}
              overflow={"auto"}
              border={"none"}
              p={"4"}
              borderRadius={"none"}
              borderBottom={"1px solid #e6ecf0 !important"}
              outline={"none"}
              rows={4}
            />
            <Flex gap={{ base: 3, sm: 10 }} alignItems={"center"}>
              <FaImage size={20} />
              <HiOutlineFaceSmile size={20} />
              <Flex justifyContent={"flex-end"} flex={1}>
                {/* 投稿ボタン */}
                <Button
                  size={{ base: "sm", sm: "md" }}
                  colorScheme={"teal"}
                  rounded={"full"}
                >
                  投稿する
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </form>
  );
};

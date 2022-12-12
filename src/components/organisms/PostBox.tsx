import { Box, Button, Flex, Link, Textarea } from "@chakra-ui/react";
import { RxAvatar } from "react-icons/rx";
import { FaImage } from "react-icons/fa";
import { HiOutlineFaceSmile } from "react-icons/hi2";
import React from "react";

export const PostBox = () => {
  return (
    <>
      <Box p={2} bg={"white"} h={"35vh"}>
        <form>
          <Flex alignItems={"flex-start"}>
            <Link href={""}>
              <Box pt={"7px"}>
                <RxAvatar size={30} />
              </Box>
            </Link>
            <Textarea
              _focus={{ boxShadow: "none" }}
              placeholder="いまどうしてる？"
              resize={"none"}
              overflow={"hidden"}
              border={"none"}
              p={"10px"}
              lineHeight={"1.5rem"}
              height={"7rem"}
            />
          </Flex>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Flex flex={1} gap={{ base: 1, sm: 10 }} pl={5}>
              <FaImage size={20} />
              <HiOutlineFaceSmile size={20} />
            </Flex>
            <Button size={{ base: "sm", sm: "md" }} colorScheme={"teal"}>
              投稿する
            </Button>
          </Flex>
        </form>
      </Box>
    </>
  );
};

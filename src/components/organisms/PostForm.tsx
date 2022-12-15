import { Box, Button, Flex, Link, Textarea } from "@chakra-ui/react";
import { RxAvatar } from "react-icons/rx";
import { FaImage } from "react-icons/fa";
import { HiOutlineFaceSmile } from "react-icons/hi2";
import React from "react";

export const PostForm = () => {
  return (
    <form>
      <Box bg={"white"} h={"30vh"} borderBottom={"1.4px solid #e6ecf0"}>
        <Flex alignItems={"flex-start"} h={"100%"}>
          <Link href={""}>
            <Box pt={"7px"}>
              <RxAvatar size={30} />
            </Box>
          </Link>
          <Flex
            direction={"column"}
            justifyContent={"space-between"}
            w={"100%"}
            h={"100%"}
          >
            <Textarea
              fontSize={"16px"}
              _focus={{ boxShadow: "none" }}
              placeholder="いまどうしてる？"
              resize={"none"}
              overflow={"hidden"}
              border={"none"}
              p={"10px"}
              lineHeight={"1.5rem"}
              height={"7rem"}
              borderRadius={"none"}
              borderBottom={"1px solid #e6ecf0 !important"}
              outline={"none"}
            />
            <Flex gap={{ base: 1, sm: 10 }} alignItems={"center"} p={"10px"}>
              <FaImage size={20} />
              <HiOutlineFaceSmile size={20} />
              <Flex justifyContent={"flex-end"} flex={1}>
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

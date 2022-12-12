import { Box, Button, Flex } from "@chakra-ui/react";
import { PostBox } from "components/organisms/PostBox";
import { TimeLine } from "components/organisms/TimeLine";
import { Layout } from "layouts/Layout";
import React from "react";

export const HomeTemplate: React.FC = () => {
  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Layout>
      <Box
        as={"header"}
        p={3}
        fontSize={"1.5rem"}
        bg={"white"}
        position={"sticky"}
        zIndex={"100"}
        top={"0"}
        borderBottom={"1px solid gray"}
        cursor={"pointer"}
        onClick={returnTop}
      >
        Home
      </Box>
      <PostBox />
      <TimeLine />
      <TimeLine />
      <TimeLine />
      <TimeLine />
      <TimeLine />
      <TimeLine />
      <TimeLine />
      <TimeLine />
    </Layout>
  );
};

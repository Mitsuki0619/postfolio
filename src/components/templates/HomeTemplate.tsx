import { Box, Button, Flex } from "@chakra-ui/react";
import { PostForm } from "components/organisms/PostForm";
import { Layout } from "layouts/Layout";
import React from "react";
import { PostList } from "components/organisms/PostList";

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
        as={"h2"}
        p={3}
        fontSize={"1.5rem"}
        bg={"rgba(255,255,255,.9)"}
        position={"sticky"}
        zIndex={"100"}
        top={"0"}
        cursor={"pointer"}
        onClick={returnTop}
        fontWeight={"bold"}
      >
        HOME
      </Box>
      <PostForm />
      <PostList />
    </Layout>
  );
};

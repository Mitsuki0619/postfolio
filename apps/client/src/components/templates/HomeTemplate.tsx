import { Box } from "@chakra-ui/react";
import { PostForm } from "components/organisms/PostForm";
import { Layout } from "layouts/Layout";
import React, { Suspense } from "react";
import { PostList } from "components/organisms/PostList";
import { ErrorBoundary } from "react-error-boundary";

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
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={"loading"}>
          <PostList />
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
};

function ErrorFallback() {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>error</pre>
    </div>
  );
}

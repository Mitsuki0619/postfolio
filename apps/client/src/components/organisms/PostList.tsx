import { PostItem } from "components/molecules/PostItem";
import { AllPostsQuery } from "graphql/__generated__/models";
import React from "react";
import { useQuery, useSubscription } from "urql";
import { gql } from "graphql-tag";

// データ取得(例)
const datas = [
  {
    avatar: "",
    name: "ユーザー1",
    user_name: "user_1",
    post_time: "2時間前",
    content:
      "これはダミーテキストです。This is a Dummy Text.これはダミーテキストです。This is a Dummy Text.これはダミーテキストです。This is a Dummy Text.これはダミーテキストです。This is a Dummy Text.",
  },
  {
    avatar: "",
    name: "ユーザー2",
    user_name: "user_3",
    post_time: "5分前",
    content: "hello !!",
  },
];

const AllPosts = gql`
  query allPosts {
    allPosts {
      id
      content
      createdAt
      userId
    }
  }
`;

export const PostList = () => {
  const [allPostsResult] = useQuery<AllPostsQuery>({
    query: AllPosts,
  });

  const allPosts = allPostsResult.data?.allPosts;

  return (
    <>
      {allPosts?.map((post) => (
        <PostItem
          key={post?.id}
          avatar={datas[0].avatar}
          userName={datas[0].name}
          userId={post?.userId}
          createdAt={post?.createdAt}
          content={post?.content}
        />
      ))}
    </>
  );
};
